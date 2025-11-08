# Working with forms in React

> **Note-1 :**  ***Till now we learn all the react concept using parcel build tool but now we  use vite it also a fast even then ```create react app``` so Here it provide complete folder structure with ESLint configuration we just run ```npm install``` then run npm run dev to start our project on local server***

> **Note-2 :** ***Earlier we used libraries like `uuid` or `nanoid` to generate unique IDs, but modern browsers now support `crypto.randomUUID()`. This built-in function generates a completely new and unique ID every time it is called, making it useful for creating IDs in React components, form fields, and list items without installing any extra packages.***

>**Note-3 :** ***The index from `.map()` can be used as a key only when the list is static. In dynamic lists where items may be added, removed, or reordered, using the index as the key can cause UI bugs because React may reuse or misplace elements. Use a stable and unique ID (like one generated using `crypto.randomUUID()`) instead.***

>**Note-4 :** ***To extract data from a form, create a `FormData` object using `new FormData(e.target)`. This only works if every input in the form has a `name` attribute; without it, the field will not be included in the result. You can convert the `FormData` into a usable object using `Object.fromEntries(new FormData(e.target))`, or iterate over the data using `formData.entries()` to access key/value pairs.***

 
```jsx
  const getFromData = (form) => {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }
    return data
  }
```
---
| Topic | lecture | subtopic |
|-----|----|------|
| React | 33 | form in react |



