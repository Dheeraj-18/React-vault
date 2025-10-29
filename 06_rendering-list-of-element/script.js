//                               Summary Note

// Note-1: while we write command in package.json "scripts: there is no need to write "npx:, we use parcel index.html only , when we run this command
//         i.e 'start' named command no need to use 'run' instead npm start works well

// Note-2: We not pass multiple element in the render function by comma separated instead we allow to pass an array of element but it through an
//         error that each element in the array sibling have unique

// Note-3: SO , for Rendering a multiple elements in react Pass a array of react element to the render function and it make sure rendering 
//         properly 

// Note-4: Here when we render multiple react element by just passing array into render method , but here one problem is that while we pass all the 
//         card info to the Card() function must maintain the order of passing the argument for eg. title , image etc. we see the solution of 
//         this in React Component 

import { createRoot } from 'react-dom/client'

import './style.css'

function Card(key, title, image, brandName, price ,category,description) {
  return (
    <div className="card" key={key}>
      <img src={image} alt={category} />
      <div className="card-content">
        <h3>{title}</h3>
        <p> {brandName}</p>
        <p>
          <b>${price}</b>
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const container2 = data.products.map((product) => {
      return Card(
        product.id,
        product.title,
        product.thumbnail,
        product.brand,
        product.price,
        product.category,
        product.description
      )
    })
    console.log(container2)
    root.render(<div className="container">{container2}</div>)
  })
