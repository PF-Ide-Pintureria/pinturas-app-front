import React, { useState } from "react";


const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica de búsqueda utilizando el valor de searchText
    console.log("Realizar búsqueda con el texto:", searchText);
  };

  return (
    <div className="h-32 bg-white flex flex-col justify-center">
      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form
            role="form"
            className="relative flex z-50 bg-white rounded-full border-2 border-purple-600"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Busca tu pintura"
              className="rounded-full flex-1 px-6 py-4 text-white-700 focus:outline-none"
              value={searchText}
              onChange={handleChange}
              style={{ border: "none" }}
            />
            <button
              className="bg-purple-600 text-white rounded-full font-semibold px-8 py-4 hover:bg-purple-900 focus:bg-purple-600 focus:outline-none"
              type="submit"
              style={{ border: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M11.5171 6.36835C11.5171 9.8855 8.93889 12.7367 5.75854 12.7367C2.57819 12.7367 0 9.8855 0 6.36835C0 2.85121 2.57819 0 5.75854 0C8.93889 0 11.5171 2.85121 11.5171 6.36835ZM1.72756 6.36835C1.72756 8.83035 3.53229 10.8262 5.75854 10.8262C7.98478 10.8262 9.78951 8.83035 9.78951 6.36835C9.78951 3.90635 7.98478 1.91051 5.75854 1.91051C3.53229 1.91051 1.72756 3.90635 1.72756 6.36835Z"
                  fill="#C4C4C4"
                />
                <line
                  x1="2"
                  y1="-2"
                  x2="7.02699"
                  y2="-2"
                  transform="matrix(0.733018 0.68021 -0.604452 0.796642 8.38281 9.85938)"
                  stroke="#C4C4C4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
