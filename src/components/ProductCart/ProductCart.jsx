import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postFavorites } from '../../redux/actions/Favorites/postFavorites'

// import { useCart } from '../../hooks/useCart'

import { putCart } from '../../redux/actions/Cart/putCart'
import Swal from 'sweetalert2'

const ProductCart = ({ id, name, quantity, image, price, stock, calcTotal }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const cartID = useSelector(state => state.cartID)
  const [count, setCount] = useState(quantity)
  // const [removeCart, setRemoveCart] = useState(false)
  // const { cartState, addToCart, removeFromCart, clearCart } = useCart()
  const [isRemove, setIsRemove] = useState(false)

  const calcPrice = (quant, pric) => {
    const sum = Number(quant) * Number(pric)
    calcTotal(sum)
    return sum.toFixed(2)
  }
  const moreOrLessQuantity = (algo) => {
    if (algo === 'more') setCount(count + 1)
    if (algo === 'less') setCount(count - 1)
  }

  const deleteProductCart = () => {
    setIsRemove(true)
  }

  useEffect(() => {
    if (isRemove) {
      if (user) {
        if (cart.length === 1) {
          dispatch(putCart({

            idUser: user.id,
            idCart: cartID,
            products: []
          })).then((response) => {
            if (response) window.location.reload()
          })

          // removeFromCart(id)
        } else {
          const copyCart = cart.filter((elem) => elem.id !== id)

          // removeFromCart(id)

          dispatch(putCart({
            idUser: user.id,
            idCart: cartID,
            products: copyCart
          })).then((response) => {
            if (response) window.location.reload()
          })
        }
      } else {
        // removeFromCart(id)
        window.location.reload()
      }
      setIsRemove(false)
    }
  }, [isRemove])

  const addFavorite = () => {
    if (user) {
      const data = {
        idUser: user.id,
        idProduct: id
      }
      dispatch(postFavorites(data)).then((response) => {
        if (response === 'existe') {
          Swal.fire('Ya exite este producto en favoritos')
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Producto agregado a favoritos',
            timer: 2000,
            showConfirmButton: false
          })
        }
      }).catch((error) => {
        console.log('error productCart', error)
      })
    } else {
      Swal.fire('Debes estar logeado para agregar favoritos')
    }
  }

  return (
        <div className=" py-3 my-5 w-full border-t">
            <div className="">
                <div className="flex flex-row">
                    <div className="w-fit">
                        <img src={image} alt="" className="w-20" />
                    </div>
                    <div className="flex px-5 flex-col w-11/12">
                        <h1 className="text-base text-ms font-semibold">{name}</h1>
                        <div className="flex gap-5">
                            <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={deleteProductCart}>Eliminar</button>
                            <button className="mt-2 ml-auto text-xs font-medium text-right text-blue-500 cursor-pointer m-5 hover:scale-110" onClick={addFavorite}>Agregar a Favoritos 🤍</button>
                        </div>
                        <div className="flex justify-between ">
                            <div className="flex items-center justify-center flex-col">
                                <div className="grid grid-cols-3 w-28 h-8 border border-gray-500 rounded">
                                    <button className={`text-2xl ${count === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-100'} `}
                                        onClick={() => moreOrLessQuantity('less')}
                                        disabled={count === 1}>
                                        -
                                    </button>
                                    <h1 className="flex justify-center items-center">{count}</h1>
                                    <button
                                        className={`text-2xl ${count === stock ? 'cursor-not-allowed' : 'hover:bg-gray-100'} `}
                                        onClick={() => moreOrLessQuantity('more')}
                                        disabled={count === stock}>
                                        +
                                    </button>
                                </div>{
                                    stock > 0
                                      ? <h1 className="text-gray-500"> {stock} disponibles </h1>
                                      : <p className="text-red-700 font-semibold"> Producto sin stock </p>}
                            </div>
                            <div className="w-80 flex justify-end items-center">
                                {stock > 0
                                  ? <h1 className="text-xl font-bold text-gray-700">$ {calcPrice(count, price)}</h1>
                                  : <p className="text-red-700 font-semibold"> Producto no disponible </p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCart
