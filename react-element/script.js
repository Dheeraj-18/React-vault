//                                 Summary Notes : React Element <virtual DOM>

// NOTE-1: For using a React library in JS file we use CDN link and also with that add a react-dom.development.js CDN bcz when we use React functionality
//         it's not understand by the browser So, for that part handle by this for rendering the react elements 
// NOTE-2: we add these second CDN react-dom.development.js because react use different place for development like android , ios , web , e.g React Native
//         So here for web use this
// NOTE-3: ByAdding this CDN we able to access the React and ReactDOM object in the js Environment for Development 
// NOTE-3: Here in the React we use React.createElement(type,prop,children) syntax to create a **react element** React.createElement(type,{},children)
// NOTE-4: SO after making a React Element for render in on browser we use createRoot methods on ReactDOM object so for we create a hardcode container 
//         in our html then pass that container into the ReactDOM.createRoot(container), after all react element are push into this container . 
// NOTE-5: .createRoot() method return a object on that object there is a method called .render() by doing this we render our react element on browser
// NOTE-6: (in ./react-note-img)
// In React, a React Element is actually a plain JavaScript object.
// Among its properties, two are particularly important: `ref` and `$$typeof`.
//
//   $$typeof: Symbol.for('react.element')
//   → The `$$typeof` property ensures the object is recognized as a valid React Element.
//     It provides security because `Symbol` is a unique JavaScript type that cannot be
//     serialized or transmitted via JSON. This prevents malicious scripts or APIs
//     from injecting fake React elements or harmful data into the application.

// NOTE-7:
// We can pass an array of elements as the `children` argument in React.createElement().
// There’s an important rule: all sibling elements within the same parent must have unique `key` values
// in their props object (e.g., key={2}).
//   However, elements under different parents can have the same key value —
//   the key uniqueness rule only applies among siblings under the same parent.

// NOTE-8:
// React allows us to write everything — including HTML-like structures — in one place,
// making UI creation easier compared to manual DOM manipulation in vanilla JavaScript.
// However, when using React.createElement() directly, it still feels verbose compared to
// simply writing HTML structure, which is why a simpler syntax was needed.


// NOTE-9:
// To simplify UI creation in React, JSX was introduced — it lets us write HTML-like syntax
// directly inside JavaScript. 
// Since browsers don’t understand JSX natively, a compiler like **Babel** converts JSX
// into standard JavaScript function calls (React.createElement()) before it runs in the browser.
// This conversion ensures the browser ultimately executes regular JavaScript code.

// FINAL NOTE: (./react-virtual-dom.png)
// In a normal HTML–CSS–JS setup, the entire webpage is part of a large DOM tree — 
// the <body> element is the main container, and all other elements exist as its children
// (and their nested children). You can see this structure by using console.dir(document).
//
// Similarly, React maintains its own Virtual DOM — a lightweight JavaScript
// representation of the actual DOM. 
// The Virtual DOM helps React efficiently update only the parts of the UI that change,
// instead of re-rendering the entire page.


//  __________________________________________________________________________________________________________________________________________


// const h2 = React.createElement('h2',{className:'sub-heading',id:'sub-title'},'Hello React')

const container = React.createElement(
  'div',
  { className: 'container', id: 'container' },
  [
    React.createElement('section', { key: 1 }, [
      React.createElement(
        'p',
        { key: 1 },
        'The library for web and native user interfaces'
      ),
      React.createElement('img', {
        key: 2,
        style: {
          width: 200,
          backgroundColor: 'teal',
          borderRadius: 8,
          padding: 16,
        },
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
      }),
    ]),
    React.createElement('section', { key: 2 }, [
      React.createElement('form', { key: 1 }, [
        React.createElement('div', { className: 'input-group', key: 1 }, [
          React.createElement(
            'label',
            { key: 1, htmlFor: 'username' },
            'Username'
          ),
          React.createElement('input', { key: 2, id: 'username' }),
        ]),
        React.createElement('div', { className: 'input-group', key: 2 }, [
          React.createElement(
            'label',
            { key: 1, htmlFor: 'password' },
            'Password'
          ),
          React.createElement('input', {
            key: 2,
            id: 'password',
            type: 'password',
          }),
        ]),
      ]),
    ]),
  ]
)

// const h2 = {
//   $$typeof: Symbol.for('react.element'),
//   type: 'h2',
//   ref: null,
//   props: {
//     className: 'sub-heading',
//     id: 'sub-title',
//     children: 'Hello React',
//   },
// }

const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h2)

root.render(container)

// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type: 'h2',
//   ref: null,
//   props: {
//     children: [
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: 'span',
//         ref: null,
//         props: {
//           children: [
//             {
//               $$typeof: Symbol.for('react.element'),
//               type: 'button',
//               ref: null,
//               props: {
//                 children: 'Hello Button',
//               },
//             },
//             {
//               $$typeof: Symbol.for('react.element'),
//               type: 'button',
//               ref: null,
//               props: {
//                 children: 'Hello Button2',
//               },
//             },
//           ],
//         },
//       },
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: 'i',
//         ref: null,
//         props: {
//           children: 'Hello React',
//         },
//       },
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: 'b',
//         ref: null,
//         props: {
//           children: 'Hello React',
//         },
//       },
//     ],
//   },
// })

// const rootElement = document.querySelector('#root')
// const h2 = document.createElement('h2')
// h2.innerText = 'Hello JS'
// h2.classList.add('sub-heading')

// rootElement.append(h2)
