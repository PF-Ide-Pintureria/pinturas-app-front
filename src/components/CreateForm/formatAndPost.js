import { postProduct } from '@redux/actions/Products/postProduct'
import Swal from 'sweetalert2'

export const formatAndPost = async (inputsForm, dispatch, navigate) => {
  try {
    const formData = new FormData()
    formData.append('name', inputsForm.name)
    formData.append('price', inputsForm.price)
    formData.append('code', inputsForm.code)
    formData.append('category', inputsForm.category)
    formData.append('patent', inputsForm.patent)
    formData.append('color', inputsForm.color)
    formData.append('package', inputsForm.package)
    formData.append('stock', inputsForm.stock)
    formData.append('image', inputsForm.image)
    formData.append('description', inputsForm.description)

    await postProduct(formData)(dispatch)

    Swal.fire({ icon: 'success', text: 'Producto creado correctamente' })
    navigate('/products')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response.data.error ? error.response.data.error : error.response.data}`
    })
    console.error(error)
  }
}
