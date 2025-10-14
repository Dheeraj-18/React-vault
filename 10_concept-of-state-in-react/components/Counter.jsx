import { useState } from "react"


const Counter = () => {
   const [count, setCount] = useState(0)
   console.log('Rendering');
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
        console.log(count);
      }}>Increase Count</button>
    </div>
  )
}

export default Counter
