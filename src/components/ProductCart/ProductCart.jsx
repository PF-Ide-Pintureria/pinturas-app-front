import React, { useState } from "react";
import Swal from 'sweetalert2';

const ProductCart = ({ name, quantity, image, price, stock, addPrice }) => {
    const [count, setCount] = useState(quantity)

    const calcPrice = (quant, pric) => {
        let sum = Number(quant) * Number(pric)
        addPrice(sum.toFixed(2))
        return sum.toFixed(2);
    }
    const moreOrLessQuantity = (algo) => {
        if (algo === "more") setCount(count + 1);
        if (algo === "less") setCount(count - 1);
    }

    const deleteProductCart = () => {
        Swal.fire("not implemented");
    }
    const addFavorite = () => {
        Swal.fire("not implemented");
    }

    return (
        <div className=" py-3 my-5 w-full border-t">
            <div className="">
                <div className="flex flex-row">
                    <div className="w-fit">
                        <img src={image} alt="" className="w-20" />
                    </div>
                    <div className="flex px-5 flex-col w-11/12">
                        <h1 className="text-base font-semibold">{name}</h1>
                        <div className="flex gap-5">
                            <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={deleteProductCart}>Eliminar</button>
                            <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={addFavorite}>Guardar</button>
                        </div>
                        <div className="flex justify-between ">
                            <div className="flex items-center justify-center flex-col">
                                <div className="grid grid-cols-3 w-28 h-8 border border-gray-500 rounded">
                                    <button className={`text-2xl ${count == 1 ? "cursor-not-allowed" : "hover:bg-gray-100"} `}
                                        onClick={() => moreOrLessQuantity("less")}
                                        disabled={count == 1}>
                                        -
                                    </button>
                                    <h1 className="flex justify-center items-center">{count}</h1>
                                    <button
                                        className={`text-2xl ${count == stock ? "cursor-not-allowed" : "hover:bg-gray-100"} `}
                                        onClick={() => moreOrLessQuantity("more")}
                                        disabled={count == stock}>
                                        +
                                    </button>
                                </div>
                                <h1 className="text-gray-500"> {stock} disponibles </h1>
                            </div>
                            <div className="w-80 flex justify-end items-center">
                                <h1 className="text-xl font-bold text-gray-700">$ {calcPrice(count, price)}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart;