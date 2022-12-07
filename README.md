# React redux toolkit  ( TypeScript )  

## Install : React Native 

`npx react-native init <your project name> --template react-native-template-typescript`  

## Install : Redux Toolkit, React-Redux

`npm install @reduxjs/toolkit react-redux`  

---  

## React Navigation  
- ### [Installation](https://reactnavigation.org/docs/getting-started)  

`npm install @react-navigation/native`  

- ### And  

`npm install react-native-screens react-native-safe-area-context`  

---  
## ⬇️ Must Todo... ⬇️  

- ## Configuration  

🔥 [Follow the installation instructions ](https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project)  

---  

## [Installing the native stack navigator library​](https://reactnavigation.org/docs/hello-react-navigation#installing-the-native-stack-navigator-library)  

`npm install @react-navigation/native-stack`  

> @react-navigation/native-stack depends on react-native-screens and the other libraries that we installed in Getting started. If you haven't installed those yet, head over to that page and follow the installation instructions.  

---  

## Example : 
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

The only required configuration for a `Screen` is the `name` and `component` props. You can read more about the other options available in the [native stack navigator](https://reactnavigation.org/docs/native-stack-navigator/) reference.  

> ## Want to specify the same options for all of the screens in the navigator. For that, we can pass a `screenOptions` prop to `Stack.Navigator`.

---  

# 🔥 Context  
## 🔥 🔥 🔥 [Context : pass data through the component tree](https://reactjs.org/docs/context.html)  

---  
---  





## Usage  

- ## [Custom Header](https://reactnavigation.org/docs/native-stack-navigator/#header)  
- ## [Orientation](https://reactnavigation.org/docs/native-stack-navigator/#orientation)  









