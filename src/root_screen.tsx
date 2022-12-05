import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text ,View} from 'react-native';
import Counter from "./component/counter";
import { colors } from "./utils/colors";


const RootScreen = () => {
  return (  
     <Fragment>
       <SafeAreaView style={{ flex: 0, backgroundColor: colors.background }} />
       <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
         <StatusBar barStyle="dark-content" />
         <View style={{ flex: 1, backgroundColor: colors.background }}>
            
           <Counter />
         </View>
       </SafeAreaView>
     </Fragment>
  );
}

export default RootScreen;



