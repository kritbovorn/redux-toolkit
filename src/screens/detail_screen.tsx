import React from "react";
import { Button, Text ,View} from 'react-native';
import { DetailScreenNavigationProps } from '../navigation/types';


const DetailScreen = ({ navigation, route }: DetailScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} > 

      <Text style= {{fontSize: 42}}>DetailScreen</Text>
      <Button 
        title="Go to Feed Screen" 
        onPress={() => navigation.navigate('Feed')} />
      
    </View>
  );
}

export default DetailScreen;



