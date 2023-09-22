import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorites } from '../../redux/actions/Favorites/deleteFavorite'
import Swal from 'sweetalert2'

const FavoriteCard = ({ id, image, name, stock, active, price }) => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)
  const idUser = user.id
  const idProduct = id

  const deleteProductCart = () => {
    deleteFavorites(idUser, idProduct)(dispatch).then((response) => {
      if (response) {
        Swal.fire({ icon: 'success', text: 'Favorito eliminado' })
      }
    }).catch((error) => console.log('error', error))
  }

  return (
        <div className="flex p-5  w-full rounded hover:bg-gray-200">
            <img src={image} alt={`${name} `} className="w-auto h-36"/>
            <div className="flex flex-col justify-evenly p-5">
                    <div>
                        <p className="text-base font-semibold ">{name}</p>
                        <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={() => deleteProductCart()}> Eliminar </button>
                    </div>
                <div>
                    {stock === 1 && <p className="text-red-700 font-semibold"> Producto sin stock </p>}
                    {active === 'false' && <p className="text-red-700 font-semibold"> Producto no disponible</p>}
                    <p className="flex items-end text-2xl">${price}</p>
                </div>
            </div>
        </div>
  )
}

export default FavoriteCard
