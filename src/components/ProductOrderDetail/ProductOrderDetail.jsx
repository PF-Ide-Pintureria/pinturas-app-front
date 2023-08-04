import React from "react";

const ProductOrderDetail = ({quantity, name, price}) => {
    return (
        <div className="flex py-4">
            <p className="px-2"> x{quantity} </p>
            <div className="flex w-full">
                <p className="px-2 w-80"> {name} </p>
                <p className="flex px-2"> {price} c/u </p>
            </div>
        </div>
    )
}

export default ProductOrderDetail;