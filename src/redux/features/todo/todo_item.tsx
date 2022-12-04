import React from "react";
import { Text, TouchableHighlight, View } from 'react-native';
import TextBody from "../../../components/text/text_body";
import { colors } from "../../../utils/colors";
import sc from "../../../utils/size_config";
import Trash from '../../../../assets/svg/trash.svg';
import Check from '../../../../assets/svg/check.svg';
import { useSelector } from "react-redux";
import { AppState } from "../../app/store";

interface Todo {
    title: string;
    check: boolean;
    onPressCheck(): void;
    onPressTrash(): void;
}

const TodoItem: React.FC<Todo> = ({ title, check, onPressCheck, onPressTrash }) => {
    const todos = useSelector((state: AppState) => state.todos)
    return (
        <View style={{ flexDirection: "row", height: sc.maxCardHeight, margin: sc.midPad, padding: sc.minPad, borderRadius: sc.minPad, borderWidth: sc.minSpace, borderColor: colors.secondaryBackground, backgroundColor: colors.primaryBackground }} >
            <View style={{ flex: 1, width: sc.minCardHeight, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => onPressCheck()} style={{ flex: 1, width: '80%', borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                        <View style={{ height: sc.minCardHeight * 0.6, width: sc.minCardHeight * 0.6, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.secondary, backgroundColor: colors.primaryBackground }}>
                            {check ? <Check width={"90%"} height={"90%"} fill={colors.primaryBlue} /> : <></>}
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextBody title={title} />
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => onPressTrash()} style={{ flex: 1, width: '80%', alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <Trash width={"100%"} height="100%" stroke={"red"} strokeWidth={sc.minSpace * 0.8} />
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default TodoItem;



