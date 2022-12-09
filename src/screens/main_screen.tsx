import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import ReduxLogo from '../../assets/svg/logo.svg';
import ButtonComponent from "../localComponent/button/button_component";
import { useAppDispatch, useAppSelector } from "../redux/app/store";
import { decrement, increment, incrementByAmount, reset } from "../redux/features/counter/counter_slice";
import { colors } from "../utils/colors/colors";
import sc from "../utils/size_configs/size_config";

const MainScreen = () => {
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    const [incrementAmount, setIncrementAmount] = useState("0");
    const amount = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount("0");
        dispatch(reset());
    }
    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 2 }}>
                <ReduxLogo />
            </View>
            <View style={{ flex: 5 }}>
                <View style={{ flex: 1 }}>

                    <Text style={{ fontSize: sc.head5, alignSelf: 'center' }}>{count}</Text>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', paddingHorizontal: sc.maxPad }} >

                        <ButtonComponent title="Increase" onPress={() => dispatch(increment())} backgroundColor={'darkblue'} />
                        <ButtonComponent title="Decrease" onPress={() => dispatch(decrement())} />

                    </View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: sc.maxPad, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 2 }}>
                        <TextInput textAlign="center" style={{ width: '90%', height: '70%', borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.midPad, backgroundColor: colors.primaryBackground, fontSize: sc.head5 }} placeholder="" defaultValue={incrementAmount} onChangeText={(value) => setIncrementAmount(value)} />
                    </View>
                    <ButtonComponent title="Amount" onPress={() => dispatch(incrementByAmount(amount))} backgroundColor={"darkblue"} />
                    <ButtonComponent title="Reset" onPress={() => resetAll()} backgroundColor={'green'} />

                </View>

                <View style={{ flex: 2, backgroundColor: '' }}></View>

            </View>

        </View>
    );
}

export default MainScreen;


