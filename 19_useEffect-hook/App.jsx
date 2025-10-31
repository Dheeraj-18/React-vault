import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'

export default function App() {
  const [query, setQuery] = useState('')
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
        {query === 'unmount' ? '' : <CountriesList query={query} />}
      </main>
    </>
  )
}
