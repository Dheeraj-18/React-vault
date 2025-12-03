# Higher order Components in React

## **Objective**

**A Higher-Order Component (HOC) is _not_ a built-in React feature — it’s a design _pattern_ that developers use to make logic reusable across components.**  
With HOCs, we extract reusable logic into a wrapper function and apply it to any component. HOCs were mainly used with **class components**, but they can technically be used with functional components as well.

However, **in modern React, Hooks make sharing logic much easier**, so most reusable behavior in functional components is accomplished through **custom Hooks**, not HOCs.

---

> ## **Note-1**
> ***In both the ClickCounter and HoverCounter components, the increment logic is exactly the same.***  
> ***To avoid duplicating this logic, we make it reusable by creating a **Higher-Order Component (HOC)**.***
>
> ***A **HOC is simply a function** (commonly named starting with `with`, for example `withCounter`) that:***
>
> - ***accepts another component as an argument (usually named `WrappedComponent`),***
> - ***adds or modifies some logic, and***
> - ***returns a new enhanced component.***
>
> ***The returned component's name convention is often written in **all caps**, such as `WITHCOUNTER`, to indicate it's the HOC-generated > component.***

>## **Note-2**
> ***When we create a HOC, it can pass its own props to the wrapped component.***  
> ***But we also need to include the props coming from the component that uses the HOC.***  
> ***To do this, we **spread the incoming props** (`{...this.props}`) into the wrapped component inside the HOC’s returned component.***
> ***This ensures that:***  
> - ***the HOC can add extra props, and***  
> - ***the original component still receives the props passed from outside.***
> ***To use a HOC, we simply **call it like a function** during export:***

```
import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      // console.log(this.props);
      return (
        <WrappedComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
```