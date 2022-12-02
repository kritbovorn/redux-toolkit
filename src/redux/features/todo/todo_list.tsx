import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from "../../../utils/colors/colors";
import Todo from "./todo";
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from "../api/apiSlice";
import Tod from "./tod";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    let [check, setCheck] = useState(false);
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();

    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const deleteAlert = (id: number) => {
        
        Alert.alert(
            "Oops !!!",
            " คุณแน่ใจแล้วเหรอค่ะ \n ที่จะลบ  กิจกรรมนี้ 🥺🥺🥺",
            [
                {text: "แน่ใจ 🔥", onPress: () => deleteTodo({id: id}), style: "destructive"},
                {text: 'ไม่ดีกว่า 🧐🧐🧐', onPress: () => {}}
            ]
            
        )
        console.log(id);
    }

    
    let content;

    if (isLoading) {
        content =  <Text style={{ fontSize: 45, color: "red", textAlign: 'center' }}>. . . Loading . . .</Text>
    } else if (isSuccess) {
        
        content = todos.map((todo) => <Tod key={todo.id} title={todo.title} checked={todo.completed} onPressedTrash={() => deleteAlert(todo.id)} onPressedCheck={() => updateTodo( { ...todo, completed: !todo.completed})} />)
    } else if (error) {
        content = <Text style={{ fontSize: 45, color: 'red' }}>Oops!!! Have Error</Text>
    }

    return (
        <SafeAreaView style={{flex: 1, width: '100%'}}>
            <View style={[styles.container]} >
            <Todo />
             <View style={{padding: 12, backgroundColor: colors.primaryBlue, marginTop: 20, borderTopLeftRadius: 12, borderTopRightRadius: 12, borderWidth: 5, borderColor: colors.thirdBlue}}>
                 <Text style= {{fontSize: 18, color: colors.border}}>กิจกรรม ทั้งหมด</Text>
             </View>
            <ScrollView style={{borderWidth: 4, borderColor: colors.thirdBlue}}>
                <View style={{flex: 1,  padding: 10, backgroundColor: colors.background}}>
                    {content}
                </View>
            </ScrollView>
        </View>
        </SafeAreaView>
    );
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryBackground,
        height: 200,
        width: '100%',
        padding: 20
    }
});

