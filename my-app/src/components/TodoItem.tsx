import React from 'react'
type TodoItemprops={
    item:string,
    HandleDelete:(x:number)=>void,
    index:number,
    HandleEdit:(c:number)=>void,
    h:boolean,
    HandleUpdate:(c:number)=>void,
    s:number[],
    HandleDone:(f:number)=>void
}
const TodoItem = ({item,HandleDelete,index,HandleEdit,h,HandleUpdate,s,HandleDone}:TodoItemprops) => {
  return (
    <div className="Todo-Item">
        {!s.includes(index)?<p>{item}</p>:<p><s>{item}</s></p>}
        <div>
        <button onClick={(e)=>HandleDelete(index)}>Delete</button>
        {<button onClick={(e)=>HandleEdit(index)}>Edit</button>}
        <button onClick={()=>HandleDone(index)}>Done</button>
        </div>
       
        {/* <button>Done</button> */}
        {/* <ion-icon name="create-outline"></ion-icon> */}
    </div>
  )
}

export default TodoItem