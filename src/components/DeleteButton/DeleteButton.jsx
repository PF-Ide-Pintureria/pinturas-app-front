import React from "react";


const DeleteButton = () => {

    const handleClick = () => {
        alert('Borrado de producto')
    }

    return (
        <div className="flex justify-end">
            <button onClick={handleClick} className="bg-warning rounded-xl w-40 h-12 m-8 text-yellow-300 border-2 border-solid border-gray-300 shadow-md font-bold">Borrar producto</button>
        </div>
    );
}

export default DeleteButton;