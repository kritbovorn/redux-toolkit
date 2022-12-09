import React from "react";
import { FlexStyle, Text, TextStyle, View } from 'react-native';
import { colors } from '../../utils/colors/colors'
import SizeConfig from '../../utils/size_configs/size_config';

interface Props {
  title: string;
  color?: string;
  fontweight?: TextStyle['fontWeight'];
  fontFamily?: TextStyle['fontFamily'];
  textAlign?: TextStyle['textAlign'];
  bottom?: FlexStyle['bottom'];
  right?: FlexStyle['bottom'];
}

const TextHeadline5: React.FC<Props> = ({ title, color, fontweight, fontFamily, bottom, right, textAlign }) => {
  return (
    <Text style={{ fontSize: SizeConfig.headline5, color: color ?? colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily, bottom: bottom, right: right, textAlign: textAlign ?? 'left' }}>{title}</Text>
  );
}

export default TextHeadline5;



