import React from "react";
import { Text ,View} from 'react-native';
import ReduxLogo from '../../assets/svg/logo.svg'

const MainScreen = () => {
  return (  
     <View style={{flex: 1}} > 
      <View style={{flex: 1}}></View>

      <View style={{flex: 1}}>
        <ReduxLogo />
      </View>
       <View style={{flex: 5}}>

       </View>
      
    </View>
  );
}

export default MainScreen;



