import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import PostLists from "../redux/features/post/PostList";
import { colors } from "../utils/colors/colors";

const MainScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
            <View style={{ flex: 1 }} >
                <PostLists />
            </View>
        </SafeAreaView>
    );
}

export default MainScreen;



