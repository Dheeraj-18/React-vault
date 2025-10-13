//                               << summary Note: Event Handling in React >>

// Note-1: Here in React we add any event directly on any element by giving to JSX attribute and here we use Camel case to write the event 
//         like in js we onclick but here we use onClick = {callback} so , here is the syntax to add any event on react element.
// Note-2: React onChange event is fired on every input but in js script this event it 'input' event and onchange event is when we write any inside
//         input field and then click outside that inputfield than onchange event is fired but here in React it Different also here onInput event is
//         work same as onChange event. 
// Note-3: Here in React event object is not same as javascript event object react use there own way to do it when we console log event object 
//         it return a SyntheticBaseEvent like object but work same as we earlier use in js .
// Note-4 We cannot apply event directly on React component it's work because it's a function which return JSX  not a HTML element and we 
//        apply event on only HTML element so when we apply event on component it pass as a prop then we apply on that returning element

// Note-5: we write any name of the properties which we pass from component in prop bcz at the end it's just a argument which we pass to function

// Note-6: Re-render in React --> So when we click on right and left button it only update the variable but not render on browser bcz 
//                                initially when we call then function it render when we load our page first time but after change the 
//        value we re-render it manually 

// Note-7: In React component we cannot return two element in JSX . 
// 
// Note-8: You have already called createRoot() in your main entry file (like index.js or main.jsx).
// So when React Hot Reload (or your own re-import) executes this code inside AppleCounter.js, it tries to create another React root on the same <div id="root">.

// React 18+ doesn’t allow that anymore — it throws this error:

// “You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before.”

// ✅ The Correct Fix

// You must remove createRoot() from inside your component file.
// React should have only one root — declared in your index.js.       

// NOTE----> IN new version of React there in no allow do that re-rendering manually i.e once we call render in there root not call it again in 
//           there children we use another way i.e state in react  . refer - note.png


import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.querySelector('#root'))

root.render(<App/>)