import React from "react";
import { Button, Text ,View} from 'react-native';
import { ModalScreenNavigationProps } from "../navigation/types";

const ModalScreen = ({navigation, route}: ModalScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkblue'}} > 

      <Text style= {{fontSize: 42, color: 'white'}}>Modal Screen</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
      <Button title="Go to Modal First Screen" onPress={() => navigation.navigate('ModalFirst')} />
      
    </View>
  );
}

export default ModalScreen;



