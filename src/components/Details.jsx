import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faListCheck, faListOl } from '@fortawesome/free-solid-svg-icons'


function Details({todos}){
    return (
        <div className="Details">
            <div className="task">
                <i>
                    <FontAwesomeIcon icon={faListCheck}/>
                </i>
                <p>COMPLETED TASK: <span>4</span></p>

            </div>
            <div className="task">
                <i>
                    <FontAwesomeIcon icon={faListOl}/>
                </i>
                <p>TOTAL TASK: <span>{todos.length}</span></p>

            </div>

        </div>
    )
}


export default Details;