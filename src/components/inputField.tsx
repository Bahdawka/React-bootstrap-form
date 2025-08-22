import { type FieldProps, Field, ErrorMessage } from 'formik'
import type { FormikFieldState } from '../types/FormikFieldState.interface'
import SuccessMessage from './SuccessMessage'
import type { ChangeEvent } from 'react'

interface InputFieldProps {
  name: string
  type: string
  label: string
  placeholder: string
  errors: FormikFieldState
  touched: FormikFieldState
  disabled?: boolean
  readonly?: boolean
}

const InputField = ({ name, label, type, placeholder, touched, errors }: InputFieldProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            form.setFieldTouched(name, true, false)
            field.onChange(e)
          }

          return (
            <>
              <input
                type={type}
                {...field}
                onChange={handleChange}
                placeholder={placeholder}
                className={`form-control ${touched[name] && errors[name]
                  ? 'is-invalid'
                  : touched[name] && !errors[name]
                    ? 'is-valid'
                    : ''
                  }`}
              />
              {touched[name] && errors[name] ? (
                <ErrorMessage name={name} component="div" className="invalid-feedback" />
              ) : touched[name] && !errors[name] ? (
                <SuccessMessage name={name} />
              ) : null}
            </>
          )
        }}
      </Field>
    </div>
  )
}

export default InputField