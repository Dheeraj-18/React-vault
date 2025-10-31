import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region#'
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
      })

    //  const intervalId = setInterval(()=>{
    //     console.log("running countriesList");
    //   },[1000])

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    console.log('hii')
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString('en-In')}
                region={country.region}
                capital={country.capital?.[0]}
              />
            )
          })}
      </div>
    </>
  )
}
