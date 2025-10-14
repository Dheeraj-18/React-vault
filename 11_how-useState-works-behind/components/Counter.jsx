import { useState } from 'react'

const states = [0, 'Dheeraj '] // for understanding

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Dheeraj')
  console.log('Rendering')
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          console.log(count);   // count value is zero 
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setName('Dheeraj Saraswat')
          console.log(count);  // count value is zero 
        }}
      >
        Increase Count
      </button>
    </div>
  )
}

export default Counter
