import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'todo-list',
    initialState: {
        todoItems: [],
    },
    reducers: {
        addItemInList: (state, action) => {
            state.todoItems = [...state.todoItems, action.payload]
        },
        removeItemInList: (state, action) => {
            state.todoItems.splice(action.payload, 1);
        },
        updateItemInList: (state, action) => {
            state.todoItems.splice(action.payload.index, 1, action.payload.item)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItemInList, removeItemInList, updateItemInList } = counterSlice.actions

export default counterSlice.reducer