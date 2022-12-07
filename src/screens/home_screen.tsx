import React from "react";
import { Button, Text ,View} from 'react-native';
import { HomeScreenNavigationProps, RootStackParamList } from "../navigation/types";

const HomeScreen = ({navigation, route}: HomeScreenNavigationProps) => {
  return (  
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ''}} > 

      <Text style= {{fontSize: 42}}>HomeScreen</Text>
      <Button title="Go to Detail Screen" onPress={() => navigation.navigate('Detail')} />
      
    </View>
  );
}

export default HomeScreen;



