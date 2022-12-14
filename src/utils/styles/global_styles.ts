import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../colors/colors";
import sc from "../size_configs/size_config";

const globalStyles = StyleSheet.create({
    font: {
        fontFamily: 'Prompt-Light'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    head5: {
        fontSize: sc.head5,
        fontFamily: 'Kanit-Medium',
    },
    head4: {
        fontSize: sc.head4,
        fontFamily: 'Kanit-Medium',
    },
    head3: {
        fontSize: sc.head3,
        fontFamily: 'Kanit-Medium',
    },
    head2: {
        fontSize: sc.head2,
        fontFamily: 'Kanit-Medium',
    },
    head1: {
        fontSize: sc.head1,
        fontFamily: 'Kanit-Medium',
    },
    head: {
        fontSize: sc.head,
        fontFamily: 'Kanit-Medium',
    },
    body: {
        fontSize: sc.body,
        fontFamily: 'Kanit-Medium',
    },
    title: {
        fontSize: sc.title,
        fontFamily: 'Kanit-Medium',
    },
    subtitle: {
        fontSize: sc.subtitle,
        fontFamily: 'Kanit-Medium',
    },
    caption: {
        fontSize: sc.caption,
        fontFamily: 'Prompt-Light',
    },
    textfieldBorder: {
        borderRadius: sc.midSpace,
        borderWidth: sc.minSpace * 0.5,
        borderColor: colors.thirdBlue,
        paddingVertical: sc.midSpace,
        paddingHorizontal: sc.midPad,
        backgroundColor: colors.primaryBackground
    }
    
});

export default globalStyles;