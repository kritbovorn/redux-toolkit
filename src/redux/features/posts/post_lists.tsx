import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FilledButtonComponent from "../../../components/buttons/buttons/filled_button_component";
import { colors, gbs, sc } from "../../../components/import/import_options";
import { useAppSelector } from "../../app/hook";
import Post from "./post";
import PostForm from "./post_form";
import { selectPosts } from "./post_slice";

const PostLists = () => {
    const posts = useAppSelector(selectPosts)
    return (
        <View style={[{ flex: 1 }]} >

            <View style={[{ flex: 4,}]}>
                
                    <PostForm />
                    <View style={[{  flexDirection: 'row' }]}>
                        <Text style={[gbs.head2, { fontWeight: '500' }]}>Post Lists</Text>

                        <FilledButtonComponent title="Next Screen ➡" onPress={() => { }} width={'70%'} alignItems={'flex-end'} backgroundColor={colors.primaryBlue} />
                    </View>
            </View>

            <View style={[{ flex: 5 }]}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={[{ paddingVertical: sc.body }]}>
                        {posts.map((e) => <Post key={e.id} title={e.title} content={e.content} />)}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default PostLists;



