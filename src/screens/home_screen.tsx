import React, { Fragment, useState } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import FilledButtonComponent from "../components/buttons/buttons/filled_button_component";
import DropdownComponent from "../components/dropdown/dropdown_component";
import Spacer from "../components/spacer/spacer";
import { gbs, sc } from "../utils/import/import_options";
import { HomeProps } from "../utils/navigation/type";

export type Fruit = {
    id: number,
    name: string
};

export const fruits: Fruit[] = [
    { id: 1, name: 'Mango' },
    { id: 2, name: 'Grape' },
    { id: 3, name: "Orange" },
    { id: 4, name: "Banana" },
    { id: 5, name: "Apple" }
];

const HomeScreen = ({ navigation, route }: HomeProps) => {
    const [selectedItem, setSelectedItem] = useState("");
    const onSelect = (item: string) => {
        setSelectedItem(item);
    }
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
                <StatusBar barStyle="light-content" />
                <View style={[{ flex: 1, backgroundColor: '' }]}>
                    <View style={[{ flex: 1, paddingHorizontal: sc.maxPad }]} >
                        <Text style={[gbs.head5, {}]}>Home Screen</Text>
                        <Spacer />
                        <FilledButtonComponent title="Go to Explore Screen" onPress={() => navigation.navigate('Explore')} />
                        <Spacer />
                        <View style={[{ height: 120, width: '100%', backgroundColor: 'blue' }]}></View>
                        <Spacer />
                        <DropdownComponent datas={fruits} />

                        <View style={[{ height: 320, backgroundColor: 'antiquewhite', zIndex: -1 }]}></View>

                    </View>
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomeScreen;



