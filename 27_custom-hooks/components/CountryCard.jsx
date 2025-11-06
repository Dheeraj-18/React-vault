import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard(props) {
  const { name, flag , population , region ,capital ,data } = props
  return (
    <Link to={`/${name}`} className="country-card" state={data}>
      <img src={flag} alt={name + 'flag'} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b> {population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </Link>
  )
}
