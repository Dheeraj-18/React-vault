//                            Summary Note: Routing in React

// Note-1: Our react is serve only one single file i.e index.html from dist folder so for create multiple pages or we having route
//        between components we have library called react router dom (made by remix) so using that we create multiple pages and set 
//        route configuration 

// Note-2: npm install react-router-dom@6  (Here in the video we use react router V6) but as now v7 is present and in there import
//         and using syntax is quite different When we make project follow documentation or latest resources about V7 import syntax
//
// Note:3: So, after installing this react router library we import from there createBrowserRouter() method and <RouterProvide router={router}/>
//         component we pass a array of route configuration in the createBrowserRouter() methods . 

// Note-4: SO, if we want some component in multiple pages like we want header component is all pages so either we manually add 
//         add <Header/> component in all  pages like in contact page and App home page all though it's a  good reusability bcz 
//         in vanilla js we create multiple file and each file write again the code of header.But still this is not a good way to 
//         reusability of 

// Note-5: So, to avoid repeating a common component (like <Header/>) in every page component,
//         react-router provides a concept called “Layout Route”. In this, we define a parent route
//         whose element contains the common components. Then, inside that parent route, we define
//         all other pages as children using the `children:` key in the route configuration array.
//
//         Example: The parent component (let’s call it <AppLayout/>) will contain Header, Footer,
//         Sidebar, etc. AND in place where page specific content should appear, we use <Outlet/>.
//         <Outlet/> works as a placeholder which will dynamically render whichever child route is
//         currently active.
//
//         So our parent route looks like:
//              {
//                path: "/",
//                element: <AppLayout/>,
//                children: [
//                    { path: "/", element: <Home/> },
//                    { path: "/about", element: <About/> },
//                    { path: "/contact", element: <Contact/> }
//                ]
//              }
//
//         And inside AppLayout component:
//              function AppLayout(){
//                  return(
//                      <>
//                        <Header/>
//                        <Outlet/>   // --- Child Route Page Component will render here
//                        <Footer/>
//                      </>
//                  );
//              }
//
//         This way, we don't manually import and use <Header/> or <Footer/> inside every page component.
//         Routing takes care of it, and we get perfect reusability + clean structure.

// Note-6: After setting all routes using createBrowserRouter() and <RouterProvider/>,
//         if we navigate using normal <a href="..."> anchor tags, the page will reload.
//         But React is a **Single Page Application (SPA)**, so we do not want full page reloads.
//         A full reload will destroy the current React state, components re-mount again,
//         and the app feels like a normal website—not SPA.
//
//         To avoid reloads, React Router provides a special component: <Link>.
//         <Link to="/about">About</Link>
//
//         The <Link> component looks like an anchor tag, but works differently internally:
//         - It uses the History API (pushState, replaceState) behind the scenes.
//         - So instead of refreshing the page, it *changes the URL in the browser*
//           and updates the component tree accordingly — **without reloading**.
//
//         Example:
//              // ❌ This will reload the page (not recommended):
//              <a href="/about">About</a>
//
//              // ✅ This will navigate without reload (recommended):
//              <Link to="/about">About</Link>
//
//         So, always use <Link> for navigation inside React apps.
//         This makes the routing smooth and keeps the behaviour of SPA intact.



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
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/country',
        element: <CountryDetail />,
      },
    ],
  },
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)
