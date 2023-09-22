import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { postFavorites } from '../../redux/actions/Favorites/postFavorites'
// import Swal from 'sweetalert2'

const Products = ({ idProduct, name, image, price, prodpackage }) => {
  // const user = useSelector((state) => state.user)
  // const dispatch = useDispatch()

  // const addFavorite = () => {
  //   if (user) {
  //     const data = {
  //       idUser: user.id,
  //       idProduct
  //     }
  //     dispatch(postFavorites(data))
  //       .then((response) => {
  //         if (response === 'existe') {
  //           Swal.fire('Ya exite este producto en favoritos')
  //         } else {
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Producto agregado a favoritos',
  //             timer: 2000,
  //             showConfirmButton: false
  //           })
  //         }
  //       })
  //       .catch((error) => {
  //         console.log('error productCart', error)
  //       })
  //   } else {
  //     Swal.fire('Debes estar logeado para agregar favoritos')
  //   }
  // }

  return (
    <div className="w-64 h-96 flex flex-col items-center text-secondary justify-center bg-tertiary rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
      <div className="absolute top-4 right-4">
        {/* <span className="cursor-pointer" onClick={addFavorite}>
      🤍
    </span> */}
      </div>
      <div>
        <img src={image} alt="image" className="w-40 h-48 mx-auto" />
        <h3 className="text-center text-xl w-52 my-1">{name}</h3>
        <h4 className="text-center w-52 text-primary">$ {price}</h4>
        <h4 className="text-center w-52">{prodpackage}</h4>
        <NavLink
          to={`/products/${idProduct}`}
          className="relative inline-flex items-center justify-center p-0.5 mt-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <p className="relative inline-flex items-center justify-center px-5 py-2.5 transition-all ease-in duration-7 w-52 rounded-md group-hover:bg-opacity-0">
            Ver Producto
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default Products
