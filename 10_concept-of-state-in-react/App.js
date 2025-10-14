import AppleCounter from './components/AppleCounter'
import Counter from './components/Counter'

// import LeftArrow from './assets/images/left-arrow.png'
// const LeftArrow = new URL('./assets/images/left-arrow.png', import.meta.url);

// console.log(LeftArrow)

const App = ({root}) => {
  return (
    <div>

      <AppleCounter root={root} />
    </div>
  )
}

export default App
