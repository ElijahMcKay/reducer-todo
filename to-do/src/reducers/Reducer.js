import React from 'react';

export const stateObj = [
    {
        item: 'Learn about reducers', 
        completed: false, 
        id: 3892987589,
    },
    {
        item: 'test', 
        completed: false, 
        id: 213450982435,
    }
]

export const reducerFunc = (state, action) => {
    switch (action.type) {
        case 'addItem':
            return {
                item: 'new item',
                completed: !state.completed,
                id: Date.now(),
            }; 
        default: 
            return state; 
        
    }
}