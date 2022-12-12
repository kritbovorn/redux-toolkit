import React from "react";
import { ColorValue, FlexAlignType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors, gbs, sc } from '../../../import/import_option';

type Props = {
    title: string,
    width?: number | string,
    color?: string,
    backgroundColor?: string,
    fontSize?: number,
    alignItems?: FlexAlignType,
    underlayColor?: ColorValue | string,
    onPress(): void
}

const OutlineButtonComponent = ({title, width, color, backgroundColor, fontSize, alignItems, underlayColor, onPress }: Props) => {
    return (
        <View style={{ flex: 1, alignItems: alignItems ?? 'center' }}>
            <TouchableHighlight underlayColor={underlayColor ?? 'lightgrey'} onPress={() => onPress()} style={[styles.button, { flex: 1, width: width ?? '100%', backgroundColor: backgroundColor ?? 'white' }]}>
                <Text style={[gbs.fontSemiBold, { color: color ?? 'red', fontSize: fontSize ?? sc.body }]}>{title}</Text>
            </TouchableHighlight>
        </View>
    );
}

export default OutlineButtonComponent;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderWidth: sc.minSpace,
        borderColor: colors.backgroundNavbar,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sc.minPad
    }
});

