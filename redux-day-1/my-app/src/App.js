import './App.css';
import React from 'react';
import AddUserForm from './components/employeeForm';
import UserList from './components/employees';

function App() {
  return (
    <div className='container py-4'>

      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;
