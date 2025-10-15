//                                   <<<<<  Children Props in React  >>>>>>

// Note-1: Till now, we have been rendering components using self-closing tags.
//         But we can also render them using normal opening and closing tags.
//         When we do this, React automatically enables a special feature where
//         anything placed between those tags is passed to the component as the
//         `children` prop.

// Note-2: In React, the children prop is a special built-in prop that is automatically passed to every component.
// It represents the content (elements, text, or components) that are written between the opening and closing tags of a component

// Note-3: If not pass anything and console.log(children) it give undefined 

// Note-4: Benefits of the `children` prop in React

//   1️⃣ Reusability:
//     - We can create a single generic component that works with any type of inner content.
//     - Example: One <Card> component can wrap text, images, or other components.

//   2️⃣ Flexibility & Composition:
//     - Helps in building layouts and wrappers (like Modals, Layouts, Containers).
//     - Allows components to wrap and organize other components easily.
//     - Encourages the React principle of “composition over inheritance”.

//   3️⃣ Clean & Declarative Code:
//     - Instead of passing multiple props for different sections (header, body, footer),
//       we can directly pass JSX elements as children.
//     - This makes our code easier to read and maintain.

//   4️⃣ Supports All Types of Content:
//     - `children` can hold text, HTML elements, components, or even functions.
//     - Makes components extremely flexible for different use cases.

//   5️⃣ Better Encapsulation:
//     - The parent component decides what content to send,
//       while the child component controls only how it’s displayed.
//     - Helps in building reusable wrappers (like <Modal>, <Tooltip>, <Dialog>, etc.).

//   ✅ Summary:
//     - The `children` prop increases reusability, flexibility, composability,
//       and readability of React components.




import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector('#root'))

root.render(<App/>)