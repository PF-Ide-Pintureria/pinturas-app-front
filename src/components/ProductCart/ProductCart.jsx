import React from "react";

const ProductCart = ({name, quantity, image, price, stock}) => {

  const calcPrice = (quant, pric) => {
    let sum = Number(quant) * Number(pric)
    return sum.toFixed(2);
  }

  return (
    <div className=" py-3 my-5 border-t">
      
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="flex">
          <div >
            <img src={image} alt="" className="w-20"/>
          </div>
          <div className="flex px-5 flex-col">
            <div className="">
              <h1 className="text-base font-semibold">{name}</h1>
              <h1> stock: {stock}</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-end items-center">
            <h1 className="px-10">{quantity}</h1>
          </div>

          <div className="flex justify-end items-center">
            <h1>{calcPrice(quantity, price)}</h1>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProductCart;