import { useState } from 'react'

const states = [0, 'Dheeraj '] // for understanding

import styles from './Counter.module.css'

// console.log(styles);                      // return a object and use with styles.xyz

const Counter = ({ counterName , children }) => {
  const [count, setCount] = useState(0)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={styles.textXl}>{count}</h1>
      <button
      className={[styles.button,styles.textXl].join(' ')}     // way to give multiple css in from module file 
        onClick={() => {
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>
      {
        children
      }
    </div>
  )
}

export default Counter
