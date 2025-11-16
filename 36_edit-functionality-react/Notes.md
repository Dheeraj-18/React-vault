# Custom context Menu

## Summary Notes
### Implement custom context menu using javascript event `OnContextMenu` by putting eventListener 


```
const [menuPosition, setMenuPosition] = useState({})
const [rowId, setRowId] = useState('')

```  


>**Note-1:**  
***To implement a custom context menu on table rows for edit and delete functionality, we use the `onContextMenu` event listener and call `e.preventDefault()` to disable the browser’s default context menu. The event object provides the click coordinates through `clientX` and `clientY`, which give the position from the left and top of the screen. We capture these values and store them in the `menuPosition` state using `setMenuPosition`. Then we pass this state as a prop to the `ContextMenu.jsx` component, where it is applied to the style of the custom context menu to render it exactly at the user’s click location.***


>**Note-2:**  
***After receiving `menuPosition` and `setMenuPosition` in our `ContextMenu` component, we render the context menu **only when valid coordinates exist**. This ensures the menu appears only when the user has right-clicked. We add a check like `if (!menuPosition.left) return ;` to return early and prevent the `ContextMenu` component from rendering when the user has not clicked on a table row.***

```
     <tr
         key={id}
         onContextMenu={(e) => {
           e.preventDefault()
           setMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 })
           setRowId(id)
         }}
      >
```              

>**Note-3:**  
***To implement the delete-row functionality, we take `setExpenses` state updater as a prop. We capture the unique `rowId` inside the `onContextMenu` callback when the context menu is triggered. Then, In the contextMenu component  inside `setExpenses`, we access the previous state (`prevState`) and filter out the row whose `id` not matches the selected `rowId`, which removes that row from the list.***


```
export default function ContextMenu({ menuPosition, setMenuPosition ,setExpenses ,rowId }) {
  if (!menuPosition.left) return
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          console.log('Editing')
          setMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState)=> prevState.filter((expense)=>expense.id != rowId))
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  )
}

```
