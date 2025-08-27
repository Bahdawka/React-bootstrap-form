import { Form } from 'react-bootstrap'
import type { FormikFieldState } from '../types/FormikFieldState.interface'

interface SuccessMessageProps {
  name: string
  touched: FormikFieldState
  errors: FormikFieldState
  successMessage?: string
}

const SuccessMessage = ({ name, touched, errors, successMessage = 'Looks good!' }: SuccessMessageProps) => {
  if (!touched[name] && errors[name]) {
    return null
  }

  return (
    <Form.Text as="div" className="valid-feedback">
      {successMessage}
    </Form.Text>
  )
}

export default SuccessMessage