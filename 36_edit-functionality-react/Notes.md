# Edit row Functionality in React 

## Summary Notes
### Concept Objective:- When the user right-clicks a row and selects the **Edit** option from the context menu, the data from that specific row should be populated into the form fields. The form button should then change its state from **Add** to **Save**. After the user updates the data and clicks **Save**, the modified row should be updated and reflected in the **expenses table**.
---

>**Note-1:** ***To implement the Edit row functionality first lift the state of `expense` into the app.jsx bcz we need this in our ExpenseTable Component to pass into the Context Menu or also in ExpenseForm, so we lift up and using concept of prop drilling we pass as prop to both these component and also take the `expenses` as prop in our ContextMenu to find out which row user want to edit***

> 1. a) ***Before find out the row in `expenses` we make one more state in app.jsx  i.e ` const [editingRowId, setEditingRowId] = useState('')` and pass editingERowId as prop to the ExpenseForm.jsx component to make sure then when user is edit the row or they add New row so according to this they change the button form `Add` to `save` and we take `setEditingRowID()` updater in the contextMenu  to ExpenseTable as prop form app.jsx then we update `editingRowId` by `rowId` on which user click***

```
<button className="add-btn">{editingRowId ? 'Save' : 'Add'}</button>
```

>**Note-2** ***After lifting up the state we need to find out the the row by using rowID in the `expenses` using `find()` method on it then using setExpense() update the state of `expense`***

```
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(   // find out the row on which user want to edit 
            (expense) => expense.id === rowId
          )
          setEditingRowId(rowId)                        // update the editingRowId state to change the button from Add to Save
          setExpense({ title, category, amount })       // Populate the editing row inside the form field 
          setMenuPosition({})                      // as usual update state of context menu to disappear it
        }}
      >
        Edit
      </div>

```
> **Note-3** ***Now after edit the row we add this into our expense table but till now the above logic we implement if we add the row then it duplicate in the table but we want to edit the row and then changes will update in our expense table so in order to do that we modify the logic inside the `ExpenseForm` component in the `handleSubmit()` so bases upon the state of `editingRowId` we update the our `setExpenses` state by putting if(editingRowID) check on it and if we update it then after editing the row and update the state of `setExpenses` then return early from there bcz if editing the row then we no need to  run the logic of `setExpenses` which we update while the of when user `Add` a new Row***      

```
  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validate(expense)
    if (Object.keys(validateResult).length) return

    if (editingRowId) {                 // Editing row logic 
      setExpenses((preState) =>
        preState.map((prevExpense) => {               // map() on it to changes update on existing row of expense table
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId }
          }
          return prevExpense
        })
      )
      setExpense({                                    // after save the row clear the form field 
        title: '',
        category: '',
        amount: '',
      })
      setEditingRowId('')                            // update the state to change the button from save to Add
      return                                        // and Early return while editing row No need to run below logic 
    }

    setExpenses((preState) => [               // update when User Add new Row in the expenseTable
      ...preState,
      { ...expense, id: crypto.randomUUID() },
    ])
    // Here bcz we know our UI change based upon state i.e one-way data binding  so here for reset form e.reset() not work so
    //  for that we empty our state variable
    setExpense({                                  
      title: '',
      category: '',
      amount: '',
    })
  }

  ```

>**Previous Bug issue resolve** : ***fix the reduce() method for total the amount of the expense table prev problem is that when we add a new row then a amount was concatenate into the current total amount bcz it treated as javascript string so we change the amount using parseInt() `const total = filteredData.reduce((accumulator, current) => accumulator + parseInt(current.amount), 0 )` and for check also put a one more validation rule in the the configArray add a regex patter for checking the No. must entered inside the amount Field***