import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const UserOrderDetail = () => {
  const navigate = useNavigate()
  const detail = useSelector((state) => state.orderDetail)
  const user = useSelector((state) => state.user)
  const productsRaw = detail.products
  const products = productsRaw.map((product) => JSON.parse(product))

  if (user.id === detail.userId) {
    return (
            <div className="flex flex-col p-16">
                <div className="flex items-center justify-around h-16 bg-indigo-300 rounded-t-xl">
                    <h1 className="text-xl font-semibold">Orden {detail.id}</h1>
                    <h1 className="text-xl font-semibold">
                        Fecha pedido {detail.createdAt.slice(0, 10)}
                    </h1>
                </div>
                <div className="border border-solid rounded-b-lg">
                    <div className="w-full flex flex-col">
                        <h1 className="text-xg font-medium px-7 py-3">Productos</h1>
                    </div>

                    <div className="grid grid-cols-2 ">
                        {products.map((product) => {
                          return (
                                <div className="mb-9 flex" key={product.id}>
                                    <div className="flex p-5  w-full rounded hover:bg-gray-200 ">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} `}
                                            className="w-20"
                                        />
                                        <div className="flex flex-col justify-between p-5">
                                            <div>
                                                <p className="text-base font-semibold ">
                                                    {product.name}
                                                </p>
                                                <h1 className="text-base font-semibold ">
                                                    {' '}
                                                    cantidad: {product.quantity}
                                                </h1>
                                                <h1 className="flex items-end text-base">
                                                    ${product.price}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          )
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-evenly">
                    {detail.state === 'paid' && (
                        <div>
                            <Link to={`/reviews/${detail.id}`} className="underline">
                                <button
                                    // onClick={sendReview}
                                    className="bg-indigo-800 rounded-xl w-56 h-12 m-8 text-white border-2 border-solid border-gray-300 shadow-md font-bold hover:bg-indigo-700 hover:text-yellow-200 transition-transform transform hover:transform hover:scale-105"
                                >
                                    Opina sobre tu compra
                                </button>
                            </Link>
                        </div>
                    )}
                    <h1 className=" flex  font-semibold text-xl">
                        Total compra: <p className="font-black pl-4">${detail.total}</p>
                    </h1>
                </div>
            </div>
    )
  } else {
    Swal.fire({ icon: 'error', title: 'Oops!', text: 'No autorizado!' })
    navigate('/')
  }
}

export default UserOrderDetail
