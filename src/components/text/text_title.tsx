import React from "react";
import { TextStyle, Text } from 'react-native';
import { colors } from '../../utils/colors/colors'
import SizeConfig from "../../utils/size_configs/size_config";

interface Props {
  title: string;
  color?: string;
  fontweight?: TextStyle['fontWeight'];
  fontFamily?: TextStyle['fontFamily'];
  textAlign?: TextStyle['textAlign'];
}

const TextTitle: React.FC<Props> = ({ title, color, fontweight, fontFamily, textAlign }) => {
  return (
    <Text style={{ fontSize: SizeConfig.title, color: color ?? colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily, textAlign: textAlign ?? 'left' }}>{title}</Text>
  );
}

export default TextTitle;



