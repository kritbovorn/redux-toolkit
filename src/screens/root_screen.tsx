import React from "react";
import { View} from 'react-native';
import Counter from "../redux/features/counter/Counter";

const   RootScreen = () => {
  return (  
     <View style={{flex: 1, backgroundColor: 'blue'}} > 
        <Counter />
    </View>
  );
}

export default RootScreen;



