import React from "react";
import { ColorValue, FlexAlignType, StyleSheet, Text ,TouchableHighlight,View} from 'react-native';
import { gbs, sc } from '../../import/import_options';

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

const FilledButtonComponent = ({title, width, color, backgroundColor, alignItems, underlayColor, onPress}: Props) => {
  return (  
    <View style={{ flex: 1, alignItems: alignItems ?? 'center' }}>
    <TouchableHighlight 
      underlayColor={ underlayColor ?? 'transparent'} 
      onPress={() => onPress()} 
      style={[styles.button, {  height: sc.buttonHeight, width: width ?? '100%', backgroundColor: backgroundColor ?? "red"} ]}>

        <Text style={[gbs.head1, {  color: color ?? "white" }]}>{title}</Text>
        
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



