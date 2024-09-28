import TodoItem from "./TodoItem";

function TodoList({todos, setTodos}){
    return (
        <div className="TodoList">
            {todos.map((task)=>(
                <TodoItem key={task.name} item={task} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default TodoList;