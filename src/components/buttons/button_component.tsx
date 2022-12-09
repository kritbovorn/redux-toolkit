import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from 'react-native';
import sc from "../../utils/size_configs/size_config";
import gbs from "../../utils/styles/global_styles";

type Props = {
    title: string,
    color?: string,
    backgroundColor?: string,
    borderRadius?: ViewStyle["borderRadius"],
    onPress(): void;
}
const ButtonComponent = ({ title, color, backgroundColor, borderRadius, onPress }: Props) => {

    return (
        <View style={[gbs.center, { flex: 1 }]}>
            <TouchableHighlight underlayColor={'transparent'} onPress={() => onPress()} style={[styles.button ,gbs.center, { backgroundColor: backgroundColor ?? "red",  borderRadius: borderRadius ?? sc.minPad }]}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={{ fontSize: sc.body, color: color ?? "white" }}>{title}</Text>
            </TouchableHighlight>
        </View>
    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: '70%',
    paddingHorizontal: sc.minPad,
  }
});


