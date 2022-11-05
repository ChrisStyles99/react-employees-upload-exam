import React from 'react'
import PaginationItem from './PaginationItem';

const range = (start, end) => {
  return [...Array(end).keys()].map(el => el + start);
}

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);

  return (
    <ul className="flex gap-2">
      {pages.map(page => (
        <PaginationItem key={page} page={page} currentPage={currentPage} onPageChange={onPageChange} />
      ))}
    </ul>
  )
}

export default Pagination