const reShort = /^.{0,20}$/ // no permitir mas de 20 caracteres
const reLong = /^.{0,1000}$/ // no permitir mas de 1000 caracteres
const reNums = /^(\d{1,20}(\.\d{0,2})?)$/ // permite el ingreso de numeros hasta 20 cifras
const reCant = /^[1-9]\d*(\.\d+)?$/ // Evalúa que la cantidad ingresada sea mayor a 0

const validations = ({ name, price, code, color, stock, patent, description }) => {
  const errors = {}

  if (!name) errors.name = 'El nombre es obligatorio'

  if (!patent) errors.patent = 'Elegir un proveedor'

  if (!code) errors.code = 'El código es obligatorio'

  if (!reNums.test(price)) errors.price = 'Sólo ingresar números validos'

  if (!reCant.test(price)) errors.price = 'El precio debe ser mayor a 0'

  if (!reNums.test(stock)) errors.stock = 'Sólo ingresar números'

  if (!reShort.test(color)) errors.color = '20 caracteres como máximo'

  if (!reLong.test(description)) errors.description = '1000 caracteres como máximo'

  return errors
}

export default validations
