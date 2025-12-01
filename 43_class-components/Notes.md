# Class Component vs Functional Component

## **Objective**

- ***Back in **2018–19**, React introduced functional components, but most developers still preferred **class components** because all major logic patterns were written using classes.***

- ***However, when **React Hooks** were released, they solved many limitations and confusion around class components. Hooks made component logic simpler, more reusable, and easier to manage.***

-  ***As a result, developers gradually shifted to **function-based components**. Today, most new React projects are built using **functional components**, and React itself recommends using them over class components for modern development.***

---

>## **Note-1**

***To create a class component in React, we use ES6 JavaScript classes. We extend our custom class from the `Component` class imported from React. This is done using the `extends` keyword.  
Inside the class, we define a `render()` method, and this method must return JSX.  
Once the class is defined, we can export it and use it anywhere in the application by importing it.***
*

>## **Note-2**

***To use props inside a class component, we don't need to accept them as parameters in the class.React automatically binds `this` to the entire component instance.***  
***When we log `this`, we can see the component object, and inside it there is a `props` property.***  
***We simply access `this.props` (or destructure from it) to use our props inside the class component.***

>## **Note-3**

***To use state inside a class component, we define a `constructor()` function.*** 
***When we create a constructor, React requires us to call `super()` first — this comes from JavaScript OOP rules, where the child class must call the parent class constructor before accessing `this`.***

***Inside the constructor, we initialize the state using `this.state`, assigning it an object that contains our state variables.***

***To update the state, React provides a built-in method called `setState()` on the component instance. We call it using `this.setState()` and pass an object with the updated state values.***

>## **Note-4**

***If we want to create multiple state variables in a class component, we simply add them inside the same `this.state` object.***  
***There is no need to create a new state object every time.***

***When updating state, we only pass the specific properties we want to change into `this.setState()`.***  
***Unlike functional components (where updating an object state replaces the entire object), in class components React **automatically merges** the new state with the existing state object.***

***React also **automatically preserves and slightly updates** other state variables that we did not include in `setState()`, instead of overwriting them.***  
***This silent merging behavior confused many developers, and it became another reason for shifting towards functional components and Hooks, where state updates behave more predictably.***

>## **Note-4**

***One more practice that when we make constructor(props) function must receive props and pass to super(props) if we want to access inside the constructor() function otherwise if we console props using this.props it give undefined in output***
- ***One more thing at the  time when class component is rendered first constructor() is run then render() function run*** 

### Inside the class Component the lifecycle methods are provided bcz there is not useEffect and other hook to work so their alternative must be present we will se in the lifecycle methods


```
import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {                           // Initialize state variable by using this.state 
      count: 0,
      count2: 0,
    };
    console.log("Constructor run first");
  }
  render() {
    // console.log(this);                        // this bind the the entire oldComponent Object 
    console.log("render run second");
    const { name } = this.props;                // Access props inside the classes using this keyword 
    const { count, count2 } = this.state;


    return (
      <>
        <h1 className="mt-4">{name}</h1>
        <div className="mt-6 flex items-center gap-5">
          <button className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: count + 1 })}
          >
            +
          </button>
          <h1>{count}</h1>
          <button className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: count - 1 })}
          >
            -
          </button>
        </div>

      </>
    );
  }
}

export default OldCounter;
```

 ---
### **Some reasons to move from Class Components to Functional Components**

- **Class components heavily rely on the `this` keyword**, which often confuses developers—especially beginners. Managing `this` binding, accessing `this.state`, and handling context inside class methods can become complicated.
- **As mentioned in earlier notes, `setState()` silently merges state objects**, preserving other state variables automatically. This implicit behavior was confusing for many developers, making it harder to predict state updates.
- Functional components with Hooks provide a **more predictable, cleaner, and easier-to-understand way** to manage state, side effects, and logic—without the complexity of classes or `this`.
