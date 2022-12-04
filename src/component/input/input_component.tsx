import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch } from "react-redux";
import TextBody from "../../components/text/text_body";
import { AppDispatch } from "../../redux/app/store";
import todos from "../../redux/features/todo/todos_slice";
import { colors } from "../../utils/colors";
import sc from "../../utils/size_config";

const InputComponent = () => {
    const disPatch: AppDispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const submit = () => {
        if (inputValue === "") return;
        disPatch(todos.actions.addTodo(inputValue));
        setInputValue("");
    }
    return (
            <View style={{ flexDirection: "row", height: sc.minCardHeight, margin: sc.midPad }} >
                <View style={{ flex: 3 }}>
                    <TextInput style={{ flex: 1, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.midPad, backgroundColor: colors.primaryBackground, fontSize: sc.title }} placeholder="Add Todo..." defaultValue={inputValue} onChangeText={(text) => setInputValue(text)} />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => submit()} style={{ flex: 1, width: '80%', backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                        <TextBody title="Add" color={colors.white} />
                    </TouchableHighlight>
                </View>
            </View>

    );
}

export default InputComponent;

