const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*_-]{8,}$/ // longitud mínima de 8 caracteres y al menos una letra minúscula, una letra mayúscula y un número.

export const updateUserValidation = ({ name, lastName, email, newPassword, confirmPassword }) => {
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
  if (newPassword) {
    if (!passwordRegex.test(newPassword)) {
      errors.newPassword = 'No cumple los requisitos de seguridad'
    }
  }

  if (newPassword !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
  }
  return errors
}
