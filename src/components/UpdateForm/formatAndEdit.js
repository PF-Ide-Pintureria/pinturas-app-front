import { putProduct } from '../../redux/actions/Products/putProducts'
import Swal from 'sweetalert2'

export const formatAndEdit = async (inputsForm, idProduct, dispatch) => {
  try {
    const formData = new FormData()
    formData.append('name', inputsForm.name)
    formData.append('price', inputsForm.price)
    formData.append('category', inputsForm.category)
    formData.append('patent', inputsForm.patent)
    formData.append('color', inputsForm.color)
    // formData.append('package', inputsForm.package);
    formData.append('stock', inputsForm.stock)
    formData.append('image', inputsForm.image)

    await putProduct(idProduct, formData)(dispatch).then((res) => {
      if (res.status === 201) {
        Swal.fire(`Producto ${res.data.product.idProduct} modificado correctamente`)
      }
    }).catch((err) => {
      console.error(err)
    })
  } catch (error) {
    console.error(error)
  };
}
