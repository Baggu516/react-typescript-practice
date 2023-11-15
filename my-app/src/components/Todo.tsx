import React,{useState} from 'react'
import TodoItem from './TodoItem'
const Todo = () => {
    const [a,setA]=useState<string>("")
    const [arr,setArr]=useState<string[]>([])
    const HandleClick=()=>{
        let t:string[]=[...arr,a]
        console.log(t)
        setArr(t)

    }
    console.log("arr",arr)
  return (
    <div className="container">
        <input type="text" onChange={(e)=>setA(e.target.value)} value={a}/>
        <button  onClick={HandleClick}>Add</button>
        {arr&&arr.map((item,i)=>{
            return(
                 <TodoItem item={item} key={i} />
            )
            
        })}
    </div>
  )
}

export default Todo