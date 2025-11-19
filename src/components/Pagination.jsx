import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, itemsPerPage, onPageChange, onItemsPerPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 6;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3, 4, 5, 6);
      pages.push('...');
      pages.push(totalPages);
    }

    return pages.map((page, idx) => (
      <button
        key={idx}
        onClick={() => typeof page === 'number' && onPageChange(page)}
        className={`px-3 py-1 rounded transition-colors ${
          currentPage === page
            ? 'bg-blue-500 text-white'
            : 'hover:bg-gray-100'
        } ${page === '...' ? 'cursor-default' : ''}`}
        disabled={page === '...'}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-between mt-auto border-t border-gray-200 px-6 py-4 bg-white flex-shrink-0">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 hover:bg-gray-100 rounded disabled:opacity-50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="flex gap-2">
        {renderPageNumbers()}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 hover:bg-gray-100 rounded disabled:opacity-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="ml-4 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={5}>5 / page</option>
          <option value={10}>10 / page</option>
          <option value={20}>20 / page</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;