import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Paginated from "../Paginated/Paginated";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/actions/allProducts";
import { getProductFilter } from "../../redux/actions/getProductFilter";
import { setPage } from "../../redux/actions/setPage";
import { setCategory } from "../../redux/actions/filters/setCategory";
import { setLowPrice } from "../../redux/actions/filters/setLowPrice";
import { setHighPrice } from "../../redux/actions/filters/setHighPrice";

const ProductsContainer = () => {
  const dispatch = useDispatch();

  const { products, categories, totalPages, thisPage, filterCategory } = useSelector((state) => state);
  const { high, low } = useSelector((state) => state.price);
  
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategory = (category) => {
    dispatch(setPage(1));
    dispatch(setCategory(category));
  };

  const handlePriceFilter = (priceFilter) => {
    if (priceFilter === "Hasta $10000") {
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(0));
      dispatch(setHighPrice(10000));

    } else if (priceFilter === "$10000 a $20000") {
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(10000));
      dispatch(setHighPrice(20000));

    } else if (priceFilter === "Mas de $20000"){
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(20000));
      dispatch(setHighPrice(0));
      
    } else if (priceFilter === "no price"){
      dispatch(setPage(thisPage));
      dispatch(setLowPrice(0));
      dispatch(setHighPrice(0));

    }
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    if (filterCategory || low || high) {
      dispatch(getProductFilter(page, filterCategory, low, high)).then(() => {
        setIsLoading(false);
      });
    } else {
      dispatch(allProducts(page)).then(() => {
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setIsLoading(true); 
    if (filterCategory || low || high) {
      dispatch(getProductFilter(thisPage, filterCategory, low, high)).then(() => {
        setIsLoading(false);
      });
    } else {
      dispatch(allProducts(thisPage)).then(() => {
        setIsLoading(false);
      });
    }
  }, [dispatch, filterCategory, low, high, thisPage]);

  return (
    <div className="flex w-full m-auto justify-center">
      <div>
        <div className="flex justify-center ">
          {/*       SIDE BAR     */}
          <aside                
            className="w-full p-6 sm:w-80 bg-tertiary text-gray-800"
            style={{ borderRadius: "20px" }}>
            <div className="text-base flex flex-col">
              
              {/* <div className="my-3.5 flex flex-col">
                <select
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
                </select>
              </div> */}
              <div className="gap-3">
                <div className="h-10 flex gap-1 mb-3"> {/*          CLEAR FILTERS        */}
                  { filterCategory && <div className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1"> {filterCategory} <button onClick={() => handleCategory("")}>X</button></div> }
                  { (high === 0 && low !== 0 && low) && <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1"> Desde ${low} <button onClick={() => handlePriceFilter("no price")}>X</button></p> }
                  { (low === 0 && high !== 0 && high ) && <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1"> Hasta ${high} <button onClick={() => handlePriceFilter("no price")}>X</button></p> }
                  { (low !== 0 && high !== 0 && high && low ) && <p className="flex items-center text-xs w-fit h-fit text-gray-400 rounded-lg border bg-white px-1 py-1 md:px-1"> ${low} hasta ${high} <button onClick={() => handlePriceFilter("no price")}>X</button></p> }

                </div>
                <div className="mb-5">   {/*       FILTER CATEGORY      */}
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
                <div className="mb-5">  {/*       FILTER PRICE         */}
                  <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                    Precio
                  </h2>
                  <div className="text-lg flex flex-col flex-wrap">
                    <h3
                      className={`mt-1 no-underline text-sm ${
                      (!low  && high === 10000) ? "text-indigo-900" : "text-gray-400  hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    } m-0`}
                      onClick={() => handlePriceFilter("Hasta $10000")}
                    >
                      Hasta $10.000
                    </h3>
                  </div>
                  <div className="text-lg flex flex-col">
                    <h3
                      className={`mt-1 no-underline text-sm ${(low === 10000 && high === 20000) ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    } m-0`}
                      onClick={() => handlePriceFilter("$10000 a $20000")}
                    > 
                      $10.000 a $20.000
                    </h3>
                  </div>
                  <div className="text-lg flex flex-col">
                    <h3
                      className={`mt-1 no-underline text-sm ${(low === 20000 && high === "") ? "text-indigo-900" : "text-gray-400 hover:text-indigo-900 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    } m-0`}
                      onClick={() => handlePriceFilter("Mas de $20000")}
                    > 
                      Más de $20.000
                    </h3>
                  </div>
                  <div className="w-fit h-fit flex items-center justify-center ">
                    <input type="number" placeholder=" Mínimo" className="px-2 w-24 h-7 rounded border-indigo-300 border-solid border-2"/>
                    <p className="text-base p-3 mx-1 text-gray-500 flex justify-center">{" "} - {" "}</p>
                    <input type="number" placeholder="Máximo" className="px-2 w-24 h-7 rounded border-indigo-300 border-solid border-2"/>
                    <button className="bg-gray-300 rounded-full flex justify-center items-center mx-3" onClick={() => {alert("no funcional")}}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l6 6l-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/*       FILTER COLOR         */}  {/* PROXIMAMENTE */}
                {/* <div className="mb-5">  
                  <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">
                    Color
                  </h2>
                </div> */}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div>       {/*       CARDS & PAGINATED     */}
        <div className="w-full flex m-auto flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex justify-center">
              {isLoading 
              ? (
                <img src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif" alt="loading"
                className="w-11/12 flex justify-center items-center" />
                ) : ( <div className="w-11/12 grid grid-cols-3 gap-10"> {
                  filteredProducts.map((product) => (
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
                )
              }
            </div>
          </div>
          <div className="w-full flex justify-center items-center my-7"> {/*     PAGINATED     */}
            {!isLoading && (
              <Paginated
                totalPages={totalPages}
                thisPage={thisPage}
                pageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
