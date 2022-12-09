import React from "react";
import { Text, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors/colors'
import SizeConfig from "../../utils/size_configs/size_config";

interface Props {
    title: string;
    color?: string;
    fontweight?: TextStyle["fontWeight"];
    fontFamily?: TextStyle['fontFamily'];
    textAlign?: TextStyle['textAlign'];
}

const TextBody: React.FC<Props> = ({ title, color, fontweight, fontFamily, textAlign }) => {
    return (
        <Text style={{ fontSize: SizeConfig.body, color: color ?? colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily, textAlign: textAlign ?? 'left' }}>{title}</Text>
    );
}

export default TextBody;
