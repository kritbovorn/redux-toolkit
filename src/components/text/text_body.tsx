import React from "react";
import { Text, TextStyle, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors'
import SizeConfig from "../../utils/size_config";

interface Props {
    title: string;
    color?: string;
    fontweight?: TextStyle["fontWeight"];
    fontFamily?: TextStyle['fontFamily'];
}

const TextBody: React.FC<Props> = ({ title, color, fontweight, fontFamily }) => {
    return (
        <Text style={{ fontSize: SizeConfig.body, color: color ?? colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily }}>{title}</Text>
    );
}

export default TextBody;
