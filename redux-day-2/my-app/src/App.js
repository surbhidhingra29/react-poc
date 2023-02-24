import './App.css';
import React from 'react';
import List from './components/list';
import Form from './components/AddUser';
import AddUserForm from './components/EmployeeForm';
import UserList from './components/Employees';
import Counter from './components/counter';
import Post from './components/post';

function App() {
  return (
    <div className='container py-4'>
      <div className='mb-4 pb-3 shadow bg-light p-4'>
        <Form />
        <List />

      </div>
      <div className='mb-4 pb-3 border shadow p-4'>
        <AddUserForm />
        <UserList />
      </div>
      <div className='mb-4 pb-3  bg-light'>
        <Counter />
      </div>
      <div className='p-4 shadow bg-light'>
        <Post />
      </div>
    </div>
  );
}

export default App;
