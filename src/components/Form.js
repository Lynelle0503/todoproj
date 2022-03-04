import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, status, setStatus }) =>{

    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random()*Math.random() }
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input 
            value = {inputText} 
            onChange = {inputTextHandler} 
            type = "text"  
            className = "todo-input"/>

            <button 
            onClick = {submitTodoHandler} 
            className = "todo-button" 
            type = "submit">
                <i  className = "fas fa-plus-square"></i>
            </button>
            <div className = "select">
                <select onChange = { statusHandler } name = "todos"  className = "filter-todo">
                    <option value = "all">All Tasks</option>
                    <option value = "completed">Completed Tasks</option>
                    <option value = "incompleted">Incomplete Tasks</option>
                </select>
            </div>
        </form>
    );
}

export default Form;