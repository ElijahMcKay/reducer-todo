import React, { useReducer } from 'react';
import { reducerFunc, stateObj } from '../reducers/Reducer';

function Todo() {

    const [state, dispatch] = useReducer(reducerFunc, stateObj)

    console.log(state); 

    return (
        <div>
            <p>{state.id}</p>
        </div>
    )
}

export default Todo; 