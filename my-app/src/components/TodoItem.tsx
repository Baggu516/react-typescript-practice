import React from 'react'
type TodoItemprops={
    item:string
}
const TodoItem = ({item}:TodoItemprops) => {
  return (
    <div className="Todo-Item">
        <p>{item}</p>
        {/* <ion-icon name="create-outline"></ion-icon> */}
    </div>
  )
}

export default TodoItem