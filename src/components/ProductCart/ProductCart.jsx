import React from "react";

const ProductCart = ({name, quantity, image, price, stock}) => {

  const calcPrice = (quant, pric) => {
    let sum = Number(quant) * Number(pric)
    return sum.toFixed(2);
  }

  return (
    <div className=" py-3 my-5">
      
      <div className="w-full grid grid-cols-3 gap-10">
        <div className="grid grid-cols-2">
          <div >
            <img src={image} alt="" className="w-20"/>
          </div>
          <div className="w-32 flex items-start flex-col">
            <div className="w-60">
              <h1>{name}</h1>
            </div>
            <div >
              <h1> stock: {stock}</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <h1>{quantity}</h1>
        </div>

        <div className="flex justify-end items-center">
          <h1>{calcPrice(quantity, price)}</h1>
        </div>
      </div>
    </div>
    )
}

export default ProductCart;