import { combineReducers, createStore } from 'redux'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
import { produce } from 'immer'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

const users = [
  {
    name: 'Dheeraj',
    age: 22,
  },
  {
    name: 'Ram',
    age: 18,
  },
  {
    name: 'Adarsh',
    age: 16,
  },
]

// users[1].age =  20   // mutable code non-functional approach

// This is function-programming approach update immutable so this leverage give immer-js with doing mutable update but behind the seen handle it immutable update
// const newUser = users.map((user, i) => {
//   if (i === 1) {
//     return { ...user, age: 20 }
//   }
// })


// That all immer-js give leverage that in the callback we mutate it in the proxy Draft state but producer behind the seen handle it immutablely
// const newUser = produce(users, (userDraft) => {
//   userDraft[1].age = 20
// })
