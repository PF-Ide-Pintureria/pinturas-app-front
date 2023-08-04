import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCart"
import { postCart } from "../../redux/actions/Cart/postCart";
import { setCart } from "../../redux/actions/Cart/setCart";
import { postOrderByCart } from "../../redux/actions/Orders/postOrderByCart";
import { postOrderPayment } from "../../redux/actions/Orders/postOrderPayment"

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('user', user)
  // const [productsDetail, setProductsDetail] = useState([]);
  let sumPrices = [];
  const addPrice = (price) =>{
    return sumPrices.push(price)
  }
  const handleSendProduct = async() => {
      if(!user.id) {
        alert("Necesitas estar loggeado para comprar");

      }
      else if(user.id){
        let buyCart = {
          idUser: user.id,
          products: cart
          }
        await postCart(buyCart)(dispatch).then(async (response) => {
          if(response){
            
            let order = {
              idCart: response.data.idCart
            }

            // console.log(response.data.idCart); 
            await postOrderByCart(order)(dispatch).then(async (response) => {

              if (response){

                let idOrder = response.order.id;

                await postOrderPayment(idOrder)(dispatch).then((response) => {
                  if (response) navigate("/cart/detail");
                  
                }).catch((err) => {
                  console.log('err postOrderPayment', err)
                })

              }
            }).catch((err)=> {
              console.log('err postOrderByCart', err)
            })
            // dispatch(setCart([]))
            // localStorage.clear();
          }
        }).catch((err) => {
          alert(err);
        })
      }
    }

  const totalPrice = () => {
    let sum = 0
    for (let i = 0; i < sumPrices.length; i++) {
      sum = sum + sumPrices[i];
      
    }
    return
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
                <div className="w-full flex justify-between px-4">
                  <h1 className="text-lg font-semibold"> Detalle </h1>
                    <h1 className="text-lg font-semibold text-right"> Precio </h1> 
                </div>
                <div>
                {cart.map((product) =>
                  product && product.id ? (
                    <ProductCart addPrice={addPrice}
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
                <div className="w-full flex justify-between px-4 pt-4 border-t">
                  <h1 className="text-lg font-semibold "> Total </h1>
                  <h1> $ {totalPrice()}</h1>
                </div>
              </div>
              
            )} 
            {cart.length == 0 && (
              <p className="text-gray-400 flex items-center justify-center">
                El carrito está vacío.
              </p>
            )}

          </div>
          <div className="my-9 flex items-center justify-center">
                <div>
                  <button 
                  type="button"
                  onClick={handleSendProduct}
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Comprar carrito
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;
