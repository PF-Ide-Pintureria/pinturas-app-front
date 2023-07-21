import DeleteButton from "../../components/DeleteButton/DeleteButton";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { productById } from "../../redux/actions/productById";
import UpdateButton from "../../components/UpdateButton/UpdateButton";

const Detail = () => {
  const dispatch = useDispatch();
  const { idProduct } = useParams();
  const product = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(productById(idProduct));
  }, [dispatch, idProduct]);

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
                  <a
                    href="/products"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page">
                    {product?.category}
                  </a>
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
                    src={product?.image}
                    alt={product?.name}
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0"></div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {product?.name}
            </h1>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              Marca:
              {product?.patent}
            </p>
            <div className="mt-5 flex items-center">
              <div className="flex items-center mt-2">
                <div className="rating-stars flex mr-3">Rating ⭐⭐⭐⭐⭐</div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-auto ">
                {product?.rating}
              </span>
            </div>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              3 Reviews
            </p>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              Cantidades disponibles:
              {product?.stock || 0}
            </p>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              Presentación:
              {product?.package}
            </p>
            <p className=" mt-2 ml-2 text-sm font-medium text-gray-500">
              Color:
              {product?.color}
            </p>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">$ {product?.price}</h1>
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
          <p className="mt-4">{product?.description}</p>
        </div>
        <div className="flex justify-end">
          <DeleteButton idProduct={idProduct} />
          <UpdateButton idProduct={idProduct}/>
        </div>
      </div>
    </section>
  );
};

export default Detail;
