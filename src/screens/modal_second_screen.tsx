import React from "react";
import { Button, Text ,View} from 'react-native';
import { ModalSecondScreenNavigationProps } from "../navigation/types";

const ModalSecondScreen = ({navigation, route}: ModalSecondScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} > 

      <Text style= {{fontSize: 32}}>Modal Second Screen</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
      
    </View>
  );
}

export default ModalSecondScreen;



