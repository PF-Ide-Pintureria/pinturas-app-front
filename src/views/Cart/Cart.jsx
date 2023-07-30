import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCart"
import { postCart } from "../../redux/actions/postCart";


const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const [productsDetail, setProductsDetail] = useState([]);
  const handleSendProduct = async() => {
    
      await postCart(cart)(dispatch).then((response) => {
        if(response) console.log(response);
      }).catch((err) => {
        alert(err);
      })
    }
    

  return (
    <div className="my-10 w-full">
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="w-10 mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 512 512"
            id="shopping-cart">
            <path d="M199.039 373.884A46.058 46.058 0 1 0 245.1 419.941 46.111 46.111 0 0 0 199.039 373.884zM380.316 373.884a46.058 46.058 0 1 0 46.059 46.057A46.111 46.111 0 0 0 380.316 373.884zM455.132 127.679H141.567l-6.8-40.047A49.869 49.869 0 0 0 85.475 46H56.868a10 10 0 1 0 0 20H85.474A29.92 29.92 0 0 1 115.05 90.979l36.21 213.315a49.871 49.871 0 0 0 49.3 41.632H413.729a10 10 0 0 0 0-20H200.556a29.92 29.92 0 0 1-29.576-24.979L167.34 279.5H376.362a59.816 59.816 0 0 0 57.131-41.666l31.161-97.1a10 10 0 0 0-9.522-13.055z"></path>
          </svg>
        </div>
        <a href="#" className="text-2xl font-bold text-gray-800">
          Mi Carrito
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        </div>
      </div>
      <div className="my-2 flex-col items-center sm:flex-row sm:mx-5 lg:mx-20 xl:mx-32">
        <p className="text-xl font-medium">Resumen del pedido</p>
        <p className="text-gray-400">Revisa tus artículos.</p>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center items-stretch md:px-10  lg:px-20 xl:px-32">
        <div className="w-11/12 h-5/6 mx-3 mt-3 flex justify-center flex-col ">
          <div className=" mt-3 space-y-3 rounded-lg border bg-white px-2 py-4 md:px-6">
            {cart.length > 0 && (
              <div>
                <div className="w-full grid grid-cols-3 gap-10">
                  <h1> Detalle </h1>
                  <h1> Cantidad </h1> 
                  <h1> Precio </h1> 
                </div>

                {cart.map((product) =>
                  product && product.id ? (
                    <ProductCart
                      // key={product.id}
                      id={product.id}
                      name={product.name}
                      stock={product.stock}
                      quantity={product.quantity}
                      price={product.price}
                      // color={product.color}
                      image={product.image}
                    />
                    ) : null
                  )
                }
              </div>
              
            )} 
            {cart.length == 0 && (
              <p className="text-gray-400 flex items-center justify-center">
                El carrito está vacío.
              </p>
            )}

          </div>
          <div className="my-9 flex items-center justify-center">
            
            {!user ? (
              <div>
                alert("Necesitas estar loggeado para comprar")
                <NavLink to={"/cart/buying"}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                  Comprar carrito
                </NavLink >
              </div>
              ) : (
                <div>
                  <button 
                  type="button"
                  onClick={()=> handleSendProduct()}
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Comprar carrito
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;
