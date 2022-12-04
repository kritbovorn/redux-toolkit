import React from "react";
import { Text ,TouchableHighlight,View} from 'react-native';
import { useDispatch } from "react-redux";
import TextHeadline2 from "../../../components/text/text_headline2";
import TextTitle from "../../../components/text/text_title";
import { colors } from "../../../utils/colors";
import sc from "../../../utils/size_config";
import { AppDispatch } from "../../app/store";
import todoSlice from "./todos_slice";

const TitleHead = () => {
    const disPatch: AppDispatch = useDispatch();
  return (  
    <View style={{ flexDirection: 'row', marginHorizontal: sc.midPad, marginTop: sc.midPad, height: sc.minCardHeight, alignItems: 'center' }}>
              
    <View style={{ flex: 3 }}>
      <TextHeadline2 title="Enter Todo here..." color={colors.primary} />
    </View>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableHighlight underlayColor={'transparent'} onPress={() => disPatch(todoSlice.actions.sort())} style={{ flex: 1, width: '100%', backgroundColor: colors.secondaryBackground, borderWidth: sc.midSpace, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', borderRadius: sc.midSpace }}>
        <TextTitle title="Sort Des" color={colors.white} />
      </TouchableHighlight>
    </View>


  </View>
  );
}

export default TitleHead;



