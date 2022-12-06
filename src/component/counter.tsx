import React, { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { colors } from "../utils/colors";
import sc from "../utils/size_config";
import ReduxIcon from '../../assets/svg/logo.svg';
import { decrement, increment, incrementAsync, incrementByAmount} from "../redux/features/counter/counter_slice";
import TextHeadline5 from "../components/text/text_headline5";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";

const Counter = () => {
   const count = useAppSelector((state) => state.counter.value);
   const dispatch = useAppDispatch();

    const [incrementAmount, setIncrementAmount] = useState('2');
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 2 }}>
                <ReduxIcon height={sc.maxCardHeight * 3} />
            </View>

            <View style={{ height: sc.midCardHeight, flexDirection: 'row', margin: sc.maxPad }}>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => dispatch(increment())} style={{ flex: 1, width: '80%', backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <TextHeadline5 title="+" color={colors.white} />
                </TouchableHighlight>
                <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
                     <Text adjustsFontSizeToFit style= {{fontSize: sc.headline5}}>{String(count)}</Text>
                </View>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => dispatch(decrement())} style={{ flex: 1, width: '80%', backgroundColor: colors.thirdBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <TextHeadline5 title="-" color={colors.white} />
                </TouchableHighlight>
            </View>
            <View style={{ height: sc.midCardHeight, flexDirection: 'row', margin: sc.maxPad }}>

                <TextInput textAlign="center" style={{ flex: 1, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.midPad, backgroundColor: colors.primaryBackground, fontSize: sc.headline5 }} placeholder="" defaultValue={incrementAmount} onChangeText={(v) => setIncrementAmount(v)} />

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => dispatch(incrementByAmount(Number(incrementAmount)))} style={{ flex: 1, width: '70%', backgroundColor: colors.secondaryBackground, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <Text adjustsFontSizeToFit style={{ fontSize: sc.subtitle, color: 'white' }}>Amount</Text>
                    </TouchableHighlight>
                </View>

                <View style={{ flex: 1 , alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => {dispatch(incrementAsync(Number(incrementAmount)))}} style={{ flex: 1, width: '70%', backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                         <Text adjustsFontSizeToFit style= {{fontSize: sc.subtitle, color: 'white'}}>Async</Text>
                    </TouchableHighlight>
                </View>

            </View>
             <View style={{flex: 1}}></View>

        </View>

    );
}

export default Counter;



