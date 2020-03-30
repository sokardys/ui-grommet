/* global fetch */
import React, { useRef, useState, useEffect } from 'react'
import Reaptcha from 'reaptcha'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import {
  Box,
  Button,
  Form as GrommetForm,
  FormField,
  Text,
  TextInput,
  TextArea
} from 'grommet'

const sendingForm = async (values) => {
  console.log('sendingForm??', values)
}

const checkCaptcha = async (key, token) => {
  const response = await fetch('https://utils.tutellus.com/graphql', {
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
  if (!response.ok) {
    throw new Error(response)
  }
  return response.json()
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
        console.log('key', key)
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
  console.log('composeValidation', config)
  return yup.object().shape(config)
}

export const Form = ({ id = '', fields = {}, button = { label: 'Enviar' }, success, error }) => {
  const [status, setStatus] = useState({})
  const [valuesToSend, setValuesToSend] = useState()
  const [toSend, setToSend] = useState(false)
  const [load, setLoad] = useState(false)
  const schema = composeValidation(fields)
  console.log('validationSchema', schema)
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: schema
  })
  const captchaRef = useRef()

  useEffect(() => {
    (async () => {
      if (toSend) {
        if (valuesToSend) {
          await sendingForm(valuesToSend)
          setStatus({ send: true })
          reset()
          setTimeout(() => {
            setStatus({})
          }, 5000)
        }
        setValuesToSend(undefined)
        setToSend(false)
      }
    })()
  }, [valuesToSend, toSend])

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

  const getInput = ({ id, name, type, placeholder }) => {
    switch (type) {
      case 'textarea':
        return (
          <TextArea
            id={id}
            name={name}
            ref={register}
            resize='vertical'
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
        error={errors[name] && <Text>{errors[name].message}</Text>}
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
    <Box id={id} align='center' pad='large'>
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
        <Button
          primary
          type='submit'
          disabled={!!valuesToSend || !load}
          {...button}
        />
        {status.send && <StatusBox background='status-ok'>{success}</StatusBox>}
        {status.error && <StatusBox background='status-error'>{error}</StatusBox>}
      </GrommetForm>
    </Box>
  )
}
