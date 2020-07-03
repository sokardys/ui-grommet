/* global fetch */
import React, { useRef, useState, useEffect, useMemo } from 'react'
import Reaptcha from 'reaptcha'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import {
  Box,
  Button,
  Form as GrommetForm,
  FormField,
  Select,
  Text,
  TextInput,
  TextArea
} from 'grommet'

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
    if (field.validation) {
      const fieldConfig = Object.keys(field.validation).reduce((acu, key) => {
        switch (key) {
          case 'required':
            return acu.required(field.validation[key])
          case 'email':
            return acu.email(field.validation[key])
        }
        return acu
      }, yup.string())
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
  const [load, setLoad] = useState(false)
  const [sending, setSending] = useState(false)
  const schema = useMemo(() => composeValidation(fields), [fields])
  const { register, handleSubmit, errors, reset, setValue } = useForm({
    validationSchema: schema
  })
  const captchaRef = useRef()

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

  const onFocus = () => {
    if (!load) {
      captchaRef.current.renderExplicitly()
      setLoad(true)
    }
  }

  const getInput = ({ id, name, type, placeholder, options }) => {
    switch (type) {
      case 'select':
        return (
          <Select
            id={id}
            name={name}
            options={options}
            placeholder={placeholder}
            onFocus={onFocus}
            onChange={({ option }) => setValue(name, option, true)}
          />
        )
      case 'textarea':
        return (
          <TextArea
            id={id}
            name={name}
            ref={register}
            resize='vertical'
            rows='3'
            placeholder={placeholder}
            onFocus={onFocus}
          />
        )
      default:
        return (
          <TextInput
            id={id}
            name={name}
            type={type}
            ref={register}
            placeholder={placeholder}
            onFocus={onFocus}
          />
        )
    }
  }

  const composeField = ({ key, label, name, ...props }) => {
    if (errors[name]) console.log('composeField - errores', errors[name])
    return (
      <FormField
        label={label}
        key={key}
        htmlFor={`${name}_id`}
        error={errors[name] && <Text color='status-critical'>{errors[name].message}</Text>}
      >
        {getInput({
          id: `${name}_id`,
          name,
          ...props
        })}
      </FormField>
    )
  }

  return (
    <Box align='center'>
      <GrommetForm onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(fields).map((name, index) => {
          const field = fields[name]
          if (name === 'captcha') {
            return (
              <Reaptcha
                key={`${id}_captcha_${index}`}
                ref={captchaRef}
                sitekey={field.clientSecret || 'Invalid Site Key'}
                onVerify={onVerify(field.key)}
                size='invisible'
                explicit
              />
            )
          } else {
            return composeField({
              key: `${id}_field_${index}`,
              name,
              ...field
            })
          }
        })}
        {status.send && <StatusBox background='status-ok'>{success}</StatusBox>}
        {status.error && <StatusBox background='status-error'>{error}</StatusBox>}
        <Button
          primary
          type='submit'
          disabled={!!valuesToSend || !load}
          margin={{ top: 'medium' }}
          {...button}
        />
      </GrommetForm>
    </Box>
  )
}
