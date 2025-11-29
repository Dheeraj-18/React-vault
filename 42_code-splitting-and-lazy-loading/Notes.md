# Code-Splitting & Lazy Loading & Suspense

<img src="https://www.gstatic.com/devrel-devsite/prod/v210625d4186b230b6e4f2892d2ebde056c890c9488f9b443a741ca79ae70171d/web/images/lockup.svg" width="190" />

# [Read on web.dev Articles](https://web.dev/articles/code-splitting-suspense)

## **Concept Objective**

- **In large React applications with many pages and heavy components, loading all JavaScript at once is inefficient—especially for pages the user may never visit.**
- **To improve performance, we split the bundled JavaScript into smaller chunks using **code-splitting**.**
- **With **React.lazy** and **Suspense**, these chunks are **loaded only when the user navigates to that page or component**, instead of loading everything upfront.**
- **This reduces the initial load time and improves the overall performance of the React application.**

---

> ## **Note-1:**  

**In Vite, when we run the application in **dev mode**, each component and JavaScript module is loaded separately.  
This provides faster rebuilds and a smoother developer experience.**

**In **build/production mode**, Vite generates a `dist` folder where all files are **bundled and optimized**.**  
Typically, the browser loads:
- one main HTML file  
- one main CSS file  
- and usually **one large JavaScript bundle**

**This means all pages and components — **even the ones the user may never visit** — are combined into a single JS file and downloaded upfront.**

**For large applications, this increases the initial load time and affects performance.**

**To solve this, we use **code-splitting** with **React.lazy**, which splits the JS bundle into smaller chunks so that **each page loads only when the user visits it**.**

>## **Note-2**

React provides a `lazy()` function to load components lazily. Inside `lazy()`, we pass a callback function that returns a dynamic import using JavaScript's `import()` function by giving the component path. The `import()` function returns a Promise that resolves to a module object containing the exported values. Normally, React expects a **default export** when using `lazy()`. But if a component or data is named export  **not exported as default**, we can manually map the module’s named export to the `default` property inside the Promise.

Below is an example of lazy-loading a component that is **not exported as default** (`Contact` component):

```js
const Contact = lazy(() =>
  wait(1000).then(() =>
    import("./components/Contact").then((module) => ({
      default: module.Contact,
    })),
  ),
);
```
>## **Note-3**

To lazy-load **only data**, we don’t need `React.lazy()` because `lazy()` is meant for components, not plain data.  
Instead, we can simply use JavaScript’s dynamic `import()` to load the data file (like `data.js` containing a `todos` array) whenever the user requests it — for example, when they click a “Load Data” button on the About page.

The dynamic `import()` returns a Promise with the module object, and we can update the component state with the imported data once it resolves.




# **React Lazy & Suspense — Internal Working Notes**

## **1. How `React.lazy()` and `import()` Work Together**

React uses JavaScript’s dynamic `import()` along with React’s `lazy()` wrapper to load components on demand.

### **Key Points**

- **`import()` returns a Promise:**  
  `import("./Component.jsx")` starts downloading the component file asynchronously and returns a Promise that resolves with the module object (e.g., `{ default: MyComponent }`).

- **`React.lazy()` returns a special component type:**  
  `React.lazy(() => import(...))` does *not* return a Promise.  
  It returns a special React component object that knows how to wait for that Promise internally.

### **Internal Flow (Simple)**

1. **Initial Render:** React encounters the lazy component and calls your function `() => import("./Home.jsx")`.  
2. **Promise Pending:** The dynamic import begins loading and returns a pending Promise; the component isn’t ready yet.  
3. **Promise Resolves:** Once the code chunk downloads, the Promise resolves with the module.  
4. **Final Render:** React extracts the `default` export and re-renders using the real component.

---

## **2. How `<Suspense>` Works with Lazy Components**

`<Suspense>` acts as a boundary that manages the loading state of lazy-loaded components.

### **Suspense Internal Behavior** [Suspense Articles](https://www.contentful.com/blog/what-is-react-suspense/)

- **Catches Promises thrown by lazy components:**  
  When the lazy component isn't loaded yet, React “suspends” by throwing the pending Promise internally.

- **Pauses rendering and shows fallback:**  
  The nearest `<Suspense fallback={...}>` catches the Promise and renders the fallback UI (e.g., “Loading...” or a skeleton).

- **Resumes when ready:**  
  Once the Promise resolves, React retries rendering, and the lazy component is now available.  
  The fallback UI disappears, and the actual component renders.

---

## **Why `<Suspense>` is Used (Benefits)**

- **Better UX:** Provides a smooth loading state instead of a blank screen.  
- **No manual loading states:** Removes the need for manual `isLoading` checks.  
- **Code Splitting:** Reduces initial bundle size and improves initial load time.  
- **Stable Layout:** Avoids layout jumps by keeping a consistent placeholder during loading.




