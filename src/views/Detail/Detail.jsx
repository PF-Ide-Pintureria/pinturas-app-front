import React, { useState } from "react";
import style from "./Detail.module.css";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
//import { Link, useParams } from "react-router-dom";

const Detail = () => {
  //   const [quantity, setQuantity] = useState(1);

  //   // Función para disminuir la cantidad
  //   const decreaseQuantity = () => {
  //     if (quantity > 1) {
  //       setQuantity(quantity - 1);
  //     }
  //   };
  //   // Función para aumentar la cantidad
  //   const increaseQuantity = () => {
  //     setQuantity(quantity + 1);
  //   };

  //   const [setSelectedImage] = useState < string > "";

  //   const handleImageClick = (image) => {
  //     setSelectedImage(image);
  //   };

  return (
    <section className="py-4 sm:py-4">
      <div className="container mx-auto px-4">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a
                  href="/"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                  {" "}
                  Inicio{" "}
                </a>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="/products"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">
                    {" "}
                    Productos{" "}
                  </a>
                </div>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  {/* <a
                    href="/products"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page">
                    {product?.category?.map((el) => el.name)}{" "}
                  </a> */}{" "}
                  Categoria
                </div>
              </div>
            </li>
          </ol>
        </nav>
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="w-full h-80 max-w-full object-cover"
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_985510-MLA52398336866_112022-F.jpg"
                    // {product?.image}
                    alt="imagen"
                    // {product?.name}
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0"></div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              Pinturilla de prueba Blanca 20 Lts
              {/* {product?.name} */}
            </h1>
            <div className="mt-5 flex items-center">
              <div className="flex items-center mt-2">
                <div className="rating-stars flex mr-3">Rating ⭐⭐⭐⭐⭐</div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-auto ">
                4.8
              </span>
            </div>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              3 Reviews
            </p>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              Cantidades disponibles:
              {/* {product?.stock || 0} */} 4
            </p>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">
                  $ 2199.99
                  {/* {product?.price} */}
                </h1>
              </div>
              <button
                // onClick={handleClick}
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-purple-800 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Comprar
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="border-b border-gray-300">
            <a
              title=""
              className=" py-4 text-sm font-medium text-gray-900 hover:text-gray-800">
              Descripcion del Producto
            </a>
          </div>
        </div>
        <div className="mt-8 flow-root sm:mt-12">
          <p className="mt-4">
            Pintura elaborada a base de polímeros acrílicos en dispersión
            acuosa, que contiene dióxido de titanio como pigmento. Proporciona
            un hermoso acabado mate aterciopelado de máxima resistencia al
            lavado y al desgaste y además presenta buena hidrorrepelencia. Su
            principal función es ser Lavable en Interior. Descripción y
            Composición Pintura elaborada a base de polímeros acrílicos en
            dispersión acuosa, que contiene dióxido de titanio como pigmento.
            Proporciona un hermoso acabado mate aterciopelado de máxima
            resistencia al lavado y al desgaste. Este producto presenta buena
            hidrorrepelencia sin ser barrera al vapor de agua, por lo que
            resulta ideal para todos los trabajos donde se exija el mejor
            desempeño en acabado y durabilidad. Altamente lavable.
            Características Generales Empleo preferente: Ideal para ser
            utilizada en superficies Interiores y Exteriores. Es totalmente
            lavable en interior. Acabado: Mate. Colores: Se provee en color
            blanco. Con el agregado de entonador hasta un máximo de 35 cm³ por
            litro se puede obtener una amplia gama de colores. Propiedades
            Físico-químicas Consistencia o viscosidad: 95 - 100 UK Viscosímetro
            Stormer a 25º C. Vida útil: El producto en el envase mantiene sus
            propiedades durante por lo menos 2 años. Poder cubriente: Muy bueno.
            Puesta en Obra Preparación previa de las superficies Es
            indispensable que las superficies a pintar estén limpias, secas,
            desengrasadas, libres de partículas de polvo y pintura vieja mal
            adherida. Si en la superficie hay hongos es imprescindible
            eliminarlos. Uso de Fondos Superficies Nuevas Debe aplicarse una
            mano de SELLADOR - FIJADOR CONCENTRADO correctamente diluido (1:2)
            en agua. Superficies Pintadas Aplicar el mismo procedimiento que en
            las nuevas, eliminando las partes flojas. Modo de Aplicación Se
            aplica a pincel, rodillo o soplete airless ya sea con su
            consistencia normal o diluido con la mínima cantidad de agua posible
            (5 - 10%). Los elementos usados deben limpiarse con agua
            inmediatamente después de haber terminado el trabajo. Rendimiento: 8
            - 15 m² por litro y por mano (según la superficie). Tiempo de secado
            al tacto: 1 hora. Tiempo de secado entre manos: 4 horas. Tiempo de
            secado final: 7 dias. Datos Comerciales Envases: Se provee en
            capacidades de 1; 4; 10 y 20 litros.
            {/* {product?.description}. */}
          </p>
        </div>
        <div className="flax justify-end">
          <DeleteButton />
        </div>
      </div>
    </section>
  );
};

export default Detail;
