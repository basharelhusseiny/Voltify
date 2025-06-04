import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const [isCompactMode, setIsCompactMode] = useState(false);

  const updatePaginationMode = () => {
    if (pages > 5) {
      setIsCompactMode(true);
    } else {
      setIsCompactMode(false);
    }
  };

  useEffect(() => {
    updatePaginationMode();
  }, [pages]);

  const renderPageNumbers = () => {
    if (!isCompactMode) {
      return (
        <div className="inline-flex">
          {Array(pages)
            .fill()
            .map((_, index) => (
              <button
                onClick={() => setCurrentPage(index + 1)}
                key={index}
                className={`${
                  currentPage === index + 1
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100"
                } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] text-xs sm:text-sm rounded-full mx-0.5 cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-300`}
              >
                {index + 1}
              </button>
            ))}
        </div>
      );
    }

    const pageNumbers = [];
    pageNumbers.push(1);
    if (currentPage > 3) {
      pageNumbers.push("...");
    } else if (currentPage <= 3) {
      pageNumbers.push(2);
    }
    if (currentPage !== 1 && currentPage !== pages) {
      if (currentPage > 2 && currentPage < pages - 1) {
        pageNumbers.push(currentPage);
      }
    }
    if (currentPage < pages - 2) {
      pageNumbers.push("...");
    } else if (currentPage >= pages - 2 && pages > 3) {
      pageNumbers.push(pages - 1);
    }
    if (pages > 1) {
      pageNumbers.push(pages);
    }
    return (
      <div className="inline-flex">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center text-xs sm:text-sm mx-0.5"
              >
                ...
              </span>
            );
          }
          return (
            <button
              onClick={() => setCurrentPage(page)}
              key={`page-${page}`}
              className={`${
                currentPage === page ? "bg-teal-500 text-white" : "bg-gray-100"
              } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] text-xs sm:text-sm rounded-full mx-0.5 cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-300`}
            >
              {page}
            </button>
          );
        })}
      </div>
    );
  };
  return (
    <div className="my-5 sm:mt-10">
      <div className="flex justify-center items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full mx-0.5 cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-300 ${
            currentPage === 1 ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <IoIosArrowBack />
        </button>
        <div className="mx-1 sm:mx-2">{renderPageNumbers()}</div>
        <button
          disabled={currentPage === pages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full mx-0.5 cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-300 ${
            currentPage === pages ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
