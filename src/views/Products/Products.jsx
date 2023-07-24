import React, { useEffect, useState } from "react";
import industrial from "../../img/industrial.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../Products/Products.css";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { allCategories } from "../../redux/actions/allCategories";
import { getProductFilter } from "../../redux/actions/getProductFilter";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const { thisPage } = useSelector((state) => state);
  const [filters, setFilters] = useState({
    category: "",
    orderBy: "",
    highPrice: "",
    lowPrice: "",
  });
  useEffect(() => {
    console.log("dispatch?");
    dispatch(
      allProducts(
        thisPage,
        filters.category,
        filters.orderBy,
        filters.highPrice,
        filters.lowPrice
      )
    );
    dispatch(allCategories());
    // dispatch()
  }, [dispatch, thisPage, filters]);

  const { thisPage, filterCategory } = useSelector(state => state);

  useEffect(() => {
    dispatch(allProducts(thisPage));
    if (!filterCategory){
      dispatch(allCategories());
    } else {
      dispatch(getProductFilter(filterCategory));
    }
  }, [dispatch, thisPage, filterCategory]);
  
  // useEffect(() => {
  //   if (filterCategory.length) {
      
  //   }
  // }, [dispatch, filterCategory]);

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
        <ProductsContainer  />
      </div>
    </div>
  );
};

export default ProductsPage;
