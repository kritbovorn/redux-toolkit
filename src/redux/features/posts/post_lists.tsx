import React, { useEffect, useRef } from "react";
import { ScrollView, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import Post from "./post";
import PostForm from "./post_form";
import { selectAllPosts, selectAllPostsStatus, fetchedPosts, selectAllPostsError } from "./post_slice";

const PostLists = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectAllPosts);
    const postsStatus = useAppSelector(selectAllPostsStatus);
    const postsError = useAppSelector(selectAllPostsError);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchedPosts())
        }
    }, [postsStatus, dispatch])

    let content;
    if (postsStatus === "loading") {
        content = <Text style={[{ color: 'blue', fontSize: 45, fontWeight: 'bold', textAlign: 'center' }]}>Loading....</Text>
    } else if (postsStatus === "succeeded") {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
        content = orderedPosts.map((post) => 
            <Post key={post.id} body={post.body} date={post.date} post={post} title={post.title} userId={post.id} />
        );
    } else if (postsStatus === "failed") {
        content = <Text style={[{ fontSize: 45, color: 'red', fontWeight: 'bold' }]}>Oops!!! ::: Error......</Text>
    }

    return (
        <View style={[{ flex: 1 }]} >

            <View style={[{ flex: 5, }]}>

                <PostForm />
                <ScrollView contentContainerStyle={{ flexGrow: 1, zIndex: -200 }}>
                    {content}
                </ScrollView>
                
            </View>
        </View>
    );
}

export default PostLists;



