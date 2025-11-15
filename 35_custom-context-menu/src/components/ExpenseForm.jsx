import React, { useEffect, useRef, useState } from 'react'
import Input from './input'
import Select from './Select'

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })

  const [errors, setErrors] = useState({})

  const validationConfig = {
    title: [
      { required: true, message: '*Please enter title' },
      { minLength: 5, message: 'Title should be at least 5 characters long' },
    ],
    category: [{ required: true, message: '*Please select a category' }],
    amount: [{ required: true, message: '*Please enter an amount' }],
  }

  const validate = (formData) => {
    const errorsData = {}

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message
          return true
        }
        if (rule.minLength && value.length < 5) {
          errorsData[key] = rule.message
          return true
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message
          return true
        }
      })
    })

    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validateResult = validate(expense)
    if (Object.keys(validateResult).length) return
    setExpenses((preState) => [
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        error={errors.category}
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        defaultOption="Select Category"
      />

      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <button className="add-btn">Add</button>
    </form>
  )
}
