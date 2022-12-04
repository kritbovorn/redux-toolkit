# React toolkit 
## [Youtube](https://www.youtube.com/watch?v=9zySeP5vH9c)  

---  

## API : dog  ( Example )  

`const DOG_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';`  

---   


## API : jsonplaceholder.typicode.com/posts  Example

[RTK Query with React](https://medium.com/@jdhawks/redux-toolkit-and-rtk-query-with-react-js-14e34be65622)  

---  

# Code  

## src/api/api_slice.ts  
- api_slice.ts  

```typescript  

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
    id: number;
    title: string;
    body: string;
}

export const apiSlice = createApi({

    reducerPath: 'apiSlice',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({
        receivedPost: builder.query<Post[], number | void>({
            query: () => '/posts', 
        }),
    }),

});

export const {  useReceivedPostQuery } = apiSlice;

```  

## src/app/store.ts  

- store.ts  

```typescript  

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from '../api/api_slice';

export const store = configureStore({

    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(apiSlice.middleware)

});

setupListeners(store.dispatch);

```  

## App.tsx  
- App.tsx  

```typescript  

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

```  

## src/home_screen.tsx  
- home_screen.tsx  

```typescript  

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import PostCard from "./components/post_card";
import PostList from "./components/post_list";

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }} >
            <StatusBar barStyle={'light-content'} />

            <View style={{ flex: 1 }}>

                <PostCard 
                  title="RTK Query" 
                  subtitle="https://jsonplaceholder.typicode.com/posts" 
                  backgroundColor="darkblue" 
                  padding={32} />

                <ScrollView>

                    <PostList />

                </ScrollView>

            </View>

        </SafeAreaView>
    );
}

export default HomeScreen;

```  

## src/components/post_card.tsx  
- post_card.tsx  

```typescript  

import React from "react";
import { Text ,View} from 'react-native';

type CardType = {
    title: string,
    subtitle: string,
    backgroundColor?: string,
    padding?: number,
}

const   PostCard: React.FC<CardType> = ({title, subtitle, backgroundColor, padding}) => {
  return (  
      <View style={{ backgroundColor: backgroundColor ?? 'blue', borderRadius: 12, margin: 14, padding: padding ??  12}}>

         <Text style= {{fontSize: 24, fontWeight: 'bold', color: 'white'}}>{title} </Text>
         <View style={{height: 8}}></View>
         <Text style= {{fontSize: 18, color: 'white'}}>{subtitle} </Text>

      </View>
  );
}

export default PostCard;

```  

## src/components/post_list.tsx  
- post_list.tsx  

```typescript  

import React from "react";
import { Text ,View} from 'react-native';
import { useReceivedPostQuery } from "../api/api_slice";
import PostCard from "./post_card";

const   PostList = () => {

    const { data, isLoading, isSuccess, error} = useReceivedPostQuery();

  return (  
     <View style={{  margin: 8}} > 

      {isLoading ?  
      <Text style= {{fontSize: 60, alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>Loading...</Text>
       : 
       null
       }
       
      {data?.map((post) => <PostCard key={post.id} title={post.title} subtitle={post.body} />)}
      
    </View>
    
  );
}

export default PostList;

```  




