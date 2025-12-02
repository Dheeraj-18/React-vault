# `this` binding in Class Component
---

> ## **Note-1**
>
> ***In JavaScript, when we use `this` inside an event listener or inside a normal function attached to an element, `this` refers to that element itself.***  
>
> ***But in React, this does **not** work the same way. If we use `this` inside an event handler (like `onClick`) without binding, it becomes `undefined` because React does not automatically bind `this` for class component methods.***  
>
> ***However, when we use an **arrow function**, `this` works correctly because arrow functions do not have their own `this` — they inherit `this` from their surrounding (parent) scope.***

 