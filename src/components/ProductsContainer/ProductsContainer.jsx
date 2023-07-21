import React from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated"
import img from "../../img/pintura.png";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const products = useSelector((state) => state.products)
  console.log(products.totalPages);

  return (
    <div className="flex w-full m-auto">
      <div className="w-full flex flex-col justify-center">
        <div className="w-11/12 grid grid-cols-4 gap-5">
          {products.map((product) => (
            <Products
              key={product.idProduct}
              id = {product.idProduct}
              image={product.image}
              name={product.name}
              price={product.price}
              package={product.package}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center ">
          <Paginated currentPage={1} totalPages={products.totalPages} goToPage={19}/>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
