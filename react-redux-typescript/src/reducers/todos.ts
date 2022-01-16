import { Action } from './../actions/types';
import { Todo, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch(action.type) {
        case ActionTypes.fetchTodos: 
            return action.payload;
        default:
            return state;
    }
};