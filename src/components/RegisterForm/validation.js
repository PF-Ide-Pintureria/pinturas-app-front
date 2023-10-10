const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*_-]{8,}$/ // longitud mínima de 8 caracteres y al menos una letra minúscula, una letra mayúscula y un número.

export const validation = ({ name, lastName, email, password, confirmPassword }) => {
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

  if (!password) {
    errors.password = 'La contraseña es obligatoria'
  } else if (!passwordRegex.test(password)) {
    errors.password = 'No cumple los requisitos de seguridad'
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
  }
  return errors
}
