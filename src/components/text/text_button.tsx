import React from "react";
import { GestureResponderEvent, Text ,TextStyle,TouchableHighlight,View} from 'react-native';
import SizeConfig from "../../utils/size_config";
import { colors } from '../../utils/colors'

interface Props {
    title: string;
    color?: string;
    fontweight?: TextStyle['fontWeight'];
    fontFamily?: TextStyle['fontFamily'];
    // onpressed?: GestureResponderEvent;
    onpressed(): void;
}

const   TextButton: React.FC<Props> = ({title, color, fontFamily, fontweight, onpressed}) => {
  return (  
    <TouchableHighlight onPress={() => onpressed()}>
         <Text style= {{color: color ?? colors.dark, fontSize: SizeConfig.title, fontWeight: fontweight ?? 'bold', fontFamily: fontFamily}}>{title}</Text>
    </TouchableHighlight>
  );
}

export default TextButton;



