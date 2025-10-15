import AppleBasket from './AppleBasket'
import Button from './Button'
const LeftArrow = new URL('../assets/images/left-arrow.png', import.meta.url)
const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url)

import './AppleCounter.css'
import { Fragment, useState } from 'react'

// let rightAppleCount = 0
// let leftAppleCount = totalAppleCount - rightAppleCount

console.log(Fragment);
console.log(typeof Fragment);
console.log(<Fragment></Fragment>);

const AppleCounter = () => {
  const totalAppleCount = 10
  const [rightAppleCount, setRightAppleCount] = useState(0)
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  )
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1)
      setLeftAppleCount(leftAppleCount + 1)
    }
  }
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1)
      setLeftAppleCount(leftAppleCount - 1)
    }
  }
  return (
    <Fragment>
      <section>
        <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow.href}
          title="left-arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow.href}
          title="right-arrow"
        />
        <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
      </section>
      <p>Hii</p>
    </Fragment>
  )
}

export default AppleCounter
