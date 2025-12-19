# Redux Selectors – Clean & Optimized State Access


---

## What are Selectors?

Selectors are **functions used to read specific pieces of state from the Redux store**.

In React-Redux, selectors are passed as **callback functions** to the `useSelector` hook.

```js
const products = useSelector((state) => state.products.items)
```

## Why Use Selectors?

- Avoid repeating state access logic across components

- Improve readability and maintainability

- Keep components focused on UI, not state structure

- Enable performance optimizations using memoization

## Convention: Where to Define Selectors?

- It is a best practice to define selectors inside their respective slice files, not inline inside components.

- ❌ Inline selector (not recommended)
```js
const products = useSelector((state) => state.products.items)
```
- ✅ Selector defined in slice (recommended)

```js
// productSlice.js
export const selectAllProducts = (state) => state.products.items
```
```js
// Home.js
const products = useSelector(selectAllProducts)
```

## Common Selectors in a Slice

***Typically, selectors are created for:***

- Main data (e.g., products list)

- Loading state

- Error state

```js
export const selectAllProducts = (state) => state.products.items
export const selectProductsLoading = (state) => state.products.loading
export const selectProductsError = (state) => state.products.error
```
## Naming Conventions for Selectors

U**se clear and descriptive names so selectors are easy to understand and reuse.**

> **Common conventions:**

- get prefix

- getAllProducts

- getLoadingState

- select prefix (more common in Redux Toolkit)

- selectAllProducts

- selectProductsLoading

👉 Prefer names that clearly indicate what data is being selected, especially when multiple slices may have similar fields like loading or error.

---
## Performance Issue: Returning New Arrays or Objects

**A common warning occurs when a selector returns a new array or object on every call.**
```js
const expensiveData = useSelector((state) =>
  state.products.items.filter(p => p.price > 100)
)
```
**This causes unnecessary re-renders, even if the data hasn’t changed.**

## Solution: Memoization with `createSelector`

**To fix this, Redux provides `createSelector` (from Reselect, used internally by Redux Toolkit).**

***What is createSelector?***

- Creates a memoized selector

- Recomputes the result only when inputs change

- Prevents unnecessary re-renders

# `createSelector` Syntax 

```js
const getCartItems = ({ products, cartItems }) => {
  return cartItems.list
    .map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      )
      return { ...cartProduct, quantity }
    })
    .filter(({ title }) => title)
}

export const getAllCartItems = createSelector(getCartItems, (cartItems) => cartItems)
```
- First argument: input selector(s)

- Second argument: transformation function

- The result is cached unless input changes

# Why Memoization Matters

> **Without memoization:**
> - ***New arrays/objects trigger re-renders***
> - ***Performance degrades in large apps***

> **With memoization:**
> - ***Components re-render only when necessary***
> - ***Better performance and smoother UI***

# Final Summary

- Selectors are functions used with useSelector to read Redux state

- Define selectors inside slice files, not inline in components

Use clear naming conventions like selectAllProducts

- Refactor components to rely on exported selectors for cleaner code

- If a selector returns a new array or object, use createSelector

- Memoization prevents unnecessary re-renders and improves performance