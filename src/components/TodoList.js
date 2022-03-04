import React from "react";
//import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div  className = "todo-container">
            <ul  className = "todo-list">
                {/*javascript code*/}
                {filteredTodos.map(todo => (
                    <Todo 
                    todo = {todo}
                    todos = { todos } 
                    setTodos = {setTodos}
                    key = {todo.id} 
                    text = {todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;