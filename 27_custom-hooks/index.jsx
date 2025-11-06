//                      IMP_      Summary Note: Custom Hooks

//  Declaimer: In this project we not have too much to handle to we just make some hooks for only learning purpose but yes, make
//              one basic hook which we eventually use in our project ...
//           first-hook for learn : useWindowSize()
//           second which we use i.e useTheme()
//
// Note-1: Reusing Logic with Custom Hooks
//        React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a
//        Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect
//        to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.

// Note-2: Custom Hooks in React are JavaScript functions designed to extract and reuse stateful logic from functional components.
//         They allow developers to encapsulate complex logic, such as data fetching, form handling, or interactions with browser APIs,
//         into reusable units.

//      Key Characteristics of Custom Hooks:

// 1) Functionality:
//    - Custom hooks are normal JavaScript functions.
//    - They use built-in hooks like useState(), useEffect(), useContext(), etc.
//    - They can also use other custom hooks inside them.

// 2) Naming Convention: (Hook names always start with use )
//    - The function name MUST start with "use" (e.g., useLocalStorage, useFetchData).
//    - This naming lets React apply the Rules of Hooks correctly.

// 3) Reusability:
//    - Helps in reusing logic across multiple components.
//    - Extracts repeated logic into one place → reduces code duplication.

// 4) Encapsulation:
//    - Keeps components clean by moving complex logic into a separate function.
//    - Makes code easier to read, maintain, and test.

// 5) No JSX:
//    - Custom hooks DO NOT return JSX.
//    - They return values like state, data, or functions that components can use.

//    Benefits of using custom hooks:

// 1. Improved Code Organization
// 2. Reduced Code Duplication
// 3. Enhanced Maintainability
// 4. Simplified Testing

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'
import CountryDetail from './components/CountryDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)
