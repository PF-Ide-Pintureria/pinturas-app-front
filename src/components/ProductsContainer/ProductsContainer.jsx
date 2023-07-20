import React, { useState } from "react";
import Products from "../Products/Products";
import img from "../../img/pintura.png";
// import Paginated from "../Paginated/Paginated"; // Asegúrate de que la ruta sea correcta

const ProductsContainer = () => {
  // Datos de los productos
  const productsData = [
    {
      image: img,
      name: "Lorem Ipsum 1",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 2",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 3",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 4",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 5",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 6",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 7",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 8",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 9",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 10",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 11",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 12",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 13",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 14",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 15",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 16",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    {
      image: img,
      name: "Lorem Ipsum 17",
      price: "$ 2.340",
      prodpackage: "20 Litros",
    },
    // Agrega más productos aquí...
  ];

  const itemsPerPage = 8; // Número de productos por página
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // const goToPage = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div className="flex w-full m-auto">
      <div className="flex flex-col justify-center m-0 w-full">
        <div className="flex flex-wrap w-4/5 mt-4 self-center justify-around object-center">
          {currentProducts.map((product, index) => (
            <Products
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              prodpackage={product.prodpackage}
            />
          ))}
        </div>
        <div className="flex w-full m-auto   mb-8">
          <div className="flex flex-col justify-center m-0 w-full">
            {/* <div className="flex justify-center">
              <Paginated
                currentPage={currentPage}
                totalPages={totalPages}
                goToPage={goToPage}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
