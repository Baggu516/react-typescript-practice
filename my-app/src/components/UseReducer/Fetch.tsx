import React, { Reducer } from 'react'
import { useState } from 'react'
import {Initial_state,PostReducer,action1,state1} from "./PostReducer"
import { useReducer } from 'react'
// type action1={
//     type:"F_S" | "F_success" | "E",
//     payload:string
// }
// type state1={
//     loading:boolean,
//     error:boolean,
//     post:any
// }
const a={
    F_S:"F_S",
    F_success:"F_success",
    E:"E"
}
const Fetch = () => {
    // const [isLoading,setIsLoding]=useState(false)
    // const [post,setPost]=useState({})
    // const [error,setError]=useState(false)
    
   
    const [state,dispatch]=useReducer<Reducer<state1, action1>>(PostReducer,Initial_state)
    const HandleFetch=()=>{
        dispatch({type:a.F_S})
        // setIsLoding(true)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{
           return  res.json()
           
        })
        .then((data)=>{
            // setPost(data)
            // setIsLoding(false)
            return dispatch({type:a.F_success,payload:data.status})
        }).
        catch(err=>{
            // setError(true)
            // setIsLoding(false)
            return dispatch({type:a.E})
        })

    }
    console.log(state.loading)
  return (
    <div>
        <button onClick={HandleFetch}>
        {state.loading?"waiting....":"fetch the post"}
        </button>
        <p>{state.post?.status}</p>
        {state.error&&"sommething went wrong......"}

    </div>
  )
}

export default Fetch