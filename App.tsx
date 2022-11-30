 import React from "react";
 import { Text ,View} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
import MainScreen from "./src/screens/main_screen";
 
 const   App = () => {
   return (  
      <Provider store={store}>
        <MainScreen />
      </Provider>
   );
 }
 
 export default App;
 
 
 
 