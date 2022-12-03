import React from "react";
import { Text ,TextStyle,View} from 'react-native';
import { colors } from '../../utils/colors'
import SizeConfig from "../../utils/size_config";

interface Props {
    title: string;
    color?: string;
    fontweight?: TextStyle['fontWeight'];
    fontFamily?: TextStyle['fontFamily'];
}

const   TextSubtitle: React.FC<Props> = ({title, color, fontweight, fontFamily}) => {
  return (  
     <Text style= {{fontSize: SizeConfig.subtitle, color: color ?? colors.dark, fontWeight: fontweight ?? 'normal', fontFamily: fontFamily}}>{title}</Text>
  );
}

export default TextSubtitle;



