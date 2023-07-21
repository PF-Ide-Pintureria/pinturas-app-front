// import { useState } from "react";
import style from "./ContactForm.module.css";
// import formValidation from "./formValidation";

// const ContactForm = () => {
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (event) => {
//     const property = event.target.name;
//     const value = event.target.value;

//     setInputs({ ...inputs, [property]: value });
//     setErrors(formValidation({ ...inputs, [property]: value }));
//   };

//   const handleSubmit = async (event) => {
//     // enviar datos a servidor...
//     event.preventDefault();
//     alert("Mensaje enviado");
//   };

//   return (
//     <div className={style.container}>
//       <div className={style.background}>
//         <h2 className="text-primary uppercase font-bold text-3xl">
//           Contáctanos
//         </h2>
//         <form className="" onSubmit={handleSubmit}>
//           <div>
//             <label className="bg-quaternary rounded-xl w-40 h-8" htmlFor="name">
//               Nombre:{" "}
//             </label>
//             <input
//               className="bg-formBg rounded-r-lg w-72 h-8"
//               type="text"
//               name="name"
//               value={inputs.name}
//               onChange={handleChange}
//             />
//             {errors.name ? (
//               <label>{errors.name}</label>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="icon icon-tabler  icon-tabler-checks"
//                 width="28"
//                 height="28"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="#7bc62d"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M7 12l5 5l10 -10" />
//                 <path d="M2 12l5 5m5 -5l5 -5" />
//               </svg>
//             )}
//           </div>
//           <div>
//             <label
//               className="bg-quaternary rounded-xl w-40 h-8"
//               htmlFor="email"
//             >
//               Email:{" "}
//             </label>
//             <input
//               className="bg-formBg rounded-r-lg w-72 h-8"
//               type="email"
//               name="email"
//               value={inputs.email}
//               onChange={handleChange}
//             />
//             {errors.email ? (
//               <label>{errors.email}</label>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="icon icon-tabler  icon-tabler-checks"
//                 width="28"
//                 height="28"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="#7bc62d"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M7 12l5 5l10 -10" />
//                 <path d="M2 12l5 5m5 -5l5 -5" />
//               </svg>
//             )}
//           </div>
//           <div>
//             <label htmlFor="message">Mensaje: </label>
//             <textarea
//               className="bg-formBg"
//               rows="5"
//               name="message"
//               cols="30"
//               placeholder="Escribe tu mensaje..."
//               value={inputs.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div>
//             <button
//               className="border-solid border border-secondary bg-primary text-tertiary"
//               type="submit"
//             >
//               Enviar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setInputs({ ...inputs, [property]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar campos obligatorios
    if (!inputs.name || !inputs.email || !inputs.message) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Validar formato de correo electrónico
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(inputs.email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Aquí puedes enviar los datos al servidor si es necesario
    alert("Mensaje enviado");

    // Reiniciar los valores de los campos después de enviar el formulario
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={style.container}>
      <div className={style.background}>
        <div
          className="container my-24 mx-auto  flex flex-wrap  rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
}
Con esta regla CSS, el fondo del <div> con la clase background se establecerá como blanco (#ffffff) en el modo claro, y como transparente en el modo oscuro, permitiendo que se muestre el fondo del <div> padre u otros elementos que puedan estar detrás del mismo.

Es importante tener en cuenta que prefers-color-scheme es una media query que se basa en la configuración de preferencia de color del sistema o dispositivo. Cuando el usuario tenga configurado el modo oscuro en su sistema, el fondo del <div> con la clase background será transparente, y en caso contrario, será blanco.






 dark:shadow-black/20 md:py-16   backdrop-blur-[30px] mt-20"
        >
          <div className="w-full md:w-5/12 md:px-3 lg:w-5/12 lg:px-6">
            <form onSubmit={handleSubmit}>
              <div className="flex m-8">
                <label
                  htmlFor="name"
                  className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                >
                  Nombre:
                </label>
                <input
                  className="bg-formBg rounded-r-lg w-72 h-8  "
                  id="name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>

              <div className="flex m-8">
                <label
                  htmlFor="name"
                  className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                >
                  Correo Electrónico:
                </label>
                <input
                  className="bg-formBg rounded-r-lg w-72 h-8"
                  id="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                />
              </div>

              <div className="flex m-8">
                <label
                  htmlFor="name"
                  className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center"
                >
                  Tu Mensaje:
                </label>
                <input
                  className="bg-formBg rounded-r-lg w-72 h-8"
                  id="message"
                  name="message"
                  rows="3"
                  value={inputs.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
              >
                <h2
                  className="text-primary uppercase font-bold flex items-center justify-center"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Enviar
                </h2>
              </button>
            </form>
          </div>
          <div className="w-full md:w-7/12">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                <div className="flex items-start mb-12">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="h-12 w-12"
                      >
                        <rect width="100%" height="100%" fill="pink" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Soporte técnico
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                <div className="flex items-start mb-12">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        class="h-12 w-12"
                      >
                        <rect width="100%" height="100%" fill="pink" />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Soporte técnico
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Se agregan más contactos de soporte aquí */}

              <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                <div className="flex items-start mb-12">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        class="h-12 w-12"
                      >
                        <rect width="100%" height="100%" fill="pink" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Soporte técnico
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 md:px-3 lg:w-6/12 lg:px-6">
                <div className="flex items-start mb-12">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-12 w-12"
                      >
                        <rect width="100%" height="100%" fill="pink" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Soporte técnico
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      support@example.com
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
