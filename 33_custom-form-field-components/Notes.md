# Custom Form Fields in React & Advance Form Validation

## Summary Notes

**Note-1:** **_Custom Input field Component_**

```
export default function Input({ label, id, name, value, onChange, error}) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="errors">{error}</p>
    </div>
  )
}
```

**Note-2:** **_Custom Select filed component ,for each options we not hardcode is rather then pass array as prop `options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}` form the component `map()` on it_**

```
export default function Select({label,id,name,value,onChange,error,options,defaultOption,}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && <option hidden>{defaultOption}</option>}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="errors">{error}</p>
    </div>
  )
}

```

---

## Implement Advance from validation

**Note-1:** **_Earlier we for each field of form we write logic saperately check each by if condition but this repetitive logic so To improve it we Make a validationConfig Object of array or each field rule for email rule we use regex pattern to check the validity of email regex pattern that types is Object and on that object there is method called test() so with the use of that we check the validity of email_**

```
 const validationConfig = {
    title: [
      { required: true, message: '*Please enter title' },
      { minLength: 5, message: 'Title should be at least 5 characters long' },
    ],
    category: [{ required: true, message: '*Please select a category' }],
    amount: [{ required: true, message: '*Please enter an amount' }],
    email: [
      { required: true, message: '*Please enter an e-mail' },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please enter a valid email',
      },
    ],
  }
```

**Note-2:** **_Here in the `validate` function now no need to check on each field from rather then taking fromDate i.e expense state variable object then destructuring it by taking there key and value that is same as our validationConfig object keys which help to access there values by run foreach method on it then using `some()` method for nested validation checking for multiple rule it's working like logical or operator_**

```
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
```
