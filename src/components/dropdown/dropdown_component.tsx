import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Fruit } from "../../screens/home_screen";
import { CaretDown } from "../../utils/import/import_icons";
import { gbs, sc } from "../../utils/import/import_options";
import Spacer from "../spacer/spacer";

type DropDownProps = {
    datas: Fruit[],
}

const DropdownComponent = ({ datas }: DropDownProps) => {

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState('');
    const onSelectedItem = (fruit: string) => {
        setIsShow(false);
        setTitle(fruit);
    }
    return (
        <View style={[{ alignItems: 'stretch', width: '100%' }]} >
            <TouchableHighlight underlayColor={'rgba(0,0,0,0.4)'} onPress={() => setIsShow(!isShow)} style={{ borderRadius: 12, overflow: 'hidden' }} >
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.textTouch,]}>

                    <Text style={[gbs.head, { color: 'white' }]}>{title != "" ? title : `Choose an options`}</Text>
                    <CaretDown
                        height={'100%'}
                        width={'10%'}
                        fill={'white'}
                        style={
                            {
                                transform: [
                                    { rotate: isShow ? '180deg' : '0deg' }
                                ], alignSelf: 'flex-end'
                            }
                        }
                    />
                </View>
            </TouchableHighlight>
            <Spacer />
            {isShow
                ? <View style={[styles.dropdown, {maxHeight: sc.cardListHeight * 2.2}]}>
                    <ScrollView >
                    {datas.map((item, index) =>
                        <TouchableHighlight key={index} underlayColor={'rgba(0, 0, 0, 0.1)'} onPress={() => onSelectedItem(item.name)} >
                            <Text key={index} style={[styles.textDropDown, gbs.body, {backgroundColor: item.name === title ? 'aqua' : 'darkseagreen'}]}>{`${item.name}`}</Text>
                        </TouchableHighlight>
                    )}
                    </ScrollView>

                </View>
                :
                <></>
            }
        </View>
    );
}

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        width: '100%',
        alignSelf: 'stretch',
        position: 'absolute',
        zIndex: 20,
        marginTop: sc.midPad + sc.buttonHeight,
        overflow: 'hidden',
        borderRadius: sc.maxSpace,
        backgroundColor: 'white',
    },
    textTouch: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: sc.maxPad,
    },
    textDropDown: {
        color: 'darkgreen',
        // backgroundColor: 'darkseagreen',
        padding: sc.maxPad,
        fontWeight: '500',
        marginBottom: sc.minSpace
    }
});


