import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
const PurchaseForm = () => {
  return (
    <div className="my-7 flex items-center justify-center">
      {/* <form>
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
      </form> */}
        <div className="pt-8 flex flex-col justify-center lg:mt-0 mr:auto h-full">
          <p className="text-center text-xl font-medium">Ingresa con tu cuenta para continuar</p>
          <div className="my-10 flex items-center justify-center">
            <div className="pb-20">
              <LoginForm />

            </div>
          </div>
        </div>
    </div>
  )
}

export default PurchaseForm
