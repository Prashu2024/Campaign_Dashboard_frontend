import { useState, useMemo } from 'react';

export const usePagination = (items, initialItemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const resetPage = () => setCurrentPage(1);

  return {
    currentPage,
    totalPages,
    currentItems,
    itemsPerPage,
    setItemsPerPage,
    goToPage,
    nextPage,
    prevPage,
    resetPage
  };
};