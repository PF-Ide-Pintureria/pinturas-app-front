const reName = /^(?!.*\s{2})[a-zA-Z\s]{2,18}$/ // nombre entre 2 y 18 caracteres de solo letras y no mas de 1 espacio consecutivo
const reNums = /^\d{1,2000}$/ // solo permite el ingreso de numeros
const reDeci = /^(?!0\d)(\d{1,2000}|\d{0,1999}\.\d+)$/ // Acepta el ingreso de numeros y permite decimales
const reCant = /^[1-9][0-9]*(\.[0-9]{1,2})?$/ // Evalúa que la cantidad ingresada sea mayor a 0 y puede contener hasta 2 decimales
const validations = ({ name, price, color, stock }) => {
  const errors = {}

  if (!name) errors.name = 'El nombre es obligatorio'

  if (!reName.test(color)) errors.color = 'El color no debe contener números'

  if (!reDeci.test(price)) errors.price = 'Sólo ingresar números'

  if (!reNums.test(stock)) errors.stock = 'Sólo ingresar números'

  if (!reCant.test(price)) errors.price = 'El precio debe ser mayor a 0 y con un maximo de 2 decimales'
  return errors
}

export default validations
