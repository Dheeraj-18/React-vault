//                                 Summary Notes : React Element <virtual DOM>

// NOTE-1: For using a React library in JS file we use CDN link and also with that add a react-dom.development.js CDN bcz when we use React functionality
//         it's not understand by the browser So, for that part handle by this 
// NOTE-2: we add these second CDN react-dom.development.js because react use different place for development like android , ios , web , e.g React Native
//         So here for web use this
// NOTE-3: ByAdding this CDN we able to access the React and ReactDOM object in the js Environment for Development 
// NOTE-3: Here in the React we use React.createElement(type,prop,children) syntax to create a **react element**












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
