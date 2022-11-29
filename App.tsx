import React from "react";
import { TextInput, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
import Counter from "./src/redux/feature/counter/Counter";

const   App = () => {
  return (
    <Provider store={store}>
      
       <Counter />
        
       
    </Provider>
  );
}

export default App;



