import React from "react";
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import { colors } from "../../../utils/colors/colors";
import Post from "./post";
import { selectAllPosts } from "./post_slice";

const PostLists = () => {

    const posts = useSelector(selectAllPosts);
    const renderPosts = posts.map((post) => (
        <Post title={post.title} content={post.content} />
    ));

    return (
        <View style={{flex: 1}} >
            <View style={{ backgroundColor: colors.primaryBlue, borderRadius: 12, borderWidth: 2, borderColor: colors.border, margin: 32, paddingVertical: 50, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold' }}>Learn React Toolkit</Text>

            </View>
            <ScrollView style={{ }}  >
                {renderPosts}

            </ScrollView>
        </View>
    );
}

export default PostLists;



