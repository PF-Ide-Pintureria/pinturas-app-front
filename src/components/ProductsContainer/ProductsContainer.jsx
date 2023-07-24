import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { getProductFilter } from "../../redux/actions/getProductFilter";
import { setPage } from "../../redux/actions/setPage";
import { setCategory } from "../../redux/actions/filters/setCategory";
// import SideBar from "../SideBar/SideBar"                      // TEMPORALY SUSPENDED

const ProductsContainer = () => {
  const dispatch = useDispatch();

  const { products, categories, totalPages, thisPage, filterCategory } =
    useSelector((state) => state);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [filters, setFilters] = useState({
    category: "",
    orderBy: "",
    highPrice: "",
    lowPrice: "",
  });

  const handleCategory = (category, page) => {
    dispatch(setPage(page));
    dispatch(setCategory(category, page));
  };

  // const handleChangeFilter = (event) => {
  //     const { name, value } = event.target;
  //     setFilters((prevFilters) => ({
  //         ...prevFilters,
  //         [name]: value,
  //     }));
  // };

  // const handlePriceFilter = (priceFilter) => {
  //     if (priceFilter === "Min a $1500") {
  //       setFilters((prevFilters) => ({
  //         ...prevFilters,
  //         lowPrice: 0,
  //         highPrice: 1500,
  //       }));
  //     } else if (priceFilter === "$1500 a $2000") {
  //       setFilters((prevFilters) => ({
  //         ...prevFilters,
  //         lowPrice: 1500,
  //         highPrice: 2000,
  //       }));
  //     }
  // };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(allProducts(page));
  };

  // const handleFiltersChange = (newFilters) => {
  //     setFilters(newFilters);
  // };

  // const applyFilters = () => {
  //     handleFiltersChange(filters);
  // };

  useEffect(() => {
    if (filterCategory.length) {
      dispatch(getProductFilter(filterCategory));
    } else {
      dispatch(allProducts(thisPage));
    }
  }, [dispatch, filterCategory, thisPage]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="flex w-full m-auto justify-center">
      <div>
        {/* <SideBar handleFiltersChange={handleFiltersChange}/> */}

        <div className="flex justify-center ">
          <aside
            className="w-full p-6 sm:w-80 bg-tertiary text-gray-800"
            style={{ borderRadius: "20px" }}>
            <nav className="text-base flex flex-col">
              <div className="my-3.5 flex flex-col">
                {/* <select
                                    className="my-2 h-11 rounded border-indigo-800 border-solid border-2"
                                    name="orderBy"
                                    value={filters.orderBy}
                                    onChange={handleChangeFilter}
                                >
                                    <option value="" disabled className="text-gray-400">
                                    Ordenar por nombre
                                    </option>
                                    <option value="asc" className="h-11 bg-tertiary">
                                    Ascendente
                                    </option>
                                    <option value="desc" className="h-11 w-11 bg-tertiary">
                                    Descendente
                                    </option>
                                </select> */}

                {/* <select className="my-2 h-11 rounded border-indigo-800 border-solid border-2" onChange={handleChangeFilter}>
                                <option selected disabled> Ordenar por precio </option>
                                <option value="highPrice">Mayor Precio</option>
                                <option value="lowPrice">Menor precio</option>
                                </select> */}
              </div>
              <div>
                <div className="mb-5">
                  <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                    Categorias
                  </h2>
                  <div className="text-lg flex flex-col">
                    {categories.map((category, index) => (
                      <h3
                        key={index}
                        rel="noopener noreferrer"
                        onClick={() => handleCategory(category)}
                        className={`mt-1 no-underline text-sm ${
                          filterCategory === category
                            ? "text-indigo-900"
                            : "text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                        } m-0`}>
                        {category}
                      </h3>
                    ))}
                  </div>
                </div>
                {/* <div className="mb-5">
                                    <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                                        Precio
                                    </h2>
                                    <div className="text-lg flex flex-col">
                                        <h3
                                        className={`mt-1 no-underline text-sm ${
                                        filters.lowPrice === "Min a $1500" ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900"
                                        } m-0`}
                                        onClick={() => handlePriceFilter("Min a $1500")}
                                        >
                                        Min a $1500
                                        </h3>
                                    </div>
                                    <div className="text-lg flex flex-col">
                                        <h3
                                        className={`mt-1 no-underline text-sm ${
                                            filters.lowPrice === "$1500 a $2000" ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900"
                                        } m-0`}
                                        onClick={() => handlePriceFilter("$1500 a $2000")}
                                        > 
                                            $1500 a $2000
                                        </h3>
                                    </div>
                                </div> */}
              </div>
            </nav>
          </aside>
        </div>
      </div>
      <div>
        <div className="w-full flex m-auto flex-col justify-center">
          <div className="flex justify-center">
            <div className="w-11/12 grid grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
