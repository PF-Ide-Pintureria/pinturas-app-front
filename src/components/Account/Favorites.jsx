import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavorites } from "../../redux/actions/Favorites/deleteFavorite";

const Favorities = () => {
    const favorites = useSelector((state) => state.allFavorites);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    
    console.log('user', user)
    const deleteProductCart = (id) => {
        if (user){
            let data = {
                idUser: user.id,
                idProduct: id
            }
            // console.log('data', data)
            deleteFavorites(data)(dispatch).then((response) => {
                if (response) {
                    Swal.fire({ icon: 'success', text: "Eliminado" });
                }
            }).catch((error) => console.log('error', error))
        }
    }

    return (
        <div className="container mx-auto px-4">
            {" "}
            <li>
                <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className=" text-gray-600">
                        <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </span>
                    <span>Favoritos</span>
                </p>
            </li>
            <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded bg-tertiary grid grid-cols-2">

                {favorites 
                ? (
                    favorites.map((favorite) => 
                    <div className="flex p-5  w-full rounded hover:bg-gray-200 ">
                        <img src={favorite.image} alt={`${favorite.name} `} className="w-20" />
                        <div className="flex flex-col justify-between p-5">
                            <div>
                                <p className="text-base font-semibold ">{favorite.name}</p>
                                <button className="text-indigo-500 font-medium font-sans text-left flex items-center pb-3" onClick={() => deleteProductCart(favorite.id)}>Eliminar</button>
                            </div>
                            <div>
                            {favorite.stock === 1 && <p className="text-red-700 font-semibold"> Producto sin stock </p>}
                            {favorite.active === "false" && <p className="text-red-700 font-semibold"> Producto sin stock </p>}
                                <p className="flex items-end text-2xl">${favorite.price}</p>

                            </div>
                        )
                    )
                    : (<p className="flex items-center space-x-3 text-gray-500 p-2 ">
                        No tienes favoritos
                    </p>
                    )}
            </div>
            <div className="flex justify-between m-10">
                <Link to="/products">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Ir a buscar Productos
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Favorities;
