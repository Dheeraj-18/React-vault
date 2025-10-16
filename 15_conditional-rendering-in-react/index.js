//                                   <<<<<  Conditional Rendering in React  >>>>>>

// Definition:
//   Conditional Rendering in React means displaying different UI elements or components
//   based on specific conditions — similar to using conditional statements (if/else,
//   ternary operator, switch) in JavaScript.
//
// Technical Explanation:
// - Conditional Rendering determines which parts of a component’s JSX (Virtual DOM tree)
//   will be created and rendered based on the evaluated conditions at render time.
// - React doesn’t have its own special syntax for this — it uses pure JavaScript logic
//   (if, else, &&, ?:, etc.) inside the render function or return statement.
// - These conditions are evaluated during the "render phase" (before React commits
//   changes to the real DOM). Based on the result, React decides which elements or
//   components to include, skip, or remove in the Virtual DOM.
// - After the Virtual DOM is built, React’s reconciliation algorithm efficiently updates
//   only the changed parts in the actual DOM.
//
// ✅ Common Patterns:
// 1. Using Ternary Operator → condition ? <ComponentA /> : <ComponentB />
// 2. Using Logical AND → condition && <Component />
// 3. Using If/Else statements → define logic before the return()
// 4. Using IIFE (Immediately Invoked Function Expression) → for complex multi-branch logic
//
// ✅ Example:
// function UserGreeting({ isLoggedIn }) {
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
//     </div>
//   );
// }
//
// ✅ Summary:
// Conditional Rendering allows React to render dynamic and interactive UIs by controlling
// what gets rendered to the screen depending on the component’s current state, props, or data.
// ------------------------------------------------------------



import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector('#root'))

root.render(<App/>)