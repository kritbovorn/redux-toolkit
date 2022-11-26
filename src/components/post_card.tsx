import React from "react";
import { Text ,View} from 'react-native';

type CardType = {
    title: string,
    subtitle: string,
    backgroundColor?: string,
    padding?: number,
}

const   PostCard: React.FC<CardType> = ({title, subtitle, backgroundColor, padding}) => {
  return (  
      <View style={{ backgroundColor: backgroundColor ?? 'blue', borderRadius: 12, margin: 14, padding: padding ??  12}}>
         <Text style= {{fontSize: 24, fontWeight: 'bold', color: 'white'}}>{title} </Text>
          <View style={{height: 8}}></View>
          <Text style= {{fontSize: 18, color: 'white'}}>{subtitle} </Text>
      </View>
  );
}

export default PostCard;



