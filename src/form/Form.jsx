/* global fetch */
import React, { useRef, useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import Reaptcha from 'reaptcha'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'

import {
  Box,
  Button,
  Form as GrommetForm,
  Text
} from 'grommet'

import { Fields } from '../fields/Fields'

const sendEmail = async ({ values, template, from, to }) => {
  const response = await fetch('https://t9vq7jwbe0.execute-api.us-east-1.amazonaws.com/prod/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `mutation sendEmail($input: SendEmailInput!) {
        sendEmail(input: $input) {
          messageId
          originalMessage
        }
      }`,
      variables: {
        input: {
          template,
          from,
          to,
          locals: values
        }
      }
    })
  })
  const resBody = await response.json()
  if (resBody.errors) {
    throw new Error(resBody.errors[0])
  }
  return resBody
}

const checkCaptcha = async (key, token) => {
  const url = 'https://utils.tutellus.com/graphql'
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query VERIFY($key: String!, $token: String!) {
        verifyRecaptcha(key: $key, token: $token)
      }`,
      variables: {
        key,
        token
      }
    })
  })
  const { data: { verifyRecaptcha } } = await response.json()
  return verifyRecaptcha
}

const StatusBox = ({ background, children }) =>
  <Box
    background={background}
    pad='xsmall'
    round='xsmall'
    margin={{ top: 'small' }}
  >
    <Text
      weight='bold'
      color='light-1'
      textAlign='center'
    >
      {children}
    </Text>
  </Box>

const composeValidation = fields => {
  const config = Object.keys(fields).reduce((acu, name) => {
    const field = fields[name]

    const getYupBase = () => {
      if (field.type === 'checkbox') {
        return yup.boolean()
      }
      return yup.string()
    }

    if (field.validation) {
      const fieldConfig = Object.keys(field.validation).reduce((acu, key) => {
        switch (key) {
          case 'required':
            return acu.required(field.validation[key])
          case 'email':
            return acu.email(field.validation[key])
          case 'equalfield':
            return acu.oneOf(
              [yup.ref(field.validation[key].field)],
              field.validation[key].text
            )
          case 'checked':
            return acu.oneOf([true], field.validation[key])
        }
        return acu
      }, getYupBase())
      acu[name] = fieldConfig
    }
    return acu
  }, {})
  return yup.object().shape(config)
}

export const Form = ({
  id = '',
  fields = {},
  button = { label: 'Enviar' },
  success = 'Enviado!',
  error = 'Upps! Ocurrió un problema',
  onSend,
  template,
  from,
  to,
  sendFormFn,
  timeout = 3000
}) => {
  const [status, setStatus] = useState({})
  const [valuesToSend, setValuesToSend] = useState()
  const [toSend, setToSend] = useState(false)
  const [captchaReady, setCaptchaReady] = useState(false)
  const [rendered, setRendered] = useState(false)
  const [sending, setSending] = useState(false)
  const schema = useMemo(() => composeValidation(fields), [fields])
  const { register, handleSubmit, errors, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  })
  const captchaRef = useRef()

  useEffect(() => {
    if (captchaReady && !rendered) {
      captchaRef.current.renderExplicitly()
      setRendered(true)
    }
  }, [captchaReady])

  useEffect(() => {
    Object.keys(fields).filter(key => fields[key].type === 'select')
      .map(key => {
        register({ name: key })
      })
  }, [fields])

  useEffect(() => {
    let timeoutId
    const resetForm = (sended = false) => {
      timeoutId = setTimeout(() => {
        setStatus({})
        sended && onSend && onSend()
      }, timeout * (sended ? 1 : 2))
      setValuesToSend(undefined)
      setToSend(false)
    }
    const sendForm = async () => {
      if (toSend) {
        setSending(true)
        try {
          if (valuesToSend) {
            if (sendFormFn) {
              await sendFormFn({
                values: valuesToSend
              })
            } else {
              await sendEmail({
                values: valuesToSend,
                template,
                from,
                to
              })
            }
            setStatus({ send: true })
            reset()
            resetForm(true)
          }
        } catch (ex) {
          console.error('sendForm - ERROR', JSON.stringify(ex))
          setStatus({ error: true })
          resetForm()
        } finally {
          setSending(false)
        }
      }
    }
    if (!sending) {
      sendForm()
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [valuesToSend, toSend, status])

  if (!fields.captcha) {
    console.log('SiteKey del reCaptcha no está configurado')
  }

  const onSubmit = values => {
    setValuesToSend(values)
    captchaRef.current.reset()
    captchaRef.current.execute()
  }

  const onVerify = key => async token => {
    if (token) {
      try {
        const isValid = await checkCaptcha(key, token)
        if (isValid) {
          setToSend(true)
        } else {
          setStatus({ error: true })
          setValuesToSend(undefined)
        }
      } catch (ex) {
        setStatus({ error: true })
      }
    }
  }

  const composeReaptcha = ({ index, id, field }) =>
    <Reaptcha
      key={`${id}_captcha_${index}`}
      ref={captchaRef}
      sitekey={field.clientSecret || 'Invalid Site Key'}
      onLoad={() => setCaptchaReady(true)}
      onVerify={onVerify(field.key)}
      size={field.size || 'invisible'}
      explicit
    />

  return (
    <Box align='center'>
      <GrommetForm onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(fields).map((name, index) => {
          const field = fields[name]
          if (name !== 'captcha') {
            return (
              <Fields
                key={`${id}_field_${index}`}
                name={name}
                register={register}
                setValue={setValue}
                errors={errors}
                { ...field }
              />
            )
          } else {
            return composeReaptcha({id, index, field})
          }
        })}
        {status.send && <StatusBox background='status-ok'>{success}</StatusBox>}
        {status.error && <StatusBox background='status-error'>{error}</StatusBox>}
        <Button
          primary
          type='submit'
          disabled={!!valuesToSend}
          margin={{ top: 'medium' }}
          {...button}
        />
      </GrommetForm>
    </Box>
  )
}
