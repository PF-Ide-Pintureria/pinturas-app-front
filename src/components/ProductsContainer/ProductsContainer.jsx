import React, { useEffect } from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated"
import { setPage } from "../../redux/actions/setPage";
// import img from "../../img/pintura.png";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { useNavigate } from "react-router-dom";

const ProductsContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { products, totalPages, thisPage } = useSelector((state) => state);
    
    const handlePageChange = (page) => {
        dispatch(setPage(page));
        dispatch(allProducts(page))
        // navigate(`/products?page=${page}`)
        console.log(page);
    };

    useEffect(() => {
        dispatch(setPage(1));
    }, [])

    return (
        <div className="flex w-full m-auto">
            <div className="w-full flex flex-col justify-center">
                <div className="w-11/12 grid grid-cols-4 gap-5">
                    {products.map((product) => (
                        <Products
                            key={product.idProduct}
                            idProduct={product.idProduct}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            package={product.package}
                        />
                    ))}
                </div>
                <div className="w-full flex justify-center items-center my-7">
                    <Paginated 
                        totalPages={totalPages}
                        thisPage={thisPage}
                        pageChange={handlePageChange}
                    />
                </div>
            </div>

        </div>
    );

};


export default ProductsContainer;
