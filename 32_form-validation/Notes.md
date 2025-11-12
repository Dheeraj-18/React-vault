# From validation

### Summary Notes

---

>**Note-1:** **_First make our code optimize and reusable as we on every input element we put a same onChange handler for update the state variable so make reusable by separate function `handleChange(e)` and using destructuring change the value by value attribute, and for every individual input field access by there name attribute that why make sure while change there state value name attribute must have on element to selecting each one of then individually_**

```
  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
```

>**Note-2:** **_So, apply validation on our from so we check it inside our submit form handler function i.e `handleSubmit()` before we update our `expenses` state we writing our `validate()` function and call it `const validateResult = validate(expense)` by passing our input controlled state i.e `expense` so it check on it and showing errors based upon there empty state, for error we make a separate state ` const [errors, setErrors] = useState({})` and set it based upon state of input field inside the `validate()` function_**

```

const validate = (formData) => {
const errorsData = {}
if (!formData.title) {
errorsData.title = '*Title is required'
}
if (!formData.category) {
errorsData.category = '*category is required'
}
if (!formData.amount) {
errorsData.amount = '\*amount is required'
}
setErrors(errorsData)
return errorsData
}

```

>**Note-3** **_But remember that our useState() hook behavior i.e inside `handlerSubmit()` till then this complete no other state is update even we call our `validate()` function and inside this handleSubmit() function we update our `expenses` state that must be update after check so we must return our state variable object of errors form validate() function then we take it in our `handleSubmit()` function and then update our `expenses` state and show error bases upon there emptiness_**

>**Note-4** **_we check the error state of input field then update our date by update the `expenses` state and if there there errors present then early return_**

```
const validateResult = validate(expense)
if (Object.keys(validateResult).length) return

```

## Why need of Custom forms field

### 🧠 Handling Multiple Input Validations in React Forms

When a form has many input fields, writing separate validation logic for each one—like checking for empty fields, length, or format—becomes repetitive and hard to maintain. To simplify this, we can create a **custom input component** that manages validation, error handling, and reusability.

#### ⚙️ What the Custom Input Component Should Do
- **Validation Logic**: Check for required fields, validate length, and verify format (e.g., email, password strength, etc.).  
- **Error Handling**: Display clear error messages and highlight invalid inputs.  
- **State Management**: Handle `value` and `error` states internally, and pass valid data to the parent form.  
- **Reusability**: Accept props like `type`, `label`, and `validationRules` to work across different forms.

#### 🚀 Benefits
- **Consistent** validation across all inputs.  
- **Reusable** and scalable for large forms.  
- **Clean and maintainable** code with centralized validation logic.

>  ***Using a custom input component helps avoid repetitive logic and keeps forms simple, modular, and easier to maintain.***

