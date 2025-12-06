import React, { useState } from './react'
import { render } from './react-dom'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(10)
  const [name, setName] = useState('Developer')
  return (
    <div className="App">
      <h1
        style={{ textAlign: 'center', userSelect: 'none', cursor: 'pointer' }}
        onclick={() => {
          setCount(count + 1)
        }}
      >
        {count}
      </h1>
      <h1
        style={{ textAlign: 'center', userSelect: 'none', cursor: 'pointer' }}
        onclick={() => {
          setCount2(count2 + 1)
        }}
      >
        {count2}
      </h1>
      <h1 style={{ textAlign: 'center' }}>{name}</h1>
      <div style={{ textAlign: 'center' }}>
        {' '}
        <input
          type="text"
          onchange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
