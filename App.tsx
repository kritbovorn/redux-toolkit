import React from "react";
import { Text, TouchableHighlight, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { useAppDispatch, useAppSelector } from "./src/app/hooks";
import { increment } from "./src/feature/counter/counterSlice";
import Counter from "./src/feature/counter/counter";

const App = () => {
  
  return (
    
     <Provider store={store}>
      <Counter />
     </Provider>
    
  );
}



export default App;



