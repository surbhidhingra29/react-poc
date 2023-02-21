import React from "react";
import './App.css';
import Dinosaurs from "./components/Animals/dinosaurs";
import Arcticfox from "./components/Animals/Arcticfox";
import Buffalo from "./components/Animals/Buffalo";
import Gorilla from "./components/Animals/Gorilla";
import Zebra from "./components/Animals/Zebra";
import Leopard from "./components/Animals/Leopard";
import Kingdom from "./components/kingdom";

function App() {
  return (
    <div className="App">
    <Dinosaurs/>
    <Arcticfox/>
    <Buffalo/>
    <Gorilla/>
    <Zebra/>
    <Leopard/>
    <Kingdom/>

    </div>
  );
}

export default App;
