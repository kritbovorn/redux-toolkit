import React from "react";
import { Text ,View} from 'react-native';
import { gbs } from '../components/import/import_options';

const RootScreen = () => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
       <Text style= {[{fontSize: 54}]}>Boie</Text>
    </View>
  );
}

export default RootScreen;



