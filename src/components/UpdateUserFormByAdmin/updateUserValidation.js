export const updateUserValidation = ({ name, lastName, email }) => {
  const errors = {}

  if (!name) {
    errors.name = 'El nombre es obligatorio'
  }
  if (!lastName) {
    errors.lastName = 'El apellido es obligatorio'
  }
  if (!email) {
    errors.email = 'El correo electrónico es obligatorio'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'El correo electrónico no es válido'
  }
  return errors
}
