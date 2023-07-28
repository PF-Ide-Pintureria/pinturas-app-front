import React, { useState } from "react";

const UpdateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Funciones para manejar los cambios en los campos
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (
      !name ||
      !email ||
      !currentPassword ||
      (!newPassword && !confirmPassword)
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name">
            Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={handleNameChange}
          />
          <p className="text-gray-600 text-xs mt-1">
            Así será como se mostrará tu nombre en la sección de tu cuenta.
          </p>
        </div>

        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-email">
            Actualiza dirección de correo electrónico
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-6">
          <p className="font-bold mb-2">CAMBIO DE CONTRASEÑA</p>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-current-password">
            Contraseña actual (déjalo en blanco para no cambiarla)
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-current-password"
            type="password"
            placeholder="Contraseña Actual"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-new-password">
            Nueva contraseña (déjalo en blanco para no cambiarla)
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-new-password"
            type="password"
            placeholder="Contraseña Nueva"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-confirm-password">
            Confirmar nueva contraseña (déjalo en blanco para no cambiarla)
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
              !passwordsMatch ? "border-red-500" : "border-gray-200"
            }`}
            id="grid-confirm-password"
            type="password"
            placeholder="Confirma Contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!passwordsMatch && (
            <p className="text-red-500 text-xs mt-1">
              Las contraseñas no coinciden.
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Guardar cambios
          </button>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Eliminar Cuenta
          </button>
        </div>
      </form>
      <footer style={{ textAlign: "center", padding: "14.5px" }}></footer>
    </div>
  );
};

export default UpdateUserForm;
