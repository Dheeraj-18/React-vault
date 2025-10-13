//                  <<<<<     Why we Need React Intro......      >>>>

// Reason-1:
//  Imperative Programming:
//    Telling the computer HOW to do something step by step.
//    Example: Vanilla JS DOM manipulation (createElement, appendChild, etc).

//  Declarative Programming:
//    Telling the computer WHAT you want, not how to do it.
//    Example: React JSX (just declare UI, React updates DOM automatically).

// Reason-2:
// Component Based Architecture
//    React breaks the UI into small, reusable pieces called components.
//    Each component manages its own logic + UI, making code easier to
//    reuse, maintain, and scale in large applications.
//    Example: A Button, Navbar, or Card component can be reused anywhere.

// Reason-3:
// Single Page Application (SPA)
//    React allows building fast SPAs where the page does not fully reload.
//    Only the required components are updated using React Router & Virtual DOM.
//    This gives smoother navigation, better performance, and a native app-like feel.
//    Example: Switching between Home, About, and Contact pages without reload.



const firstBasket = document.querySelector('.basket-1 span')
const secondBasket = document.querySelector('.basket-2 span')
const leftArrowBtn = document.querySelector('.left-arrow')
const rightArrowBtn = document.querySelector('.right-arrow')

const totalApple = 10

let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApple - secondBasketAppleCount

firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketAppleCount

rightArrowBtn.addEventListener('click', () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--
    firstBasket.innerText = firstBasketAppleCount
    secondBasketAppleCount++
    secondBasket.innerText = secondBasketAppleCount
  }
})
leftArrowBtn.addEventListener('click', () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++
    firstBasket.innerText = firstBasketAppleCount
    secondBasketAppleCount--
    secondBasket.innerText = secondBasketAppleCount
  }
})
