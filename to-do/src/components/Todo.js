import React, { useReducer } from 'react';
import { reducerFunc, stateObj } from '../reducers/Reducer';
import TodoList from '../components/TodoList'; 

function Todo() {

    const [state, dispatch] = useReducer(reducerFunc, stateObj)

    console.log(state); 
      
      const clearCompleted = () => {
         dispatch({
          completed: state.filter(item => !item.completed)
        })
      }

    return (
        <div>
            <h1>To-do List</h1>
            <form >
                <input />
            </form>
            <button onClick={() => dispatch({type: 'addItem'})}>Submit Item</button>
            {state.map((item) => {
               return ( <TodoList state={item} clearCompleted={clearCompleted}/> )
            })}
        </div>
    )

}

export default Todo; 