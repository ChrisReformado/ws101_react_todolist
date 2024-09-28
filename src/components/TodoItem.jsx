import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem({item, todos, setTodos}){
    function handleDelete(item){
        console.log("DELETED ITEM",item.name)
        setTodos(
            todos.filter((todo)=>todo !== item)
        )

    }


    function handleClick(name){
        todos.map((item)=>item.name === name? {...item, done: !item.done} : item)
        console.log(`${item.name} is CLICKED ---- ${item.name} is ${item.done}`)

        
    }


    



    return (
        <div className="TodoItem">
            <div class="todo-title">
                <i>
                    <FontAwesomeIcon className='fontIcon' icon={faThumbTack}/>
                </i>
                <h3 onClick={()=>handleClick(item)}>{item.name}</h3>	
            </div>
            <button onClick={()=>handleDelete(item)}>
                <i>
                    <FontAwesomeIcon icon={faTrash}/>
                </i>
                <i class="fa-solid fa-list-ol"></i>
            </button>
        </div>
    )
}

export default TodoItem