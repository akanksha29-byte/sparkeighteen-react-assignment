import React from "react";

const Pagination = ({ handleNext, handlePrev, currentPage, limit }) => {
  return (
    <div className="pagination">
      <button
        onClick={handlePrev}
        id="prev"
        disabled={currentPage === 0 ? true : false}
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        id="next"
        disabled={currentPage === limit ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
