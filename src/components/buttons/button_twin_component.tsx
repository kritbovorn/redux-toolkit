import React from "react";
import { Text, View } from 'react-native';
import FilledButtonComponent from "./button/filled_button_component";
import OutlineButtonComponent from "./button/outline_button_component";
import { sc } from '../../import/import_option';

type Props = {
    titleOutline?: string,
    titleFilled?: string,
    onPressFilled(): void,
    onPressOutline(): void
}

const ButtonTwinComponent = ({titleFilled, titleOutline, onPressFilled, onPressOutline}: Props) => {
    return (
        <View style={[{ flexDirection: 'row', height: sc.buttonHeight, paddingHorizontal: sc.maxPad }]}>

            <OutlineButtonComponent title= {titleOutline ?? "ย้อนกลับ"} onPress={() => onPressOutline()} width={'95%'} alignItems={'flex-start'} />
            <FilledButtonComponent title={titleFilled ?? "ต่อไป"} onPress={() => onPressFilled()} width={'95%'} alignItems={'flex-end'} />

        </View>
    );
}

export default ButtonTwinComponent;



