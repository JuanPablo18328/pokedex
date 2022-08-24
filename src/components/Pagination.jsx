import React from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages }  = props;
  return (
    <div className='pagination'>
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className='icon'><BiChevronLeft /></div>
      </button>
        <div>{page} de {totalPages}</div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className='icon'><BiChevronRight /></div>
        </button>
    </div>
  )
}

export default Pagination