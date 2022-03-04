import React, { useState, useEffect } from 'react';
import './App.css';
//importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() { 

  //States
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState("all");
  const [ filteredTodos, setFilteredTodos ] = useState([]);

 //only runs once at start
 useEffect(() => {
  getLocalTodos();
  }, []); 

  //Use Effect
  useEffect(() => {
    //console.log('hey');
    filterHandler();
    saveLocalTodos();

  }, [todos, status] );

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal)
    }
  };


  return (
    <div className="App">
     <header><h1>To-do List</h1></header>

     <Form 
     inputText = {inputText} 
     todos = { todos } 
     setTodos = { setTodos } 
     setInputText = { setInputText }
     setStatus = {setStatus}  />

     <TodoList 
     todos = { todos } 
     setTodos = {setTodos} 
     filteredTodos = { filteredTodos }
     />

    </div>
  );
}

export default App;
