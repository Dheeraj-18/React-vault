# Context API vs React-Redux Re-rendering Notes

## Observation

There is a potential issue in this custom implementation using the React Context API.

In this approach, the entire `state` is passed through the Context Provider.  
Whenever **any part of the state changes**, the Context value changes, which causes **all nested components that consume the context to re-render**, even if they do not use the updated part of the state.

This behavior can negatively impact performance in large applications.

---

## How React-Redux Solves This Problem

React-Redux does **not** rely on a single Context value that changes on every state update.

Instead, it uses a **subscription-based model**:

- Each component using `useSelector` **subscribes independently** to the Redux store.
- When an action is dispatched, Redux updates the store.
- React-Redux compares the **previous selected state** with the **new selected state**.
- **Only the components whose selected slice of state has changed will re-render**.

---

## Key Difference

| Context API (Custom Store) | React-Redux |
|----------------------------|-------------|
| Single context value | Independent subscriptions |
| Any state change triggers all consumers | Only affected components re-render |
| Can cause unnecessary re-renders | Optimized for performance |
| Manual optimization needed | Built-in optimization |

---

## Conclusion

This subscription-based architecture is why **React-Redux is more performant and scalable** for large applications compared to a naive Context API-based global state implementation.

React-Redux effectively minimizes unnecessary re-renders and improves overall application performance.

---
