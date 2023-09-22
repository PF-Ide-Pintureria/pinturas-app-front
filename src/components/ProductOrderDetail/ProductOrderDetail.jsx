import React from 'react'

const ProductOrderDetail = ({ quantity, name, price }) => {
  return (
        <div className="flex w-full py-4">
            <p className="px-2 w-80"> {name} </p>
            <div className="flex">
                <p className="flex px-2 w-28"> {price} c/u </p>
                <p className="px-2"> x{quantity} </p>
            </div>
        </div>
  )
}

export default ProductOrderDetail
