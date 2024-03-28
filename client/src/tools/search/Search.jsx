import React from 'react'
import "./search.scss"
import { CiSearch } from "react-icons/ci";
export default function Search() {
  return (
    <div>
      <div className="search-container">
        <CiSearch className='icon' />
        <input type="text" className='input-text' />
      </div>
    </div>
  )
}
