# Edit row Functionality in React

## Summary Notes

#### Concept Objective:- When the user clicks the ascending or descending arrow buttons, the expenses table should sort the **amount** column accordingly using the javascript sort() method. Additionally, a **Clear** button should be provided which, when clicked, resets the table back to its **original (initial) state** without any sorting applied .

---

- **To Implement this functionality we have Two approach but second one was more efficient and in practice logic as well.-  `sort((a,b)=> a-b) it give a sorted array` it mutate the original array not return new array here in this if we sorted a array which each a is object so we do `a.amount - b.amount`**

> # **Approach-1** 

- **Note-1 :** **_we put a onClick event listener on both up and down arrow button and update the `setExpense()` state by receive the previous state in callback and after sort it update in setExpense state_**

```
   onClick={(e) => {
                    e.stopPropagation()
                    setExpenses((pervState) => pervState.sort((a, b) => a.amount - b.amount))
                  }}
```

- **Note-2:**  
   _This update doesn’t work because `sort()` mutates the original array. Since it changes the order of key-value pairs **in place**, the sorted array is still the same reference as the `prevState`. When React compares them, it sees **no change**, so the component does **not** re-render — even though the underlying array values are reordered._

  _Earlier, the component was re-rendering accidentally due to **event bubbling**. The parent `<table>` had an `onClick` that called `setMenuPosition`, which triggered a re-render. After adding an `if` check and using `e.stopPropagation()` to prevent bubbling, this accidental re-render no longer happens. That’s why now, when you click the ascending button, the component does **not** re-render, whereas previously it appeared to work only because of the bubbling-triggered re-render._

```
   onClick={() => {
          if (menuPosition.left) {
            setMenuPosition({})
          }
        }}
```

- **Final-Note and First Approach:**  
  _In this approach, we spread `...prevState` and return a new array. This lets React detect that it’s a **new reference**, so it triggers a re-render through `setExpense()`, and the sorting works as expected._

  _However, the downside is that we **lose the original (initial) expenses array**. Since the state is overwritten with the sorted version, we no longer have access to the initial unsorted data. This becomes a problem later—for example, when we want to **clear the sorting**—because we no longer have the original array to reset back to._

```
                  onClick={() => {
                    setExpenses((pervState) => [...pervState.sort((a, b) => a.amount - b.amount),])
                  }}
```

> # **Approach-2**

- **Note-1 :** **_We must know this before moving ahead for any efficient approach that when we sort on an array and we we do nothing then it return a same array mean we give a empty callback inside the sort(()=>{} then it return an same array without doing anything) also second thing that we give a initial value of state variable anything but there is a concept when we give initial value a callback then return value is become our initial value for our state variable i.e `const [initial,setInitial] = useState(()=> hello)` then console.log(initial) give -> hello so that two thing are must know for going into Deep in out Second approach_**

- **Step-1 :** **_Now we not use `setExpense` for sorting our data either we create a new State i.e `const[sortCallback,setSortCallback] =useState(()=> ()=>{})` then it return a an empty callback inside sortCallback state variable and use it while we filterData i.e _**


```
    onClick={()=>{
                    setSortCallback(()=>(a, b) => b.amount - a.amount)
                  }}
```                  


```
          {filteredData.sort(sortCallback).map(({ id, title, category, amount }) => {
            return (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault()
                  setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 })
                  setRowId(id)
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹{amount}</td>
              </tr>
            )
          })}
```

- **Step-2 :** ***Now We here we have option to implement the **clear-the-sorting** functionality without losing the original by just by setting the empty callback into sortCallback(()=>{}) it again give original initial state of expense because we earlier know that when we pass empty callback inside the sort(()=>{}) it return an same array without any changes***

```
 <th className='clear-sort' onClick={()=> setSortCallback(()=> ()=>{})}>Clear Sort</th>
 ```

- **Note-3:** *** we also implement sort by alphabetically like here by title by passing callback i.e***

```
                  onClick={() => {
                    setSortCallback(()=>(a, b) => b.title.localeCompare(a.title))
                  }}
```                  
