// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
// const SideBar = ({ onFiltersChange }) => {
//   const dispatch = useDispatch();

//   const applyFilters = () => {
//     onFiltersChange(filters);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filters, onFiltersChange]);

//   // const [esMarcaAbierto, setEsMarcaAbierto] = useState(false);
//   // const [esPresentacionAbierto, setEsPresentacionAbierto] = useState(false);
//   // const [esPrecioAbierto, setEsPrecioAbierto] = useState(false);

//   // const toggleDropdown = (dropdownType) => {
//   //   switch (dropdownType) {
//   //     case "marca":
//   //       setEsMarcaAbierto((estadoAnterior) => !estadoAnterior);
//   //       break;
//   //     case "presentacion":
//   //       setEsPresentacionAbierto((estadoAnterior) => !estadoAnterior);
//   //       break;
//   //     case "precio":
//   //       setEsPrecioAbierto((estadoAnterior) => !estadoAnterior);
//   //       break;
//   //     default:
//   //       break;
//   //   }
//   // };

//   // const linkStyle = {
//   //   transition: "color 0.2s ease-in-out",
//   // };

//   // const linkHoverStyle = {
//   //   color: "indigo",
//   // };

//   return (
//     <div className="flex justify-center ">
//     <aside
//       className="w-full p-6 sm:w-80 bg-tertiary text-gray-800"
//       style={{ borderRadius: "20px" }}
//     >
//       <nav className="text-base flex flex-col">
//       <div className="my-3.5 flex flex-col">

//       <select
//         className="my-2 h-11 rounded border-indigo-800 border-solid border-2"
//         name="orderBy"
//         value={filters.orderBy}
//         onChange={handleChangeFilter}
//       >
//         <option value="" disabled className="text-gray-400">
//           Ordenar por nombre
//         </option>
//         <option value="asc" className="h-11 bg-tertiary">
//           Ascendente
//         </option>
//         <option value="desc" className="h-11 w-11 bg-tertiary">
//           Descendente
//         </option>
//       </select>

//         {/* <select className="my-2 h-11 rounded border-indigo-800 border-solid border-2" onChange={handleChangeFilter}>
//         <option selected disabled> Ordenar por precio </option>
//           <option value="highPrice">Mayor Precio</option>
//           <option value="lowPrice">Menor precio</option>
//         </select> */}

//         {/* <div>
//           <div>
//             <button
//               id="presentacionDropdonButton"
//               onClick={() => toggleDropdown("presentacion")}
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-90 "
//               type="button"
//             >
//               Ordenar Por Precio
//               <svg
//                 className="w-2.5 h-2.5 ml-2.5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 10 6"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 4 4 4-4"
//                 />
//               </svg>
//             </button>

//             <div
//               id="presentacionDropdown"
//               className={`z-10 ${
//                 esPresentacionAbierto ? "block" : "hidden"
//               } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//             >
//               <ul
//                 className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                 aria-labelledby="presentacionDropdownButton"
//               >
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Mayor Precio
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     Menor precio
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div> */}
//       {/* order ASC DEC*/}
//           {/* <div> */}
//             {/* <div> */}
//               {/* <button
//                 id="precioDropdownButton"
//                 onClick={() => toggleDropdown("precio")}
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-10"
//                 type="button"
//               >
//                 Ordenar Por Asc y Desc
//                 <svg
//                   className="w-2.5 h-2.5 ml-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button> */}
//             {/* Menú desplegable */}
//               {/* <div
//                 id="precioDropdown"
//                 className={`z-10 ${
//                   esPrecioAbierto ? "block" : "hidden"
//                 } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="precioDropdownButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Ascendente
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Descendente
//                     </a>
//                   </li>
//                 </ul>
//               </div> */}
//             {/* </div> */}
//           {/* </div> */}
//         </div>
//         <div className="">
//           <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
//             Categorias
//           </h2>
//           <div className="text-lg flex flex-col">
//             {categories.map((category, index) => (
//               <h3
//                 key={index}
//                 rel="noopener noreferrer"
//                 onClick={() => handleCategory(category)}
//                 className={`mt-1 no-underline text-sm ${
//                   filters.category === category ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900"
//                 } m-0`}
//               >
//                 {category}
//               </h3>
//             ))}
//           </div>
//         </div>
//         <div className="PRECIO">
//           <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
//             Precio
//           </h2>
//           <div className="text-lg flex flex-col">
//             <h3
//             className={`mt-1 no-underline text-sm ${
//               filters.lowPrice === "Min a $1500" ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900"
//             } m-0`}
//             onClick={() => handlePriceFilter("Min a $1500")}
//             >
//               Min a $1500
//             </h3>
//           </div>
//           <div className="text-lg flex flex-col">
//             <h3
//               className={`mt-1 no-underline text-sm ${
//                 filters.lowPrice === "$1500 a $2000" ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900"
//               } m-0`}
//               onClick={() => handlePriceFilter("$1500 a $2000")}
//             >
//                 $1500 a $2000
//             </h3>
//           </div>
//         </div>
//       </nav>
//     </aside>
//     </div>
//   );
// };

// SideBar.propTypes = {
//   onFiltersChange: PropTypes.func.isRequired,
// };

// export default SideBar;
