import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/app/store";
import RootScreen from "./src/screens/root_screen";

const App = () => {
  return (  
      <Provider store={store}>
        <RootScreen />
      </Provider>
  );
}

export default App;



