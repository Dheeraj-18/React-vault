export const logger = (store) => (next) => (action) => {
  console.log('store: ', store)
  console.log('next: ', next)
  console.log('action: ', action)
  next(action)
}

// What is Redux Middleware? (Plain definition)

// Redux middleware is a function that sits between dispatch and reducer and lets you intercept, modify, delay, or stop actions.