import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counter_slice";

const Counter = () => {

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    disPatch(reset());
  }

  const count = useSelector((state: { counter: { count: any; } }) => state.counter.count);
  const disPatch = useDispatch();
  console.log(`Hey ${count}`);
  
  return (
    <SafeAreaView style={{ flex: 1}}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
        <Text style={{ fontSize: 100, color: 'yellow' }}>{count}</Text>

      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' , paddingHorizontal: 20}}>
        <TouchableHighlight underlayColor={'transparent'} onPress={() => disPatch(increment())} style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={[styles.text]}>+</Text>

        </TouchableHighlight>

        <View style={{ width: 45 }}></View>

        <TouchableHighlight underlayColor={'transparent'} onPress={() => disPatch(decrement())} style={[styles.button, { backgroundColor: 'red' }]}>
          <Text style={[styles.text]}>-</Text>
        </TouchableHighlight>
      </View>


      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <TextInput placeholder="0" defaultValue={String(incrementAmount)} onChangeText={(e) => setIncrementAmount(Number(e))} style={{ fontSize: 44, backgroundColor: 'lightgrey', alignSelf: 'flex-start', padding: 12, width: '100%' }} />

        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableHighlight onPress={() => disPatch(incrementByAmount(addValue))} style={[styles.button, { backgroundColor: 'orange', borderRadius: 32}]} >
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Add +++</Text>
          </TouchableHighlight>
           <View style={{width: 40}}></View>
          <TouchableHighlight onPress={() => resetAll()} style={[styles.button, { backgroundColor: 'red', borderRadius: 8 }]} >
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>RESET</Text>
          </TouchableHighlight>
        </View>
      </View>

    </SafeAreaView>
  );
}

export default Counter;


const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: 'white',
    // textAlign: 'center'
  },
  button: {
    width: '40%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
