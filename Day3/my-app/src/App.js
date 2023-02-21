import './App.css';
import LivingThingsAssignment1 from './Assignment1/components/LivingThingsFuncional';
import LivingThingsAssignment2 from './Assignment2/components/LivingThingsFunctional';
import LivingThingsAssignment3 from './Assignment3/components/LivingThingsClass';
import LivingThingsAssignment4 from './Assignment4/components/LivingThingsClass';

function App() {
  return (
    <div className="container">
      <h3><span>
        Assignment 1: </span>Using UseState Hook</h3>
      <LivingThingsAssignment1 />
     <h3><span >
        Assignment 2: </span>using PROPS</h3>
      <LivingThingsAssignment2 />
      <h3><span>
        Assignment3: </span>Class Componests with the help of State</h3>
      <LivingThingsAssignment3 />
      <h3><span>
        Assignment4: </span>Counter using Function as PROPS</h3>
      <LivingThingsAssignment4 />
    </div>
  )
}

export default App;
