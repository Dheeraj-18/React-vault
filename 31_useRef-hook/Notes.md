# useRef() Hook

## Extracting Form Data — State vs useRef()
---
### **1) Earlier Method: Using `useState` (Controlled Form)**

#### We extract form input values by:
- ***Creating a **state variable** for each input***
- ***Using the **value** attribute (one-way data binding)***
- ***Updating state using **onChange*****

#### This approach is widely used in real projects because:
- ***The UI always stays in sync with state***
- ***Useful for validation and conditional rendering***

### **2) Another Method: Using `useRef()` (Uncontrolled Form)**

#### We attach `useRef()` to the input:
- ***Access the **real DOM input element*****
- ***Read value **only when needed*****
- **Does not trigger re-render** on typing

### Used when:
- You only need the value at submit time
- No need to update UI live

---
## Summary - Note
**Note-1:** ***When we create a ref like `const myRef = useRef()` and log it, it returns an object with a single property called **`current`**. Whatever value we pass inside `useRef(value)` will be stored in `current`; if nothing is passed, then `current` will be `undefined`. The key difference from `useState` is that `useRef` does **not** return an update function like `setState`, and **changing the value of `myRef.current` does not cause re-rendering** of the component. We use `useRef` when we want to store or update a variable **without triggering re-renders**, making it useful for things like accessing DOM elements or storing values that should persist across renders but not update the UI.***

### First use Case : If we want make any variable persist across between re-render then use Ref variable
**Note-3:** ***If we only want to avoid re-rendering, it might seem like we can simply use a normal `let` variable instead of `useRef`, but the difference is that a normal variable does **not persist** its value between re-renders. Every time the component re-renders, a normal `let` variable is re-created and loses its updated value. In contrast, `useRef()` preserves its value across renders because React stores the `current` value outside the component’s render cycle. So when the component re-renders, the `ref.current` value remains the same and holds the latest update, which is something a normal variable cannot do.***

### Second use Case : To access reference  actual node of  DOM element
**Note-3:** ***We use `ref={myRef}` on an HTML element to directly reference its actual DOM node, and in practice, we usually initialize the ref as `useRef(null)` because leaving it uninitialized can sometimes cause errors (especially in TypeScript during compile time). Even though this method allows us to read values without re-rendering, we still often prefer using `useState` for forms because React is designed to re-render efficiently and controlled forms provide better synchronization with UI and validation. Another difference is that `useRef` creates a single ref value per variable, so for multiple fields we must create multiple refs, whereas with `useState` we can keep all form fields together in one state object and update them more conveniently.***



---
| refs | state |
|------|-------|
| `useRef(initialValue)` returns `{ current: initialValue }` | `useState(initialValue)` returns the current value of a state variable and a state setter function (`[value, setValue]`) |
| Doesn’t trigger re-render when you change it. | Triggers re-render when you change it. |
| Mutable — you can modify and update `current`’s value **outside** of the rendering process. | “Immutable” — you must use the state setting function to modify state variables to queue a re-render. |
| You shouldn’t read (or write) the `current` value during rendering. | You can read state at any time. However, each render has its own **snapshot** of state which does not change. |




