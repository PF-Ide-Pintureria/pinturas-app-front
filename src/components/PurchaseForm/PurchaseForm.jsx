import React from "react";

const PurchaseForm = () => {

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-5">
      <form>  
        <div className="pb-10 bg-gray-50 lg:mt-0 mr:auto h-full">
          <div className="pl-24 pt-8 pb-12 flex flex-col justify-center">
            <p className="text-xl font-medium">Compra como invitado</p>
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">  
                </svg>
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
        </div>
      </form>
      <div>
        <div className="pl-24 flex flex-col  py-8 lg:mt-0 mr:auto h-full">
        <p className="text-xl font-medium">Ingresa con tu cuenta</p>
          <p className="text-gray-400 mt-2 text-m ">
            ¿No tienes una cuenta?{" "}
            <a
              className="text-blue-600"
              href="#"
              onClick={navigateToRegister}>
              Registrate
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
    )
}

export default PurchaseForm;