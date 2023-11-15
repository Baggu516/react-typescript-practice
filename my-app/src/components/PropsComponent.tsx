import React from 'react'
type PropsComponentProps={
    name:string,
    hi:number,
    person:{
        id:number,
        msg:string
    },
    j:{
        id:number,
        name:string
    }[]
    lst:number[]
}
const PropsComponent = ({name,hi,person,j,lst}:PropsComponentProps) => {
    console.log(lst)
  return (
    <div>PropsComponent {name} {hi} {person.id}
    {j.map((item,i)=>{
        return(
            <li>{item.id}</li>
        )
    })}
    </div>
  )
}

export default PropsComponent