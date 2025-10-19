//                                   <<<<<  State vs props in React    >>>>>>

// Note-1: State is a local variable of Functional component and it's a mutable we can change that value inside the component
//         using setState and if we have some value which we know we change it frequently we make them as state and whenever
//         we update the state value component is re-rendered

// Note-2: In React, props (short for properties) are immutable input parameters passed from a parent component to a child component.
//         They serve as a mechanism for component communication and enable dynamic rendering by allowing components to receive
//         data and configuration from their parent.
// In simple terms:
// Props are read-only data used to configure a component’s behavior or appearance.

// Technically:
// Props are passed as an object to the component function.
// When React renders a component, it supplies all the attributes written in JSX as a single object called props.
// A component must not modify its own props because they are controlled by the parent.
// Although we able to modify the value of prop the pass from parent component but as per React pattern or standard props are
// immutable and only for ready only

// Note-3: There is a possibility that sates of parent component become props of there children So props can be a sate also sometime.
//         and there is also possible we use state and props both in our component there is no Hard and fast rule we only use state
//         in our component or use only props in our component

// Note-4
// Props are controlled by the parent component, while state is managed within the component itself.
// Both props and state can cause a component to re-render when their values change.

import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(<App />)
