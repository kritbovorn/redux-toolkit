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



