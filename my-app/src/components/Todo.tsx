import React,{useState} from 'react'
import TodoItem from './TodoItem'
const Todo = () => {
    const [a,setA]=useState<string>("")
    const [arr,setArr]=useState<string[]>([])
    const [h,setH]=useState<boolean>(true)
    const [index,setIndex]=useState<number>(0)
    const [s,setS]=useState<number[]>([])
    const HandleClick=()=>{
        let t:string[]=[...arr,a]
        console.log(t)
        setArr(t)
        setA("")

    }
    const HandleDelete=(x:number)=>{
       let t:string[]=[...arr]
       t.splice(x,1)
       setArr(t)
    }
    // .............edit......
    const HandleEdit=(c:number)=>{
      setA(arr[c])
      setH(false)
      setIndex(c)


    }
    // ....
    const HandleUpdate=()=>{
      let t:string[]=[...arr]
      t.splice(index,1,a)
      setArr(t)
      setH(true)
      setA("")
    }
    // ............
    const HandleDone=(y:number)=>{
        setS([...s,y])
    }
    console.log("arr",arr)
  return (
    <div className="container">
      <h1>Todo List</h1>
        <input type="text" onChange={(e)=>setA(e.target.value)} value={a} placeholder='type....'/>
        {(h==true)?<button className='btn' onClick={HandleClick}>Add</button>:<button className='btn' onClick={HandleUpdate}>Update</button>}
        {arr&&arr.map((item,i)=>{
            return(
                 <TodoItem s={s} HandleDone={HandleDone} item={item} key={i} index={i} HandleDelete={HandleDelete} HandleEdit={HandleEdit} h={h} HandleUpdate={HandleUpdate}/>
            )
            
        })}
    </div>
  )
}

export default Todo