import React from "react";
import { ColorValue, FlexAlignType, StyleSheet, Text ,TouchableHighlight,View} from 'react-native';
import { gbs, sc } from '../../../import/import_option';

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

const FilledButtonComponent = ({title, width, color, backgroundColor, fontSize, alignItems, underlayColor, onPress}: Props) => {
  return (  
    <View style={{ flex: 1, alignItems: alignItems ?? 'flex-end' }}>
    <TouchableHighlight underlayColor={ underlayColor ?? 'transparent'} onPress={() => onPress()} style={[styles.button, { flex: 1, width: width ?? '100%', backgroundColor: backgroundColor ?? "red"} ]}>
        <Text style={[gbs.fontSemiBold, { fontSize: fontSize ?? sc.body, color: color ?? "white" }]}>{title}</Text>
    </TouchableHighlight>
</View>
  );
}

export default FilledButtonComponent;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sc.minPad
  }
});



