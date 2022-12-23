import { useState } from "react";

const usePagination = (perPageRecords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageRecords);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(perPageRecords - 1);
  const [currentPage, setCurrentPage] = useState(1);

  const displayPage = (pageNo) => {
    setCurrentPage(pageNo);
    let end_page_index = perPageRecords * pageNo - 1;
    let start_page_index = perPageRecords * pageNo - perPageRecords;
    setStartPage(start_page_index);
    if (end_page_index > totalPageRecords) {
      setEndPage(totalPageRecords - 1);
    } else {
      setEndPage(end_page_index);
    }
  };
  return [totalPages, startPage, endPage, currentPage, displayPage];
};

export default usePagination;
