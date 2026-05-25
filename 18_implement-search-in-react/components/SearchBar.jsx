import React from 'react'

export default function SearchBar({ setQuery }) {
  function handleSearch(e) {
    setQuery(e.target.value.toLowerCase())
  }
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search for a country"
      />
    </div>
  )
}
