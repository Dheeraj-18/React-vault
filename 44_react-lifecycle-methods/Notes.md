# React Component LifeCycle Methods in react 
![Lifecycle](https://lh3.googleusercontent.com/ROqIPGI01SQxqr2KubRSJn9V0_rt_xskaWQx_XPIFl9fGNayoAMCsU77fS39XCEsmpon2tGwALoO34Pbqe7cSCmz5mafQ25g-tQQrKSZuwIkG_yi1fRTHjfhL4iCb3PQJGM7XcQh_8CHWPs3b5nfm-cr4LFLlIHQ_0tqNyCDZHZdvve-Jr3ocdWdyYbtCA)

# <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="28" /> [React Lifecycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---
> ## **Note-1**  
> ***Whenever a React component appears in the browser, it goes through several phases. First, it gets **mounted** (added to the UI). Then, when the user interacts with it, the component may **update**. Later, when the user navigates away or the component is no longer needed, it gets **unmounted** (removed from the UI).***  
>  
> T***he entire journey — from mounting → updating → unmounting — is called the **lifecycle of a React component**.***
> ***During this entire lifecycle, React provides **lifecycle methods** that run at different phases.***

# Mounting

> ## **Note-2**
>
> ***In the Mounting phase, the `constructor()` runs first, then the `render()` function executes and returns the JSX. After that, React updates the DOM, and finally `componentDidMount()` is called.***  
>
> ***Inside `componentDidMount()`, we can safely access the DOM or perform operations like API calls. We cannot access the DOM inside the constructor or the render method — if we try something like `document.querySelector(#counter-title)` there, it will return `null`.***  
>
> ***Therefore, DOM access and API calls should be done inside `componentDidMount()`, and this method runs **only once** when the component mounts.***  
>
> ***In functional components, a `useEffect(()=>{} , [])` with an empty dependency array works similarly to `componentDidMount()` — it also runs **once after the component mounts**.***  
>
> ***Although the internal implementation of both approaches differs, in terms of the **component lifecycle**, they behave the same in class and functional components.***
> ***We cannot use **lifecycle methods** in functional components and we cannot use **hooks** in class components — but understanding class component lifecycle helps us relate them to hooks like `useEffect()` in functional components.***

# Updating
> ## **Note-3**
>
> ***After our component mounts in the browser, it enters the **Updating phase**. Whenever the user updates state, props, or anything inside the component, React triggers an update.***  
>
> ***During this update, the `render()` method runs again, React updates the DOM, and after that `componentDidUpdate()` is called.***  
>
> ***Inside `componentDidUpdate()`, we can access parameters like `prevProps` and `prevState` which allow us to compare the previous values with the current ones. (Read more in the React documentation.)***  
>
> ***In functional components, a `useEffect(() => {}, [count])` with a dependency array behaves similarly to `componentDidUpdate()` — whenever the `count` state variable changes, the code inside `useEffect` runs during the Updating phase.***  
>
> ***One difference is that `useEffect` with dependencies runs **both like `componentDidMount()` and `componentDidUpdate()`** — it runs **once after the initial mount** and also during **every update**.***
>
>***On the other hand, `componentDidUpdate()` runs **only during updates** and **not** on the initial mount.***  
>
> ***Even though their internal implementations differ, in terms of lifecycle behavior, both class components and functional components provide equivalent ways to handle updates.***

# UnMounting

> **Note-4**
>
> ***In the Unmounting phase of the React component lifecycle, the `componentWillUnmount()` method runs. When the user navigates to another page or the component is removed from the UI, React unmounts the component, and this method is executed.***  
>
> ***The purpose of this method is to perform **cleanup operations** — for example, clearing timers, removing event listeners, or cancelling subscriptions that may still be running in the background.***  
>
> ***In functional components, we achieve the same behavior using a **cleanup function**, which we return from inside the `useEffect` hook. This cleanup function works similarly to `componentWillUnmount()` and runs when the component is about to unmount.***


```
  useEffect(() => {
   const timerId =  setInterval(() => {
      console.log("hii New");
    }, 1000);

   return ()=>{
     clearInterval(timerId)
   }

  }, []);
```

### Declaimer: Here we use arrow function to update the state using this.setState inside the OnClick event handler but if we make them a Function declaration then it through error  i.e cannot read the property of null so here our this is null because in function declaration this behave differently 