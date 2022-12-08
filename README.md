# React redux toolkit  ( TypeScript )  

## Install : React Native 

`npx react-native init <your project name> --template react-native-template-typescript`  

## Install : Redux Toolkit, React-Redux

`npm install @reduxjs/toolkit react-redux`  

---  

## React Navigation  
- ### [🔗 Installation](https://reactnavigation.org/docs/getting-started)  

`npm install @react-navigation/native`  

- ### And  

`npm install react-native-screens react-native-safe-area-context`  

---  
## ⬇️ Must Todo... ⬇️  

- ## Configuration  

🔥 [🔗 Follow the installation instructions ](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project)  

---  

## [🔗 Installing the native stack navigator library​](https://reactnavigation.org/docs/hello-react-navigation#installing-the-native-stack-navigator-library)  

`npm install @react-navigation/native-stack`  

> @react-navigation/native-stack depends on react-native-screens and the other libraries that we installed in Getting started. If you haven't installed those yet, head over to that page and follow the installation instructions.  

---  

[ `createNativeStackNavigator()` ] is a function containing 2 properties: ` Navigator, Screen `  

```typescript  

// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Detail">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen}>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```  

The only required configuration for a `Screen` is the `name` and `component` props. You can read more about the other options available in the [🔗 native stack navigator](https://reactnavigation.org/docs/native-stack-navigator/) reference.  

> ## Want to specify the same options for all of the screens in the navigator. For that, we can pass a `screenOptions` prop to `Stack.Navigator`.

---  

# 🔥 Context  
## 🔥 🔥 🔥 [🔗 Context : pass data through the component tree](https://reactjs.org/docs/context.html)  

---  
---  

# [🔗 Navigating to a new screen](https://reactnavigation.org/docs/navigating#navigating-to-a-new-screen)  

> ### ( more about <b>this</b> later in ["The navigation prop in depth"](https://reactnavigation.org/docs/navigation-prop) ).  

- The `navigation` prop  
- `navigate('Details')` - we call the `navigate` function (on the navigation prop — naming is hard! ) with the name of the route that we'd like to move the user to.

`/HomeScreen.tsx`

```typescript 

import * as React from 'react';
import { Button, View, Text } from 'react-native';
// import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

```  

- import { NavigationContainer } from '@react-navigation/native';  
- import { createNativeStackNavigator } from '@react-navigation/native-stack';  
- Insert `navigation` in : function HomeScreen({ `navigation` }) {  
    
- `onPress={() => navigation.navigate('Details')}`  

---  
## Preview  

https://user-images.githubusercontent.com/10919051/206108968-4a7dff5b-9205-4d7c-95e7-32ea53443da5.mov  

## Going Back  
- `navigation.goBack();  ` 
- `navigation.popToTop();` // Back to root Screen

> You can go back to an existing screen in the stack with  
> navigation.navigate('RouteName'), and you can go back to the first screen in the stack with `navigation.popToTop()`.  

```typescript  

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

```  

---  

# 🔥 🔥 🔥 🔥 🔥Example: `Typescript`  
## [🔗 🔥 Solved problem: By Karthik Balasubramanian](https://medium.com/timeless/working-with-stack-navigation-in-react-native-with-typescript-2deda91eab8a)  
## [🔗 🔥 Type checking with TypeScript](https://reactnavigation.org/docs/typescript/#type-checking-the-navigator)  

---  

## src/navigation/types.tsx  
- types.tsx  

```typescript  

import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Feed: undefined,
}

export type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Detail'>
export type FeedScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Feed'>

```  


## App.tsx  
- App.tsx  

```typescript  

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

```  

## src/screens/home_screen.tsx  
- home_screen.tsx  

```typescript  

import React from "react";
import { Button, Text ,View} from 'react-native';
import { HomeScreenNavigationProps, RootStackParamList } from "../navigation/types";

const HomeScreen = ({navigation, route}: HomeScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ''}} > 

      <Text style= {{fontSize: 42}}>HomeScreen</Text>
      <Button title="Go to Detail Screen" onPress={() => navigation.navigate('Detail')} />
      
    </View>
  );
}

export default HomeScreen;

```  

## src/screens/detail_screen.tsx  
- detail_screen.tsx  

```typescript  

import React from "react";
import { Button, Text ,View} from 'react-native';
import { DetailScreenNavigationProps } from '../navigation/types';


const DetailScreen = ({ navigation, route }: DetailScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} > 

      <Text style= {{fontSize: 42}}>DetailScreen</Text>
      <Button 
        title="Go to Feed Screen" 
        onPress={() => navigation.navigate('Feed')} />
      
    </View>
  );
}

export default DetailScreen;

```  

## src/screens/feed_screen.tsx  
- feed_screen.tsx  

```typescript  

import React from "react";
import { Button, Text ,View} from 'react-native';
import { FeedScreenNavigationProps } from "../navigation/types";

const FeedScreen = ({navigation, route}: FeedScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} > 

      <Text style= {{fontSize: 42}}>Feed Screen</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.popToTop()} />
      
    </View>
  );
}

export default FeedScreen;

```  

# Preview  

https://user-images.githubusercontent.com/10919051/206223707-eb8c2360-2e76-4f53-98f5-ee90721ccb3a.mov  

---  

# 🆕 🆕 🆕 Modal  
## [🔗 Creating a stack with modal screens](https://reactnavigation.org/docs/modal#creating-a-stack-with-modal-screens)  
## App.tsx  
- App.tsx  

```typescript  

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

```  

## src/navigation/types.ts  
- types.ts  

```typescript  

import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home: undefined,
    Detail: undefined,
    Feed: undefined,
    Modal: undefined,
    ModalFirst: undefined,
    ModalSecond: undefined
}

export type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type DetailScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Detail'>
export type FeedScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Feed'>
export type ModalScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Modal'>
export type ModalFirstScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'ModalFirst'>
export type ModalSecondScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'ModalSecond'>

```  


## Usage  

- ## [🔗 Custom Header](https://reactnavigation.org/docs/native-stack-navigator/#header)  
- ## [🔗 Orientation](https://reactnavigation.org/docs/native-stack-navigator/#orientation)  









