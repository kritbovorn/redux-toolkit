import React from "react";
import { Text ,View} from 'react-native';
import { colors } from "../../../utils/colors/colors";

interface Props {
    title: string;
    content: string;    
}

const   Post: React.FC<Props> = ({title, content}) => {
  return (  
     <View style={{ height: 180, backgroundColor: colors.primaryBackground, padding: 20, borderRadius: 12, borderWidth: 2, borderColor: colors.border, margin: 20}} > 
       <Text style= {{fontSize: 32, color: colors.primary}}>{title}</Text>
        <Text style= {{fontSize: 18, color: colors.secondary}}>{content}</Text>
    </View>
  );
}

export default Post;



