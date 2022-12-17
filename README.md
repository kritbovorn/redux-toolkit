## Date Package  

` npm i date-fns `  

# Code  
- ## store.ts  

```typescript  

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/post_slice';
import usersReducer from '../features/users/user_slice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;

```  
---  

- ## hook.ts  

```typescript  

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

``` 

---  

- ## user_slice.ts  

```typescript  

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type UserState = {
    id: string,
    name: string,
}

const initialState: UserState[] = [
    {id: '0', name: 'Dude Lebowski'},
    {id: '1', name: 'Neil Young'},
    {id: '2', name: 'Dave Gray'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;

```  

---  

- ## post_slice.ts  

```typescript  

import { createSlice, isAnyOf, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { RootState } from "../../app/store";

export type ReactionState = {
    [key: string]: any;  // $$$ This solved warning : Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
}

export type PostState = {
    id: string,
    title: string,
    content: string,
    userId: string,
    date: string,
    reactions: ReactionState,
}

const initialState: PostState[] = [
    {
        id: '1',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        title: ' Learning Redux Toolkit',
        content: 'I have heard good things', 
        userId: "",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        title: 'Slices.....',
        content: 'The more I say slice, the more I love it', 
        userId: "",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<PostState>) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,

                        }
                    }
                }

            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost: PostState | undefined = state.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;

            }
        }
    }
});

export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded, reactionAdded } = postSlice.actions;
export default postSlice.reducer    


```  

---  

- ## App.tsx  

```typescript  

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

```  

---  

- ## root_screen.tsx  

```typescript  

import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { sc } from '../components/import/import_options';
import PostLists from "../redux/features/posts/post_lists";

const RootScreen = () => {
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
                <StatusBar barStyle="light-content" />
                    <View style={[{ flex: 1, paddingHorizontal: sc.maxPad }]} >
                        
                        <PostLists />
                        
                    </View>
            </SafeAreaView>
        </Fragment>
    );
}

export default RootScreen;

```  

---  

- ## post_author.tsx  

```typescript  

import React from "react";
import { Text ,View} from 'react-native';
import { colors, sc } from "../../../components/import/import_options";
import { useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";

type Props = {
    userId: string
}
const PostAuthor = ({userId}: Props) => {
    const users = useAppSelector(selectAllUsers);
    const author = users.find((user) => user.id === userId);
  return (  
     <View style={[{height: sc.headStepperHeight * 0.7, marginTop: sc.maxPad}]} > 
       <Text style= {[{fontSize: sc.head, color: colors.primaryBlue, fontWeight: 'bold'}]}>
            By : {author ? author.name : "Unknow Author"}
       </Text>
    </View>
  );
}

export default PostAuthor;

```  

---  

- ## post_form.tsx  

```typescript  

import React, { useState } from "react";
import { Text, TextInput, View } from 'react-native';
import FilledButtonComponent from "../../../components/buttons/buttons/filled_button_component";
import DropdownComponent from "../../../components/dropdown/dropdown_component";
import { gbs, sc } from "../../../components/import/import_options";
import Spacer from "../../../components/spacer/spacer";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";
import { postAdded } from "./post_slice";

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useAppDispatch();
    const users = useAppSelector(selectAllUsers);

    const savePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <View style={[{ flex: 0, justifyContent: 'space-evenly', marginBottom: sc.maxPad }]} >
            <Text style={[gbs.head3, { marginBottom: sc.midPad }]}>Add New Post</Text>

            <DropdownComponent datas={users} onPress={(id) => setUserId(id)} />

            <View style={{zIndex: -1}}>
                <TextInput
                    key={'post title'}
                    style={[gbs.head, gbs.textfieldBorder, {}]}
                    placeholder="Title"
                    defaultValue={title}
                    onChangeText={(value) => setTitle(value)} />

            </View>
            <Spacer />
            <View style={{zIndex: -1}}>
                <TextInput
                    numberOfLines={3}
                    key={'post content'}
                    style={[gbs.head, gbs.textfieldBorder, { minHeight: sc.cardListHeight * 0.7 }]}
                    placeholder="Content"
                    defaultValue={content}
                    onChangeText={(value) => setContent(value)} />
            </View>
            <Spacer />

            <View style={[{ height: sc.buttonHeight, zIndex: -1 }]}>
                <FilledButtonComponent disabled={!canSave} title="Add Post" onPress={() => savePostClicked()} />
            </View>

        </View>

    );
}

export default PostForm;

```  

---  

- ## post_lists.tsx  

```typescript  

import React from "react";
import { ScrollView, View } from 'react-native';
import { sc } from "../../../components/import/import_options";
import { useAppSelector } from "../../app/hook";
import Post from "./post";
import PostForm from "./post_form";
import { selectAllPosts } from "./post_slice";

const PostLists = () => {
    
    const posts = useAppSelector(selectAllPosts)
     
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <View style={[{ flex: 1 }]} >

            <View style={[{ flex: 5, }]}>

                <PostForm />

                <ScrollView contentContainerStyle={{ flexGrow: 1, zIndex: -200}}>
                    <View style={[{ paddingVertical: sc.body,  zIndex: -1  }]}>
                        {orderedPosts.map((post) => <Post 
                            key={post.id} 
                            date={post.date} 
                            title={post.title} 
                            content={post.content} 
                            userId={post.userId} 
                            post={post}/>)}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default PostLists;

```  

---  

- ## post.tsx  

```typescript  

import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import TimeAgoComponent from "../../../component/time/time_ago_component";
import { colors, gbs, sc } from "../../../components/import/import_options";
import PostAuthor from "./post_author";
import { PostState } from "./post_slice";
import ReactionButton from "./reaction_button";

type Props = {
  title: string,
  content: string,
  userId: string,
  date: string,
  post: PostState
};

const Post = ({ title, content, date, userId, post }: Props) => {

  return (
    <View style={[styles.container, { flex: 0 }]} >
      <Text style={[gbs.head3]}>{title}</Text>
      <Text style={gbs.head1}>{content}</Text>
      <PostAuthor userId={userId} />

      <ReactionButton post={post} />

      <TimeAgoComponent timeStamp={date} />
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    borderRadius: sc.midPad,
    borderWidth: sc.minSpace,
    borderColor: colors.backgroundNavbar,
    padding: sc.midPad,
    marginTop: sc.maxPad
  },
});


```  

---  

- ## reaction_button.tsx  

```typescript  

import { id } from "date-fns/locale";
import React from "react";
import { Text, TouchableHighlight, View } from 'react-native';
import { sc } from "../../../components/import/import_options";
import { useAppDispatch } from "../../app/hook";
import { PostState, reactionAdded, ReactionState } from "./post_slice";

const reactionMojis = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '🧡',
    rocket: '🚀',
    coffee: '☕️'
}

type Props = {
    post: PostState
}

const ReactionButton = ({ post }: Props) => {

    const dispatch = useAppDispatch();

    return (
        <View style={[{ flexDirection: 'row' }]} >
            {Object.entries(reactionMojis).map(([name, emoji], index) =>
                <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        onPress={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
                    >
                        <Text style={[{ fontWeight: 'bold', fontSize: sc.head1, marginBottom: sc.maxPad }]}>{emoji} {post.reactions[name]}</Text>

                    </TouchableHighlight>
                </View >
            )}
        </View>
    );
}

export default ReactionButton;

```  

---  

- ## dropdown_component.tsx  

```typescript  

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { UserState } from "../../redux/features/users/user_slice";
import { CaretDown } from "../import/import_icons";
import { gbs, sc } from "../import/import_options";
import Spacer from "../spacer/spacer";

type DropDownProps = {
    datas: UserState[],
    onPress(userId: string): void
}

const DropdownComponent = ({ datas, onPress }: DropDownProps) => {

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState('');
    const onSelectedItem = (item: UserState) => {
        setIsShow(false);
        setTitle(item.name);
        onPress(item.id);
    }
    return (
        <View style={[{ alignItems: 'stretch', width: '100%' }]} >
            <TouchableHighlight 
                underlayColor={'rgba(0,0,0,0.4)'} 
                onPress={() => setIsShow(!isShow)} 
                style={{ borderRadius: 12, overflow: 'hidden' }} 
            >
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.textTouch]}>

                    <Text style={[gbs.head, { color: 'white' }]}>
                        {title != "" ? `${title}` : `Choose an options`}
                    </Text>

                    <CaretDown
                        height={'100%'}
                        width={'10%'}
                        fill={'white'}
                        style={
                            {
                                transform: [
                                    { rotate: isShow ? '180deg' : '0deg' }
                                ], alignSelf: 'flex-end'
                            }
                        }
                    />
                </View>

            </TouchableHighlight>
            <Spacer />
            {isShow
                ? <View style={[styles.dropdown, {maxHeight: sc.cardListHeight * 2.2}]}>
                    <ScrollView >
                    {datas.map((item, index) =>
                        <TouchableHighlight 
                            key={index} 
                            underlayColor={'rgba(0, 0, 0, 0.1)'} 
                            onPress={() => onSelectedItem(item)} 
                        >
                                <Text key={index} 
                                    style={[
                                        styles.textDropDown, gbs.body, 
                                        {backgroundColor: item.name === title ? 'gold' : 'darkseagreen'}
                                        ]}
                                >
                                        {`${item.name}`}
                                </Text>
                        </TouchableHighlight>
                    )}
                    </ScrollView>

                </View>
                :
                <></>
            }
        </View>
    );
}

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        width: '100%',
        alignSelf: 'stretch',
        position: 'absolute',
        zIndex: 20,
        marginTop: sc.midPad + sc.buttonHeight,
        overflow: 'hidden',
        borderRadius: sc.maxSpace,
        backgroundColor: 'white',
    },
    textTouch: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: sc.maxPad,
    },
    textDropDown: {
        color: 'darkgreen',
        // backgroundColor: 'darkseagreen',
        padding: sc.maxPad,
        fontWeight: '500',
        marginBottom: sc.minSpace
    }
});

```  

---  

- ## time_ago_component.tsx  

```typescript  

import React from "react";
import { Text ,View} from 'react-native';
import { parseISO, formatDistanceToNow } from 'date-fns'
import { colors, sc } from "../../components/import/import_options";

type Props = {
    timeStamp: string
}
const TimeAgoComponent = ({timeStamp}: Props) => {

    let timeAgo = "";

    if (timeStamp) {
        const date = parseISO(timeStamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`; 
    }

  return (  
     <View style={[]} > 
       <Text style= {[{fontSize: sc.head, fontWeight: '500', color: colors.secondary}]}> {timeAgo} </Text>
    </View>
  );
}

export default TimeAgoComponent;


```  

---  






