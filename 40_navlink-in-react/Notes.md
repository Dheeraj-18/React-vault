# NavLink in react js 

### **Concept Objective**

- We use routing with **NavLink** to highlight the active page.  
  The main objective is:

 - **Whenever the user navigates to Home, About, or any other page, the active link should be automatically highlighted so the user knows which page they are currently on.**

---

>**Note-1:**  
***When we use `NavLink` with routing, React Router automatically adds some classes and attributes to the active link. For example: `class="active"` (or similar) and `aria-current="page"`. Using these, we can apply styles to highlight the active page — either by writing custom CSS in `App.css` and importing it, or by using the second method explained in Note-2.***


>**Note-2:**  
***When we don’t write raw CSS and instead use Tailwind classes, `NavLink` provides a useful feature: we can pass a callback function to the `className` prop. This function receives an object containing properties like `isActive`. Based on the active link state, `isActive` changes automatically. Using this property, whatever value we return from the callback function becomes the `className` of that link, allowing us to apply Tailwind classes conditionally.***

```
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/about"
          >
```          