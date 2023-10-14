import React from "react";
import "./style.css";
import {useState} from "react";

export default function App() {
  const [todo, setTodo] = useState ('')
  const [todos, setTodos] = useState ([
  ])

  const handleChange = (event) =>{
setTodo(event.target.value)
  }
  const addTodo = () =>{
setTodos([...todos, {name:todo}] )
// We are setting Todo to be an empty string so whatever is in the input removes after adding todo
setTodo('')
  }
  const addTodoFunction = () => addTodo();
  return (
    <div>
      <div>
        {/* The use of the value is to make sure that when a todo is added it doesnt show on the input anymore (Data Binding) give us a controlled input */}
        <input type = "text" value = {todo} onChange={handleChange} />
        <button onClick={addTodoFunction}>Add Todos</button>
      </div>
      <div>{todos.map((todo) => (
        <div><div  key={indexedDB}>{todo.name}</div>
        <button>X</button></div>
      ))} </div>
      
    </div>
  );
}
