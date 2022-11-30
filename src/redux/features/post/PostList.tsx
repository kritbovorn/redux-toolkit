import React from "react";
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import { colors } from "../../../utils/colors/colors";
import Post from "./post";
import { selectAllPosts } from "./post_slice";

const PostLists = () => {

    const posts = useSelector(selectAllPosts);
    const renderPosts = posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
    ));

    return (
        <View style={{flex: 1}} >
            <View style={{ backgroundColor: colors.primaryBlue, borderRadius: 12, borderWidth: 5, borderColor: colors.secondaryBackground, paddingVertical: 12, paddingHorizontal: 20, marginHorizontal: 40, marginBottom: 8 }}>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>List of Posts</Text>

            </View>
            <ScrollView style={{ }}  >
                {renderPosts}

            </ScrollView>
        </View>
    );
}

export default PostLists;



