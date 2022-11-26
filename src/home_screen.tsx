import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import PostCard from "./components/post_card";
import PostList from "./components/post_list";

const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }} >
            <StatusBar barStyle={'light-content'} />
            <View style={{ flex: 1 }}>
                <PostCard title="RTK Query" subtitle="https://jsonplaceholder.typicode.com/posts" backgroundColor="darkblue" padding={32} />
                <ScrollView>
                    <PostList />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;



