# React redux toolkit 

## Install : React Native 

`npx react-native init <your project name> --template react-native-template-typescript`  

## Install : Redux Toolkit, React-Redux

`npm install @reduxjs/toolkit react-redux`  

---  

## Chapter 1  

![Simulator Screen Shot - iPhone 14 Pro - 2022-11-29 at 23 20 43](https://user-images.githubusercontent.com/10919051/204587618-434439d2-0089-469c-bf82-1dac4188d44d.png) 

---  

# Code  

## src/redux/features/counter/counter_slice.ts  
- counter_slice.ts  

```typescript  

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number 
};

const initialState: CounterState = {
    count: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const selectCount = (state: { counter: { value: number; }; }) => state.counter.value;
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

```  

## src/redux/app/store.ts  
- store.ts  

```typescript  

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter_slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

```  


## App.tsx  
- App.tsx  

```typescript  

import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
import RootScreen from "./src/screens/root_screen";

const   App = () => {
  return (  
     <Provider store={store} >
        <RootScreen />
     </Provider>
  );
}

export default App;

```  

## src/screens/root_screen.tsx  
- root_screen.tsx  

```typescript  

import React from "react";
import { View} from 'react-native';
import Counter from "../redux/features/counter/Counter";

const   RootScreen = () => {
  return (  
     <View style={{flex: 1, backgroundColor: 'blue'}} > 
        <Counter />
    </View>
  );
}

export default RootScreen;

```  

## src/redux/features/counter/Counter.tsx  
- Counter.tsx  

```typescript  

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counter_slice";

const Counter = () => {

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    disPatch(reset());
  }

  const count = useSelector((state: { counter: { count: any; } }) => state.counter.count);
  const disPatch = useDispatch();
  console.log(`Hey ${count}`);
  return (
    <SafeAreaView style={{ flex: 1}}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>

        <Text style={{ fontSize: 100, color: 'yellow' }}>{count}</Text>

      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' , paddingHorizontal: 20}}>

        <TouchableHighlight 
          underlayColor={'transparent'} 
          onPress={() => disPatch(increment())} 
          style={[styles.button, { backgroundColor: 'green' }]}
        >

          <Text style={[styles.text]}>+</Text>

        </TouchableHighlight>

        <View style={{ width: 45 }}></View>

        <TouchableHighlight 
          underlayColor={'transparent'} 
          onPress={() => disPatch(decrement())} 
          style={[styles.button, { backgroundColor: 'red' }]}
        >
          <Text style={[styles.text]}>-</Text>

        </TouchableHighlight>

      </View>


      <View style={{ flex: 1 }}>

        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <TextInput placeholder="0" defaultValue={String(incrementAmount)} onChangeText={(e) => setIncrementAmount(Number(e))} style={{ fontSize: 44, backgroundColor: 'lightgrey', alignSelf: 'flex-start', padding: 12, width: '100%' }} />

        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>

          <TouchableHighlight 
            onPress={() => disPatch(incrementByAmount(addValue))} 
            style={[styles.button, { backgroundColor: 'orange', borderRadius: 32}]} 
          >

            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Add +++</Text>

          </TouchableHighlight>

          <View style={{width: 40}}></View>

          <TouchableHighlight 
            onPress={() => resetAll()} 
            style={[styles.button, { backgroundColor: 'red', borderRadius: 8 }]} 
          >

            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>RESET</Text>

          </TouchableHighlight>

        </View>

      </View>

    </SafeAreaView>
  );
}

export default Counter;


const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: 'white',
    // textAlign: 'center'
  },
  button: {
    width: '40%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


```  

## src/redux/hooks.ts  
- hooks.ts  

```typescript  

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

```  

---  