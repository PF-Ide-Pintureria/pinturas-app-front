import React from 'react'
import ProductOrderDetail from '../../components/ProductOrderDetail/ProductOrderDetail'
import { useSelector } from 'react-redux'

const OrderDetail = () => {
  const initPoint = useSelector((state) => state.initPoint)
  const cart = useSelector((state) => state.cart)
  const prices = []

  const calcTotal = () => {
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
      const calc = (Number(prices[i].price) * Number(prices[i].quantity))
      sum += Number(calc)
    }
    console.log('sum', sum)
    return sum.toFixed(2)
  }

  return (
        <div className="flex items-center justify-center">
            <div className=" w-11/12 rounded-lg border bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 my-32">
                <div className="w-full border-b">
                    <p className="text-2xl font-bold text-gray-800 pb-2">
                        Detalle de la compra
                    </p>
                </div>
                <div className="flex justify-between">
                    <div>
                        {cart.map((product) =>
                          product && product.id
                            ? (<div className="flex" key={product.id}>
                                    <p className="flex py-4"> {prices.push({
                                      quantity: product.quantity,
                                      price: product.price
                                    })}. </p>
                                    <ProductOrderDetail
                                        key={product.id}
                                        name= {product.name}
                                        quantity = {product.quantity}
                                        price={product.price}
                                    />
                                </div>
                              )
                            : null
                        )}
                    </div>
                    <div className="flex justify-center bg-white px-2 py-4 md:px-6">
                        <div className="flex flex-col">
                            <div className=" flex border-t border-b m-10">
                                <p className="text-2xl font-bold text-gray-800 pb-2 my-5">Total</p>
                                <p className="text-2xl font-bold text-gray-800 pb-2 m-5">${calcTotal()}</p>
                            </div>
                            <a href={`${initPoint}`} className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                Ir a Pagar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OrderDetail
