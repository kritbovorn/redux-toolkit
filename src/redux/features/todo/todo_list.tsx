import React from "react";
import { ScrollView, Text ,View} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../app/store";
import TodoItem from "./todo_item";
import todoSlice, { Todo } from '../todo/todos_slice';

const TodoList = () => {
    const disPatch: AppDispatch = useDispatch();
    const todos = useSelector((state: AppState) => state.todos)
    const tickCheck = (id: string) => {
        disPatch(todoSlice.actions.completeTodo(id));
    }
    const tickDelete = (id: string) => {
        disPatch(todoSlice.actions.deleteTodo(id));
    }
  return (  
     <ScrollView style={{flex: 1}}>
        {todos.map((todo) => <TodoItem key={todo.id} title={todo.message} check={todo.completed} onPressCheck={() => tickCheck(todo.id)} onPressTrash={() => tickDelete(todo.id)} />)}
     </ScrollView>
  );
}

export default TodoList;



