import React from "react";

const Cart = () => {
  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
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
          <div className="relative"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-stretch md:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 lg:grid">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del pedido</p>
          <p className="text-gray-400">Revisa tus artículos.</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 md:px-6">
            <p className="text-gray-400 flex items-center justify-center">
              El carrito esta vacio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Ver Productos
            </button>
          </div>
        </div>
        <form>
          <div className="flex flex-wrap flex-col justify-center mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 mr:auto h-full">
            <p className="text-xl font-medium">Envío</p>
            <p className="text-gray-400 mt-2 text-m text-right">
              ¿No tienes una cuenta?{" "}
              <a
                className="text-blue-600"
                href="#"
                onClick={navigateToRegister}>
                Registrate
              </a>{" "}
            </p>
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"></svg>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium">
              Información personal
            </label>
            <div className="flex flex-wrap">
              <div className="relative w-6/12 flex-shrink-0">
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // value={input.name}
                    // onChange={(event) => handleChange(event)}
                    className="mr-3 mb-1 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Nombre"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="lastName"
                    // value={input.name}
                    // onChange={(event) => handleChange(event)}
                    className="mr-3 mb-1 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Apellido"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    // value={input.email}
                    // onChange={(event) => handleChange(event)}
                    className=" mt-3 w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-wrap flex-col">
                  <label
                    htmlFor="billing-address"
                    className="mt-4 mb-2 block text-sm font-medium">
                    Dirección de Envio
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      name="lastName"
                      // value={input.name}
                      // onChange={(event) => handleChange(event)}
                      className="mr-3 mb-1 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Dirección"
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      name="lastName"
                      // value={input.name}
                      // onChange={(event) => handleChange(event)}
                      className="mr-3 mb-1 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Provicia"
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      name="lastName"
                      // value={input.name}
                      // onChange={(event) => handleChange(event)}
                      className="mr-3 mb-1 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="localidad"
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      name="lastName"
                      // value={input.name}
                      // onChange={(event) => handleChange(event)}
                      className="mr-3 mb-1 w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
