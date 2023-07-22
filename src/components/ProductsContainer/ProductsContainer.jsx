import React from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated"
import img from "../../img/pintura.png";
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const allProducts = useSelector((state) => state.products)
  return (
    <div className="flex w-full m-auto">
      <div className="w-full flex flex-col justify-center">
        <div className="w-11/12 grid grid-cols-4 gap-5">
          {allProducts.map(({id, image, name, price, productPackage}) => ( 
          <Products
              key={id}
              idProduct={id}
              image={image}
              name={name}
              price={price}
              package={productPackage}
            />
            
          ))}
        </div>
        <div className="w-full flex justify-center items-center ">
          {/* <Paginated currentPage={1} totalPages={allProducts.totalPages} goToPage={19}/> */}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
