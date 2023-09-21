// formValidation.js
export const reName = /^(?!.*\s{2})[a-zA-Z\s]{2,30}$/
export const reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const formValidation = ({ name, email, message }) => {
  const errors = {}
  if (!reName.test(name)) errors.name = 'Debe ingresar un nombre válido'
  if (!reEmail.test(email)) errors.email = 'Debe ingresar un email válido'
  if (!name || !email || !message) errors.form = 'Todos los campos son requeridos'

  return errors
}
