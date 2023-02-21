
import './App.css';
import StateClassComponent from './StatePropAssignment/StateClassComponent';
import PropsComponentFunctional from './StatePropAssignment/PropsComponentFunctional';
import StateComponentFunctional from './StatePropAssignment/StateComponentFunctional';

const listOfUsers = [
  {
    name: "Neil",
    age: 24,
    gender: "Male",
  },
  {
    name: "Nikk",
    age: 28,
    gender: "Female",
  },
]
function App() {
  return (
    <div className="App">
      <div><StateClassComponent /></div>
      <div><StateComponentFunctional /></div>
      <div><PropsComponentFunctional list={listOfUsers} /></div>
    </div>
  );
}

export default App;
