import React from 'react'

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  return (
    <li onClick={() => onPageChange(page)} className={`${currentPage === page ? 'bg-sky-600' : 'bg-sky-800'} text-white p-3 rounded-xl cursor-pointer`}>
      {page}
    </li>
  )
}

export default PaginationItem