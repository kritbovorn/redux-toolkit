import React from "react";
import { Text ,View} from 'react-native';
import FilledButtonComponent from "../components/buttons/buttons/filled_button_component";
import Spacer from "../components/spacer/spacer";
import { gbs, sc } from "../utils/import/import_options";
import { ExploreProps } from "../utils/navigation/type";

const ExploreScreen = ({navigation, route}: ExploreProps) => {
  return (  
     <View style={[gbs.center, {flex: 1, paddingHorizontal: sc.maxPad}]} > 
       <Text style= {[gbs.head5, {}]}>Explore Screen</Text>
       <Spacer />
       <FilledButtonComponent title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ExploreScreen;



