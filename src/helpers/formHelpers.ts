import type { RegistrationFormValues } from '../types/RegistrationFormValues.interface'
import type { FormikHelpers } from 'formik'

export const handleSubmit = (
  values: RegistrationFormValues,
  { setSubmitting }: FormikHelpers<RegistrationFormValues>
) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 1500)
}