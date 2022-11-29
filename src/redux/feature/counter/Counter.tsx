import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import TextFieldButtonComponent from "../../components/textfield_button_component";
import { decrement, increment, incrementByAmount, selectCount } from "./counter_slice";

const Counter = () => {
    const count = useSelector(selectCount);
    const disPatch = useDispatch();

    return (
        <View style={[{ flex: 1 }]}>
            <View style={{ flex: 1 }}></View>
            <View style={[styles.center, { flex: 1, flexDirection: 'row' }]} >
                <TouchableHighlight onPress={() => disPatch(increment())}>
                    <Text style={styles.center}>+</Text>
                </TouchableHighlight>
                <Text style={[{ marginHorizontal: 30 }, styles.center]}>{count}</Text>
                <TouchableHighlight onPress={() => disPatch(decrement())}>
                    <Text style={styles.center}>-</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight underlayColor={'white'} onPress={() => disPatch(incrementByAmount(3))} style={{}}>
                <Text style={{ fontSize: 25, color: 'blue', alignSelf: 'center' }}>Increase Amount 3 times</Text>
            </TouchableHighlight>

            <View style={{ flex: 1 }}></View>

            <TextFieldButtonComponent />

        </View>
    );
}

export default Counter;


const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 34
    },
});
