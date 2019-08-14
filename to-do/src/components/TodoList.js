import React from 'react';

function TodoList(props) {

    return (
        <div>
            <p>{props.state.item}</p>
            <button onClick={props.clearCompleted}>Click to Completed</button>
        </div>
    )
}

export default TodoList; 