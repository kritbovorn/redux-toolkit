import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import FormAddPostComponent from "../redux/features/post/form_add_post_component";
import PostLists from "../redux/features/post/PostList";
import { colors } from "../utils/colors/colors";

const MainScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
            <FormAddPostComponent/>
            <View style={{ flex: 1 }} >
                <PostLists />
            </View>
        </SafeAreaView>
    );
}

export default MainScreen;



