//                            Summary Note: shimmer Effect 

// Note-1: Why not hardcode shimmer cards?
// If we manually write <div className="country-card shimmer-card"></div> multiple times,
// it becomes repetitive and not scalable. React encourages dynamic rendering instead of
// manually duplicating UI elements. So, we avoid hardcoding multiple shimmer elements.

// Note-2: Creating an empty array for shimmer placeholders
// We need an array to loop over and display shimmer cards. There are multiple ways:
//   1) new Array(10).fill(undefined)
//   2) Array.from({ length: 10 })
// The best and clean approach is: Array.from({ length: 10 })
// Because it directly creates an array-like structure with a defined length that we can map over.

// Note-3: Rendering shimmer cards dynamically using map()
// We map over Array.from({ length: 10 }) and return our placeholder shimmer card.
// Each card needs a unique 'key' to help React identify and manage list elements.
//

// { <div className="countries-container">
//   {Array.from({ length: 10 }).map((_, i) => {
//     return <div key={i} className="country-card shimmer-card"></div>;
//   })}
// </div> }





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
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
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
