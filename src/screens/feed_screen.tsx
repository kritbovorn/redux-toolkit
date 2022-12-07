import React from "react";
import { Button, Text ,View} from 'react-native';
import { FeedScreenNavigationProps } from "../navigation/types";

const FeedScreen = ({navigation, route}: FeedScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} > 

      <Text style= {{fontSize: 42}}>Feed Screen</Text>
      <Button title="Go to Home Screen" onPress={() => navigation.popToTop()} />
      
    </View>
  );
}

export default FeedScreen;



