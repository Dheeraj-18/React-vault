//                                   <<<<<    How useState works in React   >>>>>>

// >>  Okk let fine, we understand step by step

// Note-1: useState internally maintains an array (often called the "state array") 
//         where all state variable values are stored. 
//         Whenever the state updater function (setState) is called, 
//         the corresponding value in this array gets updated.

// Note-2: It's important to understand that inside a callback function 
//         (like the one passed to an onClick event), React executes 
//         all lines of that function first. 
//         After the callback finishes execution, React schedules a re-render 
//         of the component with the updated state value.

// Note-3: So, when we call the state updater function inside a callback, 
//         React updates the value in its internal state array. 
//         After the callback completes, React checks the updated state array, 
//         takes the latest values, and re-renders the component. 
//         That’s why, on every re-render, a new state variable is initialized 
//         with the most recent value from React’s internal state array.

// Note-4: that is the reason the value of state variable is same inside the callback so even when we update twice and thrice the 
//         count value is still same which will take initially bcz only after all the line of callback is executed a updated state value 
//         is taken by useState and again re-rendered 
//                  eg.      <button
//                              onClick={() => {
//                                 setCount(count + 1)
//                                 setCount(count + 1)      
//                                 setCount(count + 1)
//                                 }}
//                             >

// Note-5: For updating the state value which update is depend upon previous value React provide a another way to do that like 
//         update state variable multiple time and update is depend upon previous value . for that we pass a callback fun to the 
//         setState function and  receive a previousState value as parameter and update it and return,  it update on the states array 
//         not state variable so we doing this multiple time and after the updated and callback execution is finished 
//         the new updated state value is re-render and the last update we done state variable is set with the value only 
//          for eg. 
//                        <button
//                           onClick={() => {
//                             console.log(count);   // count value is zero 
//                             setCount((previousState) => previousState + 1)
//                             setCount((previousState) => previousState + 1)
//                             setCount((previousState) => previousState + 1)
//                             setName('Dheeraj Saraswat')
//                             console.log(count);  // count value is zero 
//                           }}
//                         ></button>
// 

// Note-6: react behind the seen call itself that callback which we pass inside the setState function (i.e setCount) and update
//         values in states array 

// Note-7: It might seem like setState is asynchronous because after the callback execution done then new updated value is render 
//         But no setState is pure synchronous it update value inside states array not the actual state variable value but after 
//         the callback execution is finished state variable value is updated 

// Note: useState updates are not synchronous. They behave like asynchronous, but technically it’s not exactly “async”, it’s just batched
//       and scheduled by React.


import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector('#root'))

root.render(<App root={root}/>)