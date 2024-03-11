import * as React from "react";
import { useState } from "react";
import "./App.css";
import { Country, State, City } from "country-state-city";
console.log(Country.getAllCountries());
console.log(State.getAllStates());
console.log(City.getAllCities());
// import React,{useState} from "react663"
import PropsComponent from "./components/PropsComponent";
// import Butoon from './components/Butoon';
import Todo from "./components/Todo";
function App() {
  const [c, setC] = useState<any>();

  type p = {
    id: number;
    msg: String;
  };
  const [person, setPerson] = useState<p>({
    id: 10,
    msg: "hello world",
  });
  let j = [
    { id: 1, name: "sai" },
    {
      id: 2,
      name: "cnmv",
    },
    {
      id: 3,
      name: "xcxd",
    },
  ];
  const [lst, setLst] = useState([2, 3, 4]);
  React.useEffect(() => {
    Country.getAllCountries().forEach((i) => {
      if (i.isoCode == "IN") {
        setC(i);
      }
    });
  }, []);
  console.log("dfvhjk", c);
  return (
    <div>
      {/* <h1>hello</h1> */}
      <Todo />
      {/* <PropsComponent name="hello" hi={10} person={person} j={j} lst={lst}/> */}
      {/* <Butoon HandleClick={(event,i) => console.log("hello world",i) } /> */}
    </div>
  );
}

export default App;
