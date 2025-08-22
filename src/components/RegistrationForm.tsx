import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Spinner } from 'react-bootstrap'
import { object, ref, string } from 'yup'

const validationSchema = object({
  username: string().required('Username is required'),
  password: string().required('Password is required'),
  confirmPassword: string()
    .required('Confirmation of the password is required')
    .oneOf([ref('password')], 'Passwords must match'),
  email: string().email('Invalid email').required('Email is required')
})

const RegistrationForm = () => {

  return (
    <Formik initialValues={{ username: '', password: '', confirmPassword: '', email: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1500)
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" className="form-control" placeholder="Enter your username" />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className="form-control" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" name="confirmPassword" className="form-control" placeholder="Confirm your password" />
            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="form-control" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <Button type="submit" variant="danger" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status"
                  aria-hidden="true" className="me-2" />
                <span>Submitting...</span>
              </>
            ) : (
              'Submit'
            )
            }
          </Button>

        </Form>
      )}
    </Formik>
  )
}

export default RegistrationForm