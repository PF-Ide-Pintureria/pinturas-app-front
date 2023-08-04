import React from "react";
import { useSelector } from "react-redux";
const OrderDetail = () => {
    const initPoint = useSelector((state) => state.initPoint);
    return (
        <div className="flex items-center justify-center m-20"> 
            <a href={`${initPoint}`} className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                Ir a Pagar
            </a>
        </div>
    )
}

export default OrderDetail