import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FilledButtonComponent from "../../../components/buttons/buttons/filled_button_component";
import DropdownComponent from "../../../components/dropdown/dropdown_component";
import { gbs, sc } from "../../../components/import/import_options";
import { useAppSelector } from "../../app/hook";
import { selectAllUsers } from "../users/user_slice";
import Post from "./post";
import PostForm from "./post_form";
import { selectAllPosts } from "./post_slice";

const PostLists = () => {
    const posts = useAppSelector(selectAllPosts)
     
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <View style={[{ flex: 1 }]} >

            <View style={[{ flex: 5, }]}>

                <PostForm />

                <ScrollView contentContainerStyle={{ flexGrow: 1, zIndex: -200}}>
                    <View style={[{ paddingVertical: sc.body,  zIndex: -1  }]}>
                        {orderedPost.map((e) => <Post key={e.id} date={e.date} title={e.title} content={e.content} userId={e.userId}/>)}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default PostLists;



