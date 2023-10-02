// Regex solo numeros con "." para decimales, positivos y menores que 100
const reNumeros = /^(?:\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/
// Regex para que solo se pueda ingresar un nombre de 30 caracteres
const reNombre = /^.{1,30}$/

export const validation = ({ name, discount, markup }) => {
  const errors = {}
  if (name === '' || discount === '' || markup === '') {
    errors.empty = 'No puede haber campos vacios'
  }
  if (name) {
    if (!reNombre.test(name)) {
      errors.name = 'El campo nombre no puede ser de mas de 30 caracteres'
    }
  }
  if (discount) {
    if (!reNumeros.test(discount)) {
      errors.discount = 'descuento debe ser número, positivo y menor a 100'
    }
  }
  if (markup) {
    if (!reNumeros.test(markup)) {
      errors.markup = 'ganacia debe ser número y positivo'
    }
  }
  return errors
}
