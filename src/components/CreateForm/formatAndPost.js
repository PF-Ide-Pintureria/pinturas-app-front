import { postProduct } from '../../redux/actions/Products/postProduct'
import Swal from 'sweetalert2'

export const formatAndPost = async (inputsForm, dispatch) => {
  try {
    // const newProduct = {
    //     ...inputsForm,
    // };
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

    await postProduct(formData)(dispatch).then((res) => {
      if (res.status === 201) {
        Swal.fire({ icon: 'success', text: `Producto creado correctamente con el id: ${res.data.product[0].idProduct}` })
        return (res.data.product[0].idProduct)
      }
    }).catch((err) => {
      console.error(err)
    })
  } catch (error) {
    console.error(error)
  };
}
