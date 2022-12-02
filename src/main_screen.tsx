import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import TodoList from "./redux/features/todo/todo_list";
import { colors } from "./utils/colors/colors";

const MainScreen = () => {
    return (
        <View style={[styles.center, { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20 }]} >
            <TodoList />
        </View>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

});

