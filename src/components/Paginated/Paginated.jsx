import React, { useState, useEffect } from "react";

const Paginated = ({ thisPage, totalPages, pageChange }) => {
  const totalPagesToShow = 7;
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(Math.min(totalPages, totalPagesToShow));

  useEffect(() => {
    let newStartPage = Math.max(1, thisPage - Math.floor(totalPagesToShow / 2));
    let newEndPage = Math.min(totalPages, newStartPage + totalPagesToShow - 1);

    if (newEndPage - newStartPage < totalPagesToShow - 1) {
      newEndPage = Math.min(totalPages, newStartPage + totalPagesToShow - 1);
      newStartPage = Math.max(1, newEndPage - totalPagesToShow + 1);
    }

    setStartPage(newStartPage);
    setEndPage(newEndPage);
  }, [thisPage, totalPagesToShow, totalPages]);


  const prevPage = () => {
    if (thisPage > 1) {
      pageChange(thisPage - 1);
    }
  };

  const nextPage = () => {
    if (thisPage < totalPages) {
      pageChange(thisPage + 1);
    }
  };

  const firstPage = () => {
    pageChange(1);
  };

  const lastPage = () => {
    pageChange(totalPages);
  };

  const renderPageNumbers = () => {
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <li key={i}>
        <button
          className={`px-6 py-2 mx-0 font-bold text-white bg-gray-700 ${
            thisPage === i ? "bg-gray-900" : "bg-gray-700 hover:bg-purple-700"
          }`}
          onClick={() => pageChange(i)}
          disabled={thisPage === i}
        >
          {i}
        </button>
      </li>
    );
  }
  return pageNumbers;
};

  return (
    <div className="my-11">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 mx-2.5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                thisPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-100"
              } `}
              onClick={() => firstPage()}
              disabled={thisPage === 1}
            >
              First Page
            </button>
          </li>
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                thisPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-100"
              }`}
              onClick={() => prevPage()}
              disabled={thisPage === 1}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                thisPage === totalPages
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => nextPage()}
              disabled={thisPage === totalPages}
            >
              Next
            </button>
          </li>
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 mx-2.5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}
              onClick={() => lastPage()}
              disabled={thisPage === totalPages}
            >
              Last Page
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginated;
