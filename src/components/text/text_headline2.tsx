import React from "react";
import { FlexStyle, Text ,TextStyle,View} from 'react-native';
import { colors } from '../../utils/colors'
import SizeConfig from '../../utils/size_config';


interface Props {
    title: string;
    color?: string;
    fontweight?: TextStyle['fontWeight'];
    fontFamily?: TextStyle['fontFamily'];
    bottom?: FlexStyle['bottom'];
    right?: FlexStyle['bottom'];
}
const   TextHeadline2: React.FC<Props> = ({title, color, fontweight, fontFamily, bottom, right}) => {
  return (  
     <Text style={{fontSize: SizeConfig.headline2, color: color ?? colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily, bottom: bottom, right: right}} >{title}</Text>
  );
}

export default TextHeadline2;



