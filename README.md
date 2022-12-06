# React redux toolkit 

## Install : React Native 

`npx react-native init <your project name> --template react-native-template-typescript`  

## Install : Redux Toolkit, React-Redux

`npm install @reduxjs/toolkit react-redux`  

---  
# [Redux Toolkit TypeScript Quick Start](https://redux-toolkit.js.org/tutorials/typescript)  

# Code 

## src/redux/app/store.ts  
- store.ts  

```typescript  

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter_slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

```  

##  src/redux/features/counter/counter_slice.ts  
- counter_slice.ts  

```typescript  

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: "counter/incrementByAmount"; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;

```  

## src/redux/app/hooks.ts  
- hooks.ts 

```typescript  

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


```  


## App.tsx 
- App.tsx  

```typescript  

import React from "react";
import { Text ,View} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/app/store";
import RootScreen from "./src/root_screen";

const App = () => {
  return (  
      <Provider store={store}> 
        <RootScreen />
      </Provider>
  );
}

export default App;

```  

## src/root_screen.tsx 
- root_screen.tsx  

```typescript  

import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text ,View} from 'react-native';
import Counter from "./component/counter";
import { colors } from "./utils/colors";


const RootScreen = () => {
  return (  
     <Fragment>
       <SafeAreaView style={{ flex: 0, backgroundColor: colors.background }} />
       <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
         <StatusBar barStyle="dark-content" />
         <View style={{ flex: 1, backgroundColor: colors.background }}>
            
           <Counter />

         </View>
       </SafeAreaView>
     </Fragment>
  );
}

export default RootScreen;

```  

##  src/component/counter.tsx  
- counter.tsx 

```typescript  

import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { colors } from "../utils/colors";
import sc from "../utils/size_config";
import ReduxIcon from '../../assets/svg/logo.svg';
import { decrement, increment, incrementByAmount} from "../redux/features/counter/counter_slice";
import TextHeadline5 from "../components/text/text_headline5";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

const Counter = () => {
   const count = useAppSelector((state) => state.counter.value);
   const dispatch = useAppDispatch();

    const [incrementAmount, setIncrementAmount] = useState('2');
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 2 }}>
                <ReduxIcon height={sc.maxCardHeight * 3} />
            </View>

            <View style={{ height: sc.midCardHeight, flexDirection: 'row', margin: sc.maxPad }}>

                <TouchableHighlight 
                  underlayColor={'transparent'} 
                  onPress={() => dispatch(increment())} 
                  style={{ 
                  flex: 1, 
                  width: '80%', 
                  backgroundColor: colors.primaryBlue, 
                  borderWidth: sc.midSpace, 
                  borderColor: colors.border, 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: sc.midSpace 
                  }} >

                    <TextHeadline5 title="+" color={colors.white} />

                </TouchableHighlight>

                <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>

                    <TextHeadline5 title={String(count)} />

                </View>

                <TouchableHighlight 
                  underlayColor={'transparent'} 
                  onPress={() => dispatch(decrement())}
                  style={{ 
                    flex: 1, 
                    width: '80%', 
                    backgroundColor: colors.thirdBlue, 
                    borderWidth: sc.midSpace, 
                    borderColor: colors.border, 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderRadius: sc.midSpace 
                    }} >

                    <TextHeadline5 title="-" color={colors.white} />

                </TouchableHighlight>

            </View>
            <View style={{ height: sc.midCardHeight, flexDirection: 'row', margin: sc.maxPad }}>

                <TextInput 
                  textAlign="center" 
                  style={{ 
                    flex: 1, 
                    borderRadius: sc.maxSpace, 
                    borderWidth: sc.minSpace, 
                    borderColor: colors.thirdBlue, 
                    paddingHorizontal: sc.midPad, 
                    backgroundColor: colors.primaryBackground, 
                    fontSize: sc.headline5 }}  
                  placeholder="" 
                  defaultValue={incrementAmount} 
                  onChangeText={(value) => setIncrementAmount(value)} 
                />

                <View style={{ flex: 1, alignItems: 'center' }}>

                    <TouchableHighlight 
                      underlayColor={'transparent'} 
                      onPress={() => dispatch(incrementByAmount(Number(incrementAmount)))} 
                      style={{ 
                        flex: 1, 
                        width: '70%', 
                        backgroundColor: colors.secondaryBackground, 
                        borderWidth: sc.midSpace, 
                        borderColor: colors.border, 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        borderRadius: sc.midSpace 
                        }} >

                      <Text adjustsFontSizeToFit style={{ fontSize: sc.subtitle, color: 'white' }}>Amount</Text>

                    </TouchableHighlight>

                    <View style={{ flex: 1 , alignItems: 'center' }}>
                    <TouchableHighlight 
                      underlayColor={'transparent'} 
                      onPress={() => {dispatch(incrementAsync(Number(incrementAmount)))}} 
                      style={{ 
                        flex: 1, 
                        width: '70%', 
                        backgroundColor: colors.primaryBlue, 
                        borderWidth: sc.midSpace, 
                        borderColor: colors.border, 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        borderRadius: sc.midSpace 
                    }} >
                         <Text adjustsFontSizeToFit style= {{fontSize: sc.subtitle, color: 'white'}}>Async</Text>

                    </TouchableHighlight>
                    
                </View>

                </View>

            </View>
             <View style={{flex: 1}}></View>

        </View>

    );
}

export default Counter;

```  

##  Preview  

https://user-images.githubusercontent.com/10919051/205926711-d550660c-778b-4754-9cea-b7d480f89ab9.mov  













