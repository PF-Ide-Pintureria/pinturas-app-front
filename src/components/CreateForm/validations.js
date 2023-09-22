const reName = /^(?!.*\s{2})[a-zA-Z\s]{2,18}$/ // nombre entre 2 y 18 caracteres de solo letras y no mas de 1 espacio consecutivo
const reNums = /^\d{1,2000}$/ // solo permite el ingreso de numeros
const reCant = /^[1-9][0-9]*$/ // Evalúa que la cantidad ingresada sea mayor a 0

const validations = ({ name, price, color, stock }) => {
  const errors = {}

  if (!name) errors.name = 'El nombre es obligatorio'

  if (!reName.test(color)) errors.color = 'El color no debe contener números'

  if (!reNums.test(price)) errors.price = 'Sólo ingresar números'

  if (!reNums.test(stock)) errors.stock = 'Sólo ingresar números'

  if (!reCant.test(price)) errors.price = 'El precio debe ser mayor a 0'
  return errors
}

export default validations
