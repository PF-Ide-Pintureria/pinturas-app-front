import React, { useEffect, useState } from "react";
import industrial from "../../img/industrial.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../Products/Products.css";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { allCategories } from "../../redux/actions/allCategories";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { thisPage } = useSelector(state => state);
  const [filters, setFilters] = useState({
    category: "",
    orderBy: "",
    highPrice: "",
    lowPrice: ""
  });
  useEffect(() => {
    console.log("dispatch?");
    dispatch(allProducts(
      thisPage,
      filters.category,
      filters.orderBy,
      filters.highPrice,
      filters.lowPrice
      ));
    dispatch(allCategories());
    // dispatch()
  }, [dispatch, thisPage, filters]);

  const handleFiltersChange = (newFilters) => {
    console.log("cambiando filters");
    setFilters(newFilters);
  };

  return (
    <div>
      <img src={industrial} alt="Banner Industrial" className="industrial my-0" />
      <div>
        <SearchBar />
      </div>

      <div>
        <ProductsContainer  onFiltersChange={handleFiltersChange}/>
      </div>
      
    </div>
  );
};

export default ProductsPage;
