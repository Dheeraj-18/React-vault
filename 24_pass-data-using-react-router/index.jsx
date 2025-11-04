//                            Summary Note: Pass Data using react router  ( state and useLocation() Hook )

// Note-1: We are Doing Here some Network optimization!
//       We fetch data on the our Home CountryList page and we again fetch same data by send network request on CountryDetail page
//       so we Optimize that By using the concept pass-data-using react router

// Note-2: we send data passing state on Link tag  react router give the facility so send data form one page to another by give the state jsx 
//         attribute and send data by giving them and state only for Link tag and we take data on another page by useLocation() 
//        Hook provided by react router that return object and that object contain our data which we pass
// The location object looks like:
// {
//   pathname: "/Syria",
//   search: "",
//   hash: "",
//   key: "abc123",
//   state: { ...countryData }   <-- This is our passed data
// }

// Note-3: So React Router DOM gives us this feature of passing data using `state`,
//         but behind the scene it actually uses the browser's `history.pushState()`
//         API to store that state during navigation.







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
