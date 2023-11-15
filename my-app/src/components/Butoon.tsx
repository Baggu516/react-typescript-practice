import React from 'react'
type Buttonprops={
    HandleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
    value:string,
    HandleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
const Butoon = ({ HandleClick ,value,}:Buttonprops) => {
    const Handle=(e:React.ChangeEvent<HTMLInputElement>)=>{
          console.log("onchangeeeeeeeeeeeeee")
    }
  return (
    <div>
        {/* <input type="text" value={ss} onChange={Handle}/> */}
        <button onClick={(event)=>HandleClick(event,9)}>click</button>
    </div>
  )
}

export default Butoon