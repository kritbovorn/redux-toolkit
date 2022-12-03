import React, { useState } from "react";
import { Text ,TextInput,TouchableHighlight,View} from 'react-native';

const InputComponent = () => {

    const [inputValue, setInputValue] = useState('');
  return (  
     <View style={{}} > 
      <TextInput placeholder="Add todo..." defaultValue="" onChangeText={() => {}} />
      <TouchableHighlight>
         <Text style= {{}}>Add Todo</Text>
      </TouchableHighlight>
    </View>
  );
}

export default InputComponent;



