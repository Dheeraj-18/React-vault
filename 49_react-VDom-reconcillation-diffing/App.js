import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'

// import LeftArrow from './assets/images/left-arrow.png'
// const LeftArrow = new URL('./assets/images/left-arrow.png', import.meta.url);

// console.log(LeftArrow)

const App = ({root}) => {
  return (
    <div>

      <AppleCounter/>
    </div>
  )
}

const h1_virtual = <h1>Hello React </h1>
const h1_real = document.createElement('h1')
h1_real.innerText = "Hello World"
console.log(h1_virtual);
console.dir(h1_real);


export default App
