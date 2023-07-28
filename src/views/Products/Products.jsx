import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedContainer from "../../components/FeaturedContainer/FeaturedContainer";
import { bestSellers } from "../../redux/actions/bestSellers";
import "../Products/Products.css";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { allCategories } from "../../redux/actions/allCategories";
import { getProductFilter } from "../../redux/actions/getProductFilter";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.filterCategory);
  const thisPage = useSelector((state) => state.thisPage);

  useEffect(() => {
    dispatch(allProducts(thisPage));
    if (!filterCategory) {
      dispatch(allCategories());
    } else {
      dispatch(getProductFilter(thisPage, filterCategory ));
    }
  }, [dispatch, thisPage, filterCategory]);

  useEffect(() => {
    dispatch(bestSellers());
  }, [dispatch]);

  return (
    <div>
      {/* <img
        src={industrial}
        alt="Banner Industrial"
        className="industrial my-0"
      />--------------> Suspendido por recomendacion del Mentor <-------------------------------- */}
      <div>
        <SearchBar />
      </div>

      <div>
        <ProductsContainer />
      </div>
      <div>
        <FeaturedContainer />
      </div>
    </div>
  );
};

export default ProductsPage;
