import React from "react";
import { Button, Text ,View} from 'react-native';
import { ModalFirstScreenNavigationProps } from "../navigation/types";

const ModalFirstScreen = ({navigation, route}: ModalFirstScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} > 

      <Text style= {{fontSize: 42}}>Modal First Screen</Text>
      <Button title="Go to Modal Second Screen" onPress={() => navigation.push('ModalSecond')} />
      <Button title="Back" onPress={() => navigation.goBack()} />
      
    </View>
  );
}

export default ModalFirstScreen;



