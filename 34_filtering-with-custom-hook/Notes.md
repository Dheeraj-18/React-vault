# Filter Data Using Custom Hooks 

## Summary Notes
### useFIlter()
>**Note-1:** ***We build a reusable custom hook to implement filter functionality. This hook is not limited to a specific type of filter — it can filter data based on any parameter. To achieve this flexibility, we pass a callback function like `(data) => data.category` Whatever value the callback returns becomes the basis for generating filteredData. This makes the hook fully dynamic and reusable across multiple filtering scenarios.`const [filteredData, setQuery] = useFilter(expenses, (data) => data.category)`and taking a query for filter by putting the eventListener on select element `onChange={(e) => setQuery(e.target.value.toLowerCase())}`***

```
export function useFilter(dataList, callback) {
  const [query, setQuery] = useState('')


  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  )
  return [filteredData, setQuery]
}

```

>**Note-2:** ***for total prices in the expenseTable we use the array method i.e reduce()***

```
  const total = filteredData.reduce( (accumulator, current) => accumulator + current.amount )
 ``` 