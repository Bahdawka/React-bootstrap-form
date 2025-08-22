import { Formik, Form, Field, type FieldProps } from 'formik'
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

const initialValues = { username: '', password: '', confirmPassword: '', email: '' }

const RegistrationForm = () => {

  return (
    <Formik initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1500)
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <Field name="username">
              {({ field }: FieldProps) => (
                <>
                  <input
                    {...field}
                    type="text"
                    placeholder="Enter your username"
                    className={`form-control ${touched.username && errors.username
                      ? 'is-invalid'
                      : touched.username && !errors.username
                        ? 'is-valid'
                        : ''
                      }`}
                  />
                  {touched.username && errors.username ? (
                    <div className="invalid-feedback">{errors.username}</div>
                  ) : touched.username && !errors.username ? (
                    <div className="valid-feedback">Looks good!</div>
                  ) : null}
                </>
              )}
            </Field>
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <Field name="password">
              {({ field }: FieldProps) => (
                <>
                  <input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className={`form-control ${touched.password && errors.password
                      ? 'is-invalid'
                      : touched.password && !errors.password
                        ? 'is-valid'
                        : ''
                      }`}
                  />
                  {touched.password && errors.password ? (
                    <div className="invalid-feedback">{errors.password}</div>
                  ) : touched.password && !errors.password ? (
                    <div className="valid-feedback">Looks good!</div>
                  ) : null}
                </>
              )}
            </Field>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword">
              {({ field }: FieldProps) => (
                <>
                  <input
                    {...field}
                    type="password"
                    placeholder="Confirm your password"
                    className={`form-control ${touched.confirmPassword && errors.confirmPassword
                      ? 'is-invalid'
                      : touched.confirmPassword && !errors.confirmPassword
                        ? 'is-valid'
                        : ''
                      }`}
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="invalid-feedback">{errors.confirmPassword}</div>
                  ) : touched.confirmPassword && !errors.confirmPassword ? (
                    <div className="valid-feedback">Looks good!</div>
                  ) : null}
                </>
              )}
            </Field>
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Field name="email">
              {({ field }: FieldProps) => (
                <>
                  <input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className={`form-control ${touched.email && errors.email
                      ? 'is-invalid'
                      : touched.email && !errors.email
                        ? 'is-valid'
                        : ''
                      }`}
                  />
                  {touched.email && errors.email ? (
                    <div className="invalid-feedback">{errors.email}</div>
                  ) : touched.email && !errors.email ? (
                    <div className="valid-feedback">Looks good!</div>
                  ) : null}
                </>
              )}
            </Field>
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
      )
      }
    </Formik >
  )
}

export default RegistrationForm