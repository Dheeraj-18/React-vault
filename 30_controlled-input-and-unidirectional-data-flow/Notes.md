# Controlled input and one-way Data Binding , unidirectional data-flow 
## Data governs UI by unidirectional-data-flow `Data -> UI`

**Note-1:**  
>***Earlier, we learned how to extract data from forms using `new FormData(e.target)`, but in React we don’t usually use this because React handles input values differently. When we give an input a `value` attribute in React, the input becomes “controlled” by React, which causes the input to freeze and we cannot type unless we update the value through state. This happens because React listens to changes at the root and controls the DOM, unlike normal HTML where the browser directly updates input values. So, to make the input editable, we create a state variable (like `const[title,setTitle] = useState('')`) and update it using an `onChange` event (`onChange={(e) => setTitle(e.target.value)}`). This causes the component to re-render on every keystroke, but React only updates the specific input in the DOM, so performance remains efficient.***

**Note-2:**  
>***In React, we use `one-way data binding`, which means the UI is always updated based on changes in the state (data → UI). If we change the state, the UI automatically re-renders to reflect that change. Unlike frameworks like Angular or Vue, which also allow `two-way binding` (UI → data), React does not directly update the state from UI changes. Instead, we update the state manually using event handlers like `onChange`. This one-way flow of data is also called **Unidirectional Data Flow**, and by applying this concept, we create `controlled inputs`, where the value of an input field is fully controlled by React state.***

**Note-3:**
>***Now we use this way to extract data from form using the concept of **one-way data binding** and controlled inputs because here data(state) govern UI so there here when we reset the form using e.target.reset() it not works so for then we manually empty our state variable***

**Note-4:**
>***So either we make state for every input or we make combine then by making object like that and easily reset then by making then empty object***



 
```export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setExpenses((preState) => [
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }
  }
```
---
| Topic | lecture | subtopic |
|-----|----|------|
| React | 33 | form in react |



