import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/home_screen";
import DetailScreen from "./src/screens/detail_screen";
import FeedScreen from "./src/screens/feed_screen";
import { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} options={{title: "หน้าแรก"}} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{title: "หน้ารายละเอียด"}} />
            <Stack.Screen name="Feed" component={FeedScreen} options={{ title: "หน้า Feed"}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;



