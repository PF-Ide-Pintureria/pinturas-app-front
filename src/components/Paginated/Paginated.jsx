import React, { useState } from "react";

const Paginated = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const data = [
    /* datos a mostrar aquí */
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
    "item 11",
    "item 12",
    "item 13",
    "item 14",
    "item 15",
    "item 16",
    "item 17",
    "item 18",
    "item 19",
    "item 20",
    "item 21",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
    "item 22",
  ];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-10">
      {/* Renderiza los botones de paginación */}
      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-black bg-white border border-purple-500 rounded-l-lg hover:bg-blue-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <li key={pageNumber}>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-purple-500 hover:bg-blue-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === pageNumber
                        ? "z-10 text-blue-600 border-blue-300 bg-blue-50"
                        : ""
                    }`}
                    onClick={() => goToPage(pageNumber)}
                    disabled={currentPage === pageNumber}
                  >
                    {pageNumber}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-purple-500 rounded-r-lg hover:bg-blue-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Renderiza los elementos de la página actual */}
      <div className="mb-4">
        {currentItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Paginated;
