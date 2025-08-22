import { object, ref, string } from 'yup'

export const validationSchema = object({
  username: string().required('Username is required')
    .min(5, 'Username must be at least 5 characters long')
    .max(15, 'Username must be less than 15 characters long'),
  password: string().required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .max(15, 'Password must be less than 15 characters long'),
  confirmPassword: string()
    .required('Confirm your password')
    .oneOf([ref('password')], 'Passwords must match'),
  email: string().email('Invalid email').required('Email is required')
})