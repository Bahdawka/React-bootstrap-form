import { Formik, Form } from 'formik'
import { Button, Spinner } from 'react-bootstrap'
import { handleSubmit } from '../helpers/formHelpers'
import { validationSchema } from '../config/validationSchema'
import { initialValues } from '../config/initialValues'
import InputField from './inputField'

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnMount
      validateOnChange={true}
    >
      {({ isSubmitting, errors, touched, isValid }) => (
        <Form>
          <InputField
            name="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            touched={touched}
            errors={errors}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            touched={touched}
            errors={errors}
          />

          <InputField
            name="confirmPassword"
            label="Password Confirm"
            type="password"
            placeholder="Confirm your password"
            touched={touched}
            errors={errors}
          />

          <InputField
            name="email"
            label="E-mail"
            type="email"
            placeholder="Enter your e-mail"
            touched={touched}
            errors={errors}
          />

          <Button type="submit" variant="danger" disabled={!isValid || isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status"
                  aria-hidden="true" className="me-2" />
                <span>Submitting...</span>
              </>
            ) : ('Submit')}
          </Button>
        </Form>
      )
      }
    </Formik >
  )
}

export default RegistrationForm