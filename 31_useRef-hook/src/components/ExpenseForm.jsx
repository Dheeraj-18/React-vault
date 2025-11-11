import React, { useEffect, useRef, useState } from 'react'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })

  const titleRef = useRef(null)
  const categoryRef = useRef(null)
  const amountRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // setExpenses((preState) => [
    //   ...preState,
    //   { ...expense, id: crypto.randomUUID() },
    // ])
    // Here bcz we know our UI change based upon state i.e one-way data binding  so here for reset form e.reset() not work so for that we empty our state variable
    // setExpense({
    //   title: '',
    //   category: '',
    //   amount: '',
    // })
    setExpenses((prevState) => [
      ...prevState,
      {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID(),
      },
    ])
  }

  useEffect(()=>{
    console.log('re-rendering');
  })

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // value={expense.title}
          // onChange={(e) =>
          //   setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          // }
          ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          // value={expense.category}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }))
          // }
          ref={categoryRef}
        >
          <option hidden>Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          // value={expense.amount}
          // onChange={(e) =>
          //   setExpense((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }))
          // }
          ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  )
}
