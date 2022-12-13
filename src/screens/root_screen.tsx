import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { gbs, sc } from '../components/import/import_options';
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



