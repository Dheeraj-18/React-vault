import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from './middleware/logger'

// currying in Javascript

// function logger(a,b,c){

// }

// Curried function 

// function logger(a) {
//   return function (b) {
//     return function (c) {}
//   }
// }

// logger(a)(b)(c)


// function logger(store){
//   return function(next){
//     return function(action){
//       console.log('store: ', store);
//       console.log('store: ', next);
//       console.log('store: ', action);
//       next(action)
//     }
//   }
// }

// Note-1: Bydefault middleware stop the action of be dispatch when we call next(action) then it will be dispatch 

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: [logger],
})
