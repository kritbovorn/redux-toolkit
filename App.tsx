import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/home_screen";
import DetailScreen from "./src/screens/detail_screen";
import FeedScreen from "./src/screens/feed_screen";
import { RootStackParamList } from "./src/navigation/types";
import ModalScreen from "./src/screens/modal_screen";
import ModelFirstScreen from "./src/screens/modal_first_screen";
import ModalSecondScreen from "./src/screens/modal_second_screen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home" >
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} options={{ title: "หน้าแรก" }} />
          <RootStack.Screen name="Detail" component={DetailScreen} options={{ title: "หน้ารายละเอียด" }} />
          <RootStack.Screen name="Feed" component={FeedScreen} options={{ title: "หน้า Feed", headerShown: false }} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'formSheet'}}>
          <RootStack.Screen name="Modal" component={ModalScreen} options={{headerShown: false}} />
          <RootStack.Screen name="ModalSecond" component={ModalSecondScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'fullScreenModal'}}>
          <RootStack.Screen name="ModalFirst" component={ModelFirstScreen}/>
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;



