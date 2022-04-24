import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../reducer/todo-reducer';

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})