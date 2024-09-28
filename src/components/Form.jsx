import { useState } from "react";

function Form({todos, setTodos}){
    const [todo, setTodo] = useState({name:"", done:false});

    function handleSubmit(e){
        e.preventDefault();

        if (todo.name.length > 8){
            setTodos([...todos, todo]); 
        }

        else{
            alert(`${todo.name.length} < 8, ITEM MUST BE GREATER THAN 8 CHARACTER`)
        }

        // empties the todo state variable after inserting it into todos list
        setTodo({name:"",done:false});

    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input
                onChange={(e) => setTodo({name:e.target.value, done:false})}
                value={todo.name}
                 type="text" />

                <input type="submit" value="+" />
            </form>
            {console.log(todos)}
        </div>
    )
}

export default Form;