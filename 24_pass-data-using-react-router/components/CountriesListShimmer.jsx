import React from 'react'
import './CountriesListShimmer.css'

export default function CountriesListShimmer() {
  //   new Array(10).fill(undefined)

  return (
    <div className="countries-container">
      {Array.from({ length: 50 }).map((ele, i) => {
        return <div key={i} className="country-card shimmer-card"></div>
      })}
    </div>
  )
}
