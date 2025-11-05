//                            Summary Note: dark mode by Lift up state  ( using Context and use )

// Note-1: First-approach : as we have already css of dark in App.css so we just toggle class 'dark' on body inside the onClick
//         of button i.e <p></p> in header component and also implement local storage all these using state variable created by 
//         useState() hook , but there is a

//         problem : when our component is render after page reload the button isn't clicked automatically.so even we 
//                   implement localStorage it not persist while we reload so , 

//         Solution: we take out the logic of add class 'dark' on <body> outside the 
//                  component and put in the if else check based upon on state value . 

// Note-2: But in react there is not good practice to add classes on body using document API so, instead of this we add classes 
//         on our main and header inside the jsx dynamically  <header className={`header-container ${isDark ? 'dark' : ''} `}> but

//  Problem: we create this state variable inside the Header component so access only here  but also want to use this in other 
//           main i.e countryList component to add classes using this state variable so we using the concept of "Lifting up the 
//           state " i.e define the state  variable using useState() hook in their common parent component i.e here in this case
//           <App/> component 

// Note-3: Okk we define that state variable on their component but How we pass to both i.e <Header/> and <CountryList/> component 
//         we pass directly pass this state as a prop on <Header/> but for others component which we render inside the <Outlet/> 
//         So How we pass form their 

// Note-4: So React Router DOM provide a property on <Outlet/> i.e context so inside this we pass anything and able to access in there 
//         all component which are render inside the <Outlet/> in our case like <Home/> , <ComponentDetails/> 

// Note-5: useOutletContext() hook: React route dom Provide hook to access the context property value inside the component which
//                                  all are render under the <Outlet/> 

// Note-6: Without using `context`, we would need to pass `isDark` from App → Home → Child → further
//         components as props. This continuous passing of props through every level is called
//         "prop drilling". To avoid this, React Router provides `Outlet context`, which allows us
//         to directly share data (like isDark and setIsDark) with all nested components which are render under <Outlet/> w/o
//         passing props manually.


// Conclusion Note: still this is not a good way to use context we use React context API to do that bcz we avoid any declaration 
//                 in our App.jsx so define a themeContext and import that data any where we want to use without passing as prop
//                as we do now in app.jsx 





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
