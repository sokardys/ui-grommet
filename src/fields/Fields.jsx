import React, { useState, useEffect } from 'react'

import {
  FormField,
  Text,
  MaskedInput,
  TextInput,
  TextArea,
  CheckBox
} from 'grommet'

import {
  Secure
} from 'grommet-icons'


const CodeInput = ({name, onComplete, ...props}) => {
  const [code, setCode] = useState()

  useEffect(() => {
    if (code && code.length === 6) {
      onComplete && onComplete(name, code)
    }
  }, [code])

  const number = {
    length: 1,
    regexp: /^[0-9]{1}$/,
    placeholder: '0',
  }
  const mask = Array.from('000000', () => number );

  return (
    <MaskedInput
      name={name}
      {...props}
      icon={<Secure />}
      mask={mask}
      onChange={(event) => setCode(event.target.value)}
    />
  )
}

const Label = ({children}) =>
  <Text dangerouslySetInnerHTML={{ __html: children }} />

export const Fields = ({
  label,
  name,
  type = 'text',
  register,
  onComplete,
  placeholder,
  errors = {},
  ...props
}) => {
  const getInput = () => {
    switch (type) {
      case 'checkbox':
        return(
          <CheckBox
            label={<Label>{label}</Label>}
            name={name}
            ref={register}
            toggle
          />
        )
      case 'code':
        return (
          <CodeInput
            id={`${name}_id`}
            name={name}
            onComplete={onComplete}
          />
        )
      case 'area':
        return (
          <TextArea
            id={`${name}_id`}
            name={name}
            ref={register}
            placeholder={placeholder}
          />
        )
      default:
        return (
          <TextInput
            id={`${name}_id`}
            type={type}
            name={name}
            ref={register}
            placeholder={placeholder}
          />
        )
    }
  }

  const formFieldProps = {}
  if ((label || '').length > 0 && type !== 'checkbox'){
    formFieldProps.label = label
  }

  return (
    <FormField
      {...formFieldProps}
      htmlFor={`${name}_id`}
      error={errors[name] && <Text size='small' color='status-critical'>{errors[name].message}</Text>}
      {...props}
    >
      {getInput()}
    </FormField>
  )
}
