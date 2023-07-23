import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated"
import { setPage } from "../../redux/actions/setPage";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar"

const ProductsContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { products, totalPages, thisPage } = useSelector((state) => state);
    const [filters, setFilters] = useState({
        category: "",
        orderBy: "",
        highPrice: "",
        lowPrice: ""
    });

    const handlePageChange = (page) => {
        dispatch(setPage(page));
        dispatch(allProducts(allProducts(
            page,
            filters.category,
            filters.orderBy,
            filters.highPrice,
            filters.lowPrice
        )));
        // navigate(`/products?page=${page}`)
    };

    const handleFiltersChange = (newFilters) => {
        console.log(newFilters);
        setFilters(newFilters);
    };

    useEffect(() => {
        dispatch(setPage(1));
    }, [])

    return (
        <div className="flex w-full m-auto justify-center">
            <div>
                <SideBar onFiltersChange={handleFiltersChange}/>
            </div>
            <div>
            <div className="w-full flex m-auto flex-col justify-center">
                <div className="w-11/12 grid grid-cols-3 gap-5">
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
        </div>
    );
};

export default ProductsContainer;
