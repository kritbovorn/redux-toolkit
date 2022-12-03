import { createSlice, PayloadAction , nanoid} from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    message: string;
    completed: boolean;
}

const todos = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo, any>) => {
                state.push(action.payload)
            },
            prepare: (todoMessage: string): { payload: Todo } => {
                return {
                    payload: {message: todoMessage, id: nanoid(), completed: false}
                }
            }
        },
        deleteTodo: (state, action: PayloadAction<Todo | string>) => state.filter((todo) => todo.id !== action.payload),
        completeTodo: (state, action: PayloadAction<string>) => {
            let completedTodo = state.find((todo) => todo.id === action.payload);
            completedTodo?.completed !== undefined ? completedTodo.completed = !completedTodo.completed : false;
            return state;
        },
        sort: (state) => state.sort((a, b) => a.message.localeCompare(b.message)),
    }
});

export default todos;