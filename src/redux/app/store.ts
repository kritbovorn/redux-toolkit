import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "../features/todo/todos_slice";

const rootReducer = combineReducers({
    todos: todos.reducer
})

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;