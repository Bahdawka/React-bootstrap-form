import { type FieldProps, Field, ErrorMessage } from 'formik'
import type { FormikFieldState } from '../types/FormikFieldState.interface'
import SuccessMessage from './SuccessMessage'
import { Form } from 'react-bootstrap'
import { getFormCotrolClass } from '../helpers/getFormControlClass'

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

const InputField = ({ name, label, type, placeholder, touched, errors, disabled, readonly }: InputFieldProps) => {
  const formControlClass = getFormCotrolClass(touched, errors, name)
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Field name={name}>
        {({ field }: FieldProps) => {
          return (
            <>
              <Form.Control
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={formControlClass}
                disabled={disabled}
                readOnly={readonly}
                isInvalid={!!(touched[name] && errors[name])}
              />
              {touched[name] && errors[name] ? (
                <ErrorMessage name={name} component="div" className="invalid-feedback" />
              ) : (<SuccessMessage name={name} touched={touched} errors={errors} />
              )}
            </>
          )
        }}
      </Field>
    </Form.Group>
  )
}

export default InputField