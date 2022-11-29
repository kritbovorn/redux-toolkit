import React from "react";
import { Text ,View} from 'react-native';
import Counter from "../redux/features/counter/Counter";
import { useAppSelector } from "../redux/hooks";

const   RootScreen = () => {
  return (  
     <View style={{flex: 1, backgroundColor: 'blue'}} > 
        <Counter />
    </View>
  );
}

export default RootScreen;



