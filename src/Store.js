import { createStore, combineReducers } from 'redux';
import { reducerTodo } from './reducer/reducerTodo';

const reducer = combineReducers({
    todos: reducerTodo,
});

export default createStore(reducer);