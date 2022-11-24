import React , { useState } from "react";
import { StyleSheet, Text ,TouchableHighlight,TouchableWithoutFeedback,View} from 'react-native';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { decrement, increment, amountAdded } from "./counterSlice";


const   Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    function handleClicked() {

    }
  return (  
      <View style={{flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
         <View style={{height: 380, justifyContent: 'space-evenly'}}>
             <Text style= {{fontSize: 62, textAlign: 'center'}}>{count}</Text>
            <TouchableHighlight onPress={() => dispatch(increment())} style={{backgroundColor: 'orange', padding: 12}} >
                 <Text style= {styles.textButton}>Increase Number</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => dispatch( decrement())} style={{backgroundColor: 'red', padding: 12}} >
                 <Text style= {styles.textButton}>Decrease Number</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => dispatch(amountAdded(3))} style={{backgroundColor: 'yellow', padding: 12}} >
                 <Text style= {{color: 'blue', fontSize: 18, textAlign: 'center'}}>Increase 3 Time</Text>
            </TouchableHighlight>
         </View>
      </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontSize: 18
  }
});
