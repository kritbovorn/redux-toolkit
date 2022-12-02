import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import User from './assets/svg/user.svg';
import TodoList from "./src/redux/features/todo/todo_list";
import { colors } from "./src/utils/colors/colors";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./src/redux/features/api/apiSlice";
import MainScreen from "./src/main_screen";

const App = () => {
  return (
    <ApiProvider api={apiSlice}>
      
        <MainScreen />
      
    </ApiProvider>
  );
}

export default App;



