import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
const Orders = () => {
  return (
    <div className="container mx-auto px-4">
      <li>
        <p className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium focus:bg-gray-200 focus:shadow-outline">
          <span className="text-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </span>
          <span>Mis Pedidos</span>
        </p>
      </li>
      <div className="content flex-1 min-h-[500px] overflow-y-auto p-4 rounded bg-gray-200">
        <p className="flex items-center space-x-3 text-gray-500 p-2 ">
          No tienes pedidos activos
        </p>
        <p>
          <p>Te invitamos a darnos tu opinión de tu compra</p>
          <Link to="/reviews" className="underline">
            <span className="custom-link">Da click aquí</span>
          </Link>
        </p>
      </div>
      <div className="flex justify-between m-10">
        <Link to="/products">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ir a buscar Productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
