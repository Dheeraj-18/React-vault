import React from './react'
import { render } from './react-dom'

import './App.css'

function Card(props) {
  const { title, image, brand, price, category, description } = props // Destructuring of Object
  return (
    <div className="card">
      <img src={image} alt={category} />
      <div className="card-content">
        <h3>{title}</h3>
        <p> {brand}</p>
        <p>
          <b>${price}</b>
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              title={product.title}
              key={product.id}
              brand={product.brand}
              price={product.price}
              category={product.category}
              image={product.thumbnail}
              description={product.description}
            />
          )
        })}
      </div>,
      document.getElementById('root')
    )
  })

// render(<Card />, document.getElementById('root'))
