import React from "react";
import { Text, Touchable, TouchableHighlight, View } from 'react-native';
import { colors } from "../../../utils/colors/colors";
import CheckIcon from '../../../../assets/svg/check.svg';
import TrashIcon from '../../../../assets/svg/trash.svg';

interface TodState {
  title: string;
  checked: boolean;
  onPressedCheck(): void;
  onPressedTrash: () => void;
}
const Tod: React.FC<TodState> = ({ title, checked, onPressedTrash, onPressedCheck }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primaryBackground, padding: 24, marginVertical: 10 }}>

      <TouchableHighlight underlayColor={colors.secondaryBlue} onPress={() => onPressedCheck()} style={{ backgroundColor: colors.thirdBlue, width: 30, height: 30, padding: 4, borderRadius: 4 }}>
        {checked ? <CheckIcon /> : <></>}
      </TouchableHighlight>
      <View style={{ flex: 7 }}>
        <Text style={{ color: colors.primaryBlue, fontSize: 18, fontWeight: '500', marginLeft: 20 }}>{ title }</Text>
      </View>
      {/* <View style={{ flex: 1 }}> */}
        <TouchableHighlight style={{ flex: 1 }} underlayColor={'transparent'} onPress={() => onPressedTrash()}>
          <TrashIcon stroke={colors.secondaryBlue} width={25} height={25} />

        </TouchableHighlight>
      {/* </View> */}
    </View>
  );
}

export default Tod;



