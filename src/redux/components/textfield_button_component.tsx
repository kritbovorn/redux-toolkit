import React, { useState } from "react";
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../feature/counter/counter_slice";

const TextFieldButtonComponent = () => {
    const disPatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("0");
    return (
        <View style={{ flex: 1 }}>
            <TextInput onPressIn={(e) => setIncrementAmount("0")} textAlign="left" style={{ backgroundColor: 'lightgrey', padding: 12, marginHorizontal: 24, fontSize: 23 }} placeholder="Amount to increase" value={incrementAmount} onChangeText={e => setIncrementAmount(e)} />
            <View style={{ height: 20 }}></View>
            <Button color={'blue'} title="เพื่มค่า" onPress={() => disPatch(incrementByAmount(Number(incrementAmount)))} />
        </View>
    );
}

export default TextFieldButtonComponent;

