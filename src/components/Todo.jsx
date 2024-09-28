
import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Details from "./Details";

function Todo(){
    const [todos, setTodos] = useState([])
    return (
        <div className="Todo">

            <h1 class="theme">
                <span>Today's</span> <span>Task</span>
            </h1>


            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos} />
            <Details todos={todos}/>
        </div>
    )
}

export default Todo;