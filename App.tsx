import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text ,View} from 'react-native';
import HomeScreen from "./src/home_screen";
import DetailScreen from "./src/screens/detail_screen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Overview'}}  />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;



