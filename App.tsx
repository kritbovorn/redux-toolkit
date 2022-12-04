import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { apiSlice } from "./src/api/api_slice";
import HomeScreen from "./src/home_screen";

const   App = () => {
  return (  
     <ApiProvider api={apiSlice} >
        <HomeScreen />
     </ApiProvider>
  );
}

export default App;



