import type { FormikFieldState } from "../types/FormikFieldState.interface";

export const getFormCotrolClass = (touched: FormikFieldState, errors: FormikFieldState, name: string) => {
  if (touched[name] && errors[name]) return 'is-invalid'
  if (touched[name] && !errors[name]) return 'is-valid'
  return ''
}