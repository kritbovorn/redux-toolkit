import React from "react";
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import TextBody from "../components/text/text_body";
import TextHeadline1 from "../components/text/text_headline1";
import TextTitle from "../components/text/text_title";
import { colors } from "../utils/colors";
import sc from "../utils/size_config";
import Lo from '../../assets/svg/logo.svg';

const Counter = () => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}></View>



            <View style={{ flex: 2 }}>
                <Lo height={sc.maxCardHeight * 3} />
            </View>


            <View style={{ height: sc.midCardHeight, flexDirection: 'row', margin: sc.maxPad }}>
                {/* <CheckIcon /> */}
                <TouchableHighlight underlayColor={'transparent'} onPress={() => { }} style={{ flex: 1, width: '80%', backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <TextBody title="+" color={colors.white} />
                </TouchableHighlight>
                <View style={{ flex: 1 }}>
                    <TextHeadline1 title="" />
                </View>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => { }} style={{ flex: 1, width: '80%', backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <TextBody title="-" color={colors.white} />
                </TouchableHighlight>
            </View>
            <View style={{ height: sc.midCardHeight, flexDirection: 'row', margin: sc.maxPad }}>

                <TextInput style={{ flex: 1, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.midPad, backgroundColor: colors.primaryBackground, fontSize: sc.title }} placeholder="" defaultValue="" onChangeText={() => { }} />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => { }} style={{ flex: 1, width: '70%', backgroundColor: colors.secondaryBackground, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                    <Text adjustsFontSizeToFit style={{ fontSize: sc.subtitle, color: 'white' }}>Amount</Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => { }} style={{ flex: 1, width: '70%', backgroundColor: colors.secondaryBackground, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
                        <Text adjustsFontSizeToFit style={{ fontSize: sc.subtitle, color: 'white' }}>Async</Text>
                    </TouchableHighlight>
                </View>

            </View>
             <View style={{flex: 1}}></View>

        </View>

    );
}

export default Counter;



