import React from 'react'

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  return (
    <li onClick={() => onPageChange(page)}>
      {page}
    </li>
  )
}

export default PaginationItem