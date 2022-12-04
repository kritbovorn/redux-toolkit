# React redux toolkit 

## Install : React Native 

`npx react-native init <your project name> --template react-native-template-typescript`  

## Install : Redux Toolkit, React-Redux

`npm install @reduxjs/toolkit react-redux`  

---  

# Local :  

## src/redux/app/store.ts  
```typescript  
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
```

## src/redux/features/todo/todos_slice.ts

```typescript 
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
```  
# Usage  

## App.tsx  

```typescript  
import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, TouchableHighlight, View } from 'react-native';
import { Provider } from "react-redux";
import InputComponent from "./src/component/input/input_component";
import TextBody from "./src/components/text/text_body";
import TextHeadline2 from "./src/components/text/text_headline2";
import TextTitle from "./src/components/text/text_title";
import { store } from "./src/redux/app/store";
import TitleHead from "./src/redux/features/todo/title_head";
import TodoList from "./src/redux/features/todo/todo_list";
import { colors } from "./src/utils/colors";
import sc from "./src/utils/size_config";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.secondaryBackground }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
          <StatusBar barStyle="light-content" />
          <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: colors.secondaryBackground }}>
              <TextHeadline2 title="Simple Todo App : Use Redux Toolkit" fontweight="500" textAlign="center" color={colors.secondary} />

            </View>
            <TitleHead />
            <InputComponent />
            <TodoList />
          </View>
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
}

export default App;

```  

## src/redux/features/todo/title_head.tsx  

```typescript  
import React from "react";
import { Text ,TouchableHighlight,View} from 'react-native';
import { useDispatch } from "react-redux";
import TextHeadline2 from "../../../components/text/text_headline2";
import TextTitle from "../../../components/text/text_title";
import { colors } from "../../../utils/colors";
import sc from "../../../utils/size_config";
import { AppDispatch } from "../../app/store";
import todoSlice from "./todos_slice";

const TitleHead = () => {
    const disPatch: AppDispatch = useDispatch();
  return (  
    <View style={{ flexDirection: 'row', marginHorizontal: sc.midPad, marginTop: sc.midPad, height: sc.minCardHeight, alignItems: 'center' }}>
              
    <View style={{ flex: 3 }}>
      <TextHeadline2 title="Enter Todo here..." color={colors.primary} />
    </View>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableHighlight underlayColor={'transparent'} onPress={() => disPatch(todoSlice.actions.sort())} style={{ flex: 1, width: '100%', backgroundColor: colors.thirdBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
        <TextTitle title="Sort Des" color={colors.white} />
      </TouchableHighlight>
    </View>
  </View>
  );
}

export default TitleHead;

```  

## src/component/input/input_component.tsx  

```typescript  
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch } from "react-redux";
import TextBody from "../../components/text/text_body";
import { AppDispatch } from "../../redux/app/store";
import todos from "../../redux/features/todo/todos_slice";
import { colors } from "../../utils/colors";
import sc from "../../utils/size_config";

const InputComponent = () => {
    const disPatch: AppDispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const submit = () => {
        if (inputValue === "") return;
        disPatch(todos.actions.addTodo(inputValue));
        setInputValue("");
    }
    return (
            <View style={{ flexDirection: "row", height: sc.minCardHeight, margin: sc.midPad }} >
                <View style={{ flex: 3 }}>
                    <TextInput style={{ flex: 1, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.midPad, backgroundColor: colors.primaryBackground, fontSize: sc.title }} placeholder="Add Todo..." defaultValue={inputValue} onChangeText={(text) => setInputValue(text)} />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => submit()} style={{ flex: 1, width: '80%', backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                        <TextBody title="Add" color={colors.white} />
                    </TouchableHighlight>
                </View>
            </View>
    );
}

export default InputComponent;

```  

## src/redux/features/todo/todo_list.tsx  

```typescript  
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

```  

# Preview  

https://user-images.githubusercontent.com/10919051/205478153-f71a4b8d-ccb5-459a-9be5-5885464f6dbc.mov  



