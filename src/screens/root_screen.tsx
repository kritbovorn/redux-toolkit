import React from "react";
import { StyleSheet, Text ,View} from 'react-native';
import { gbs } from '../components/import/import_options';

const RootScreen = () => {
  return (  
     <View style={[gbs.center, styles.container, {flex: 1}]} > 
       <Text style= {[gbs.head5]}>Boie = กฤตบวร ทวียศศักดิ์</Text>
    </View>
  );
}

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50"
  }
});



