import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTodo from './AddTodo';
import HomePage from './HomePage';
import { useState , useEffect, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [toDoLists, setToDoLists] = useState(JSON.parse(localStorage.getItem('data-key')));

  const setAndSaveTodos = (newToDoLists) => {
    setToDoLists(newToDoLists);
    localStorage.setItem('data-key', JSON.stringify(newToDoLists))
  }

  const AddToDoList = (newToDoList) => {
    let newToDoLists = {...toDoLists};
    let tempKey = (newToDoList.name)
    newToDoLists[tempKey] = newToDoList;
    setAndSaveTodos(newToDoLists)
  }


  return (
    <>  
      <Routes>
          <Route path="/" element={
            <>
              <NavBar name="Home" links={Object.keys(toDoLists)}/>
              <HomePage />
            </>
          }/>
          {Object.keys(toDoLists).map(item => {
            return (
              <Route path={item} element={
                <>
                  <NavBar name="Home" links={Object.keys(toDoLists)}/>
                  <ToDoList jsondata={toDoLists} curritem={item} setjsondata={setAndSaveTodos}/>
                </>
              } />
            )}
            )
          }
          <Route path="/addtodo" element={
            <>
              <NavBar name="New to-do list" links={Object.keys(toDoLists)}/>
              <AddTodo AddToDoList={AddToDoList} jsondata={toDoLists}/>
            </>
          } />
          <Route path="*" element={
              <>
                <NavBar name="Home" links={Object.keys(toDoLists)}/>
                <HomePage />
              </>
          } />
      </Routes>
  </>
  );
}

export default App;
