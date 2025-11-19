# Local storage in React using Custom Hook -  useLocalStorage()

## Summary Notes

#### Concept Objective:– To implement localStorage in React, we create a custom hook called `useLocalStorage()`, and its working is similar to `useState()`. Wherever we normally use `useState()`, we instead use `useLocalStorage()`, passing a key and initial data, and it returns both the stored data and an update function. This way, we design the custom hook so that it stores the value in localStorage while also behaving like a regular state variable, making it an amazing, robust, and reusable custom hook.
---
# Challenge-1
>**Note-1 :**  
***To implement a custom hook that stores data in `localStorage` and also works like a local state variable inside the component, we face two main challenges.  
First, we need to create a state inside the `useLocalStorage()` hook so that we can return this state variable to the component using the hook.  
Second, we must write a robust logic to store and sync data with `localStorage`.  
Just like `useState()`, our `useLocalStorage()` hook should return both the stored value and an `updateLocalStorage()` function. Whenever the user updates the data, this function should update the value in `localStorage` and also update the state maintained inside the hook.***

>**Note-2 :**  
***After creating the state variable `data`, we initialize it with our `initialData` using `useState()`, and we update this value whenever the user triggers the `updateLocalStorage` function returned by our `useLocalStorage()` hook.  
However, we must ensure that if data already exists in `localStorage`, we should retrieve it using `getItem` and set it into our `data` state using `setData`.  
If no data exists in `localStorage`, then we store the `initialData` using `setItem` and use that as our initial state.***

>**Note-3:**  
***If we run this logic directly inside the hook using an `if–else` check, it will cause infinite re-rendering. This happens because after `updateLocalStorage` updates the value, `existingData` becomes true, and then calling `setData(existingData)` triggers another re-render. During the next render, `existingData` is still true, so React re-renders again, and this loop continues indefinitely, resulting in an error.  
To avoid this, we wrap this logic inside a `useEffect()` hook with an empty dependency array. This ensures that the logic runs only once—on the initial render of the component—and does not run again during future re-renders triggered by state updates.***

# challenge-2

>**Note-4:**  
***Now comes the second challenge: handling the type of `newData` that the user passes to the `updateLocalStorage` function. The `useState()` hook allows users to update state with any value—including a function.  
Sometimes the update depends on the previous state, so the user may write something like:  
`setLocalData((prevState) => [...prevState, 4, 5, 6])`.  
But when this value reaches our `useLocalStorage` hook, if we directly call `JSON.stringify(newData)` and `newData` happens to be a function (because it was passed as a callback), then `JSON.stringify(function)` becomes `undefined`.  
If this `undefined` is stored in localStorage and later retrieved using `getItem`, then `JSON.parse(undefined)` throws an error because `undefined` is **not valid JSON**.  
Values like `true`, `false`, or `null` are valid JSON, but `undefined` is not. Therefore, we must handle this case carefully before storing data in `localStorage`.***


>**Note-5:**  
***So for handling the typeof newData if we have the newData type is function we must call it first. `JSON.stringify(newData())` and we pass the value form there we receive as prevState and update it from callback like we implement in our useLocalStorage hook and if newData type is normal data like array object etc. we normally setItem in localStorage***





```
export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData)   // Note-1: create state and also return this data 

  useEffect(() => {                         // Note-3 To avoid infinite re-renders
    const existingData = JSON.parse(localStorage.getItem(key))
    if (existingData) {
      setData(existingData)
    } else {
      localStorage.setItem(key, JSON.stringify(initialData))
    }
  }, [])

  const updateLocalStorage = (newData) => {
    if (typeof newData === 'function') {             // Challenge-2: refer-Note- 4 and 5 
      localStorage.setItem(key, JSON.stringify(newData(data)))
    } else {
      localStorage.setItem(key, JSON.stringify(newData))     // refer:Note 4 and 5
    }
    setData(newData)            // after SetItem in localStorage update the state of data by newData
  }

  return [data, updateLocalStorage]    // return a local state variable and a update function with it
}

```
