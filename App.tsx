import React from "react";
import { Text ,View} from 'react-native';
import User from './assets/svg/user.svg';

const App = () => {
  return (  
     <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}} > 

      
       < User width={100} height={100} fill={"blue"} />


    </View>
  );
}

export default App;



