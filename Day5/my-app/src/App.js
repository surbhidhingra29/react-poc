
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import LivingThingsAssignment1 from './Assignment1/components/LivingThingsFunctional';
import LivingThingsAssignment2 from './Assignment2/components/LivingThingsClass';

// For Assignment 1st Functional components with useState hook
import Users from './Assignment1/components/Users';
import Birds from './Assignment1/components/Birds';
import Employees from './Assignment1/components/Employees';
import Animals from './Assignment1/components/Animals';

// For Assignment 2nd Statefull Class components
import UsersC from './Assignment2/components/UsersC';
import BirdsC from './Assignment2/components/BirdsC';
import EmployeesC from './Assignment2/components/EmployeesC';
import AnimalsC from './Assignment2/components/AnimalsC';

// API call for Photo and Employees date
import Button from "react-bootstrap/Button";
import PhotosC from './Assignment3/components/Photos';
import EmployeesClass from './Assignment3/components/Employees';

function App() {
  return (
    <div className="container">

      {/* For Assignment 1st Functional components with useState hook */}
      <div className="row mb-2">
        <h4 className="mb-2 txt-hd">
          Assignment 1: Fuctional Components with UseState Hook rendering using REACT ROUTER DOM </h4>
      </div>
      <div className="row bdr">
        <div className="col-2 ">
          <LivingThingsAssignment1 />
        </div>
        <div className="col-10 ">
          <Routes>
            <Route path="/users" element={<Users></Users>}></Route>
            <Route path="/birds" element={<Birds></Birds>}></Route>
            <Route path="/employees" element={<Employees></Employees>}></Route>
            <Route path="/animals" element={<Animals></Animals>}></Route>
          </Routes>
        </div>
      </div>

      {/* Routing For Assignment 2nd Statefull Class components */}
      <div className="row mb-2 mt-5">
        <h4 className="mb-4 txt-hd">
          Assignment 2: Statefull Class Components with State rendering using REACT ROUTER DOM </h4>
      </div>
      <div className="row bdr">
        <div className="col-2 ">
          <LivingThingsAssignment2 />
        </div>
        <div className="col-10 ">
          <Routes>
            <Route path="/usersC" element={<UsersC></UsersC>}></Route>
            <Route path="/birdsc" element={<BirdsC></BirdsC>}></Route>
            <Route path="/employeesc" element={<EmployeesC></EmployeesC>}></Route>
            <Route path="/animalsc" element={<AnimalsC></AnimalsC>}></Route>
          </Routes>
        </div>
      </div>

{/* Routing For List of Photos and Employees details */}
<h4 className="mb-2 mt-3 txt-hd">
        Assignment 3:API call for Photos and Employees with Routing</h4>

      <div className="row">

           <Link to="photoslist"> <Button className="mb-2 mt-2 btnwd">
              Photos
            </Button></Link>

         <br/>
           <Link to="employeeslist"> <Button className="mb-2 mt-2 btnwd">
              Employees
            </Button></Link>


        <div className="row ">
          <Routes>
            <Route path="/photoslist" element={<PhotosC />}></Route>
            <Route path="/employeeslist" element={<EmployeesClass />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
