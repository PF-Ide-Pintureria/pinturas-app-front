import React, { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!name.trim()) {
      errors.name = "El nombre es obligatorio";
    }

    if (!email.trim()) {
      errors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El correo electrónico no es válido";
    }

    if (!password) {
      errors.password = "La contraseña es obligatoria";
    } else if (password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", { name, email, password });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div class="font-sans">
      <div class="relative min-h-screen flex flex-col sm:justify-center items-center ">
        <div class="relative sm:max-w-sm w-full">
          <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div class="card bg-purple-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              for=""
              class="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Registrate
            </label>
            <form onSubmit={handleSubmit} class="mt-10">
              <div>
                <input
                  type="text"
                  placeholder="Nombres"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p class="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div class="mt-7">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p class="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div class="mt-7">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p class="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div class="mt-7">
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  class={`mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p class="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div class="mt-7">
                <button
                  type="submit"
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
