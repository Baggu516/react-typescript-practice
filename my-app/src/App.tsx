import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import PropsComponent from './components/PropsComponent';
// import Butoon from './components/Butoon';
import Todo from './components/Todo';
function App() {
  const [person,setPerson]=useState({
    id:10,
    msg:"hello world"
  })
  let j=[
    {id:1,
    name:"sai"},
    {
      id:2,
      name:"cnmv"
    },
    {
      id:3,
      name:"xcxd"
    }
  ]
  const [lst,setLst]=useState([2,3,4])
  return (
    <div>
      {/* <h1>hello</h1> */}
      <Todo/>
      {/* <PropsComponent name="hello" hi={10} person={person} j={j} lst={lst}/> */}
      {/* <Butoon HandleClick={(event,i) => console.log("hello world",i) } /> */}
  
    </div>
  );
}

export default App;
