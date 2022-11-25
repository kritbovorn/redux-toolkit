import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment, amountAdded } from "./counterSlice";
import { useFetchBreedsQuery } from "../dogs/dog_api_slice";

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    const { data = [], isFetching } = useFetchBreedsQuery(11);

    function handleClicked() {

    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
            <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 62, textAlign: 'center' }}>{count}</Text>
                    <TouchableHighlight onPress={() => dispatch(increment())} style={{ backgroundColor: 'orange', padding: 12, alignItems: 'center' }} >
                        <Text style={styles.textButton}>Increase Number</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => dispatch(decrement())} style={{ backgroundColor: 'red', padding: 12, alignItems: 'center' }} >
                        <Text style={styles.textButton}>Decrease Number</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => dispatch(amountAdded(3))} style={{ backgroundColor: 'green', padding: 12 }} >
                        <Text style={{ color: 'blue', fontSize: 18, textAlign: 'center' }}>Increase 3 Time</Text>
                    </TouchableHighlight>

                    <View style={{}}>
                        <Text style={{ fontSize: 22, color: 'grey' }}>Number of Dogs fetched: {data.length}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {data.map((breed) => <Image key={breed.id} source={{ uri: breed.image.url }} style={{ height: 80, width: 80, margin: 10 }} />)}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Counter;

const styles = StyleSheet.create({
    textButton: {
        color: 'white',
        fontSize: 18
        
    }
});
