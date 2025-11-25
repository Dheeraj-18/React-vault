# Portals in React

### **Concept Objective**

- Create a pop-up using **React Portals**.

- **Whenever the user clicks the Sign In button, a pop-up should open using React Portal.**

---

> ## **Note-1**

- **_We can easily render our Modal component inside the Header `<li>` when the user clicks the Sign In button. We create a state in the Header component and pass it as a prop to the Modal component. The modal opens and closes based on this `isOpen` state._**

- **_We also add `onClick` handlers to both modal buttons to update the state accordingly. To close the modal when the user clicks outside of it, event bubbling occurs, so we use `e.stopPropagation()` on the modal content container to prevent the click event from closing the modal unintentionally._**

- **_This approach works, and we can successfully implement the modal. However, it still has some limitations — and that is exactly why React Portals come into the picture. We will see this in Note-2._**

> ## **Note-2**

### **Problems with the above approach to implement the pop-up**

1. **Incorrect semantics / DOM placement**  
   **_The modal’s HTML is rendered inside the `Header` `<li>`, which is not semantically appropriate. A modal is an application-level overlay and its markup should live near the document root (for example, directly under `<body>` or inside a dedicated container). Rendering it deep inside the header breaks the expected document structure and can cause accessibility and styling problems._**

2. **Stacking context and z-index issues**  
   **_When the modal is rendered inside a header or other nested element, other elements (logo, header items, or page content) can appear above the modal due to stacking contexts created by parent elements (e.g., `position`, `transform`, `opacity`, `z-index`, or `filter` on ancestors). Simply increasing the modal’s `z-index` may not fix this because a new stacking context on an ancestor can trap the modal behind it._**

### To avoid these problems, we use **React Portals** to render the modal into a DOM node that lives outside the header (typically a root-level container). This ensures the modal:

- **Is placed semantically at the document root.**
- **Escapes ancestor stacking contexts, avoiding z-index conflicts.**
- **Is easier to manage for accessibility (focus trapping, ARIA attributes) and page-level behaviors (preventing background scroll).**

> ## **Note-3**

### **Finally use the `createPortal(element,container)` create popup**

- **We use `createPortal()` from `react-dom` and add an extra `<div>` in `index.html` with an ID (e.g., `portal`). In `Modal.jsx`, we pass two parameters to `createPortal(element, document.getElementById('portal'))`, so the modal’s HTML is rendered inside this portal container.**

- **Because of this, even if we place the `<Modal />` component inside a `<li>` in the Header and pass props, it will not render there. Instead, it will render inside the portal container in `index.html`.**

- **By doing this, we maintain proper HTML semantics and also avoid z-index issues that occur in the normal approach.**

- **Even though our Modal does not visually render inside the `<li>` of the Header (because React Portal moves it to the portal container), it still behaves as if it is part of the same component tree.**

- **This means that if we put any event handler on the `<li>` (the parent from where `<Modal />` was called), event bubbling will still work normally. React Portal only changes _where_ the modal is rendered in the DOM—not how it behaves in the React tree.**

> ## we create a reusable Modal component that receive header and footer as prop and we use it anywhere

```
import React, { Children } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, setIsOpen, header, footer, children }) {
  return createPortal(
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
          {children}
        </div>
        {footer}
      </div>
    </div>,
    document.getElementById("portal"),
  );
}

```
