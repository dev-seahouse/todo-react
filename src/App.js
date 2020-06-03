import React from 'react';
import './App.css';
import Input from './components/formElements/input/input.component';
import Button from './components/formElements/button/button.component';
import TodoList from './components/todoList/todoList.component';

function App() {
  return (
    <div className="App">
      <div>
        <form action="">
          <Input />
          <Button text={'Add '}></Button>
        </form>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
