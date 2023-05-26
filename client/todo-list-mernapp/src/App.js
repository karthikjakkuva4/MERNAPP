import {useState, useEffect} from 'react';
import './App.css';

function App() {
   
  //add new todo item to database

  return (
    <div className="App">
      <h1>ToDo LiSt</h1>
      <form className="form">
        <input type="text" placeholder='Add Todo Item' />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
          <div className="todo-item">
                  <p className="item-content">This is List 1</p>
                  <button className="update-item" >Update</button>
                  <button className="delete-item" >Delete</button>
          </div>
          <div className="todo-item">
                  <p className="item-content">This is List 2</p>
                  <button className="update-item" >Update</button>
                  <button className="delete-item" >Delete</button>
          </div>
          <div className="todo-item">
                  <p className="item-content">This is List 3</p>
                  <button className="update-item" >Update</button>
                  <button className="delete-item" >Delete</button>
          </div>
          <div className="todo-item">
                  <p className="item-content">This is List 4</p>
                  <button className="update-item" >Update</button>
                  <button className="delete-item" >Delete</button>
          </div>
      </div>
    </div>
  );
}

export default App;
