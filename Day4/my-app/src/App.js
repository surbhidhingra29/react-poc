import "./App.css";
import React from "react";
import ClassComponent from "./Assignment/Components/ClassComponent";
import FunctionalComponent from "./Assignment/Components/FunctionalComponent";
import CounterComponent from "./Assignment/Components/CounterComponentClass";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div style={{marginTop :"10px"}}><CounterComponent /></div>
      <div style={{marginTop :"10px"}}><ClassComponent /></div>
      <div style={{marginTop :"10px"}}><FunctionalComponent /></div>
    </div>
  );
}

export default App;
