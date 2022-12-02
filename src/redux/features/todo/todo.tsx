import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text ,TextInput,TouchableHighlight,View} from 'react-native';
import { colors } from "../../../utils/colors/colors";
import SendReuestIcon from '../../../../assets/svg/send_request_icon.svg';

import { useAddTodoMutation } from "../api/apiSlice";
const Todo = () => {

  let [newTodo, setNewTodo] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = () => {
    addTodo({userId: 1, title: newTodo, completed: false});
    setNewTodo('');
}
  return (  
     <View style={{}} > 
       <View style={{}}>
         <Text style= {{fontSize: 20, fontWeight: '500', color: colors.secondary}}>เพิ่ม กิจกรรมประจำวัน</Text>
       </View>
        <View style={{}}>
            <TextInput placeholder="Add Todo..." defaultValue={newTodo} style={ [styles.textInput, {fontSize: 18, fontWeight: '500'}]}  onChangeText={(value) =>  setNewTodo(value)} />
        </View>
         
         <View style={{height: 70, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
             <TouchableHighlight underlayColor={'transparent'} onPress={() => handleSubmit()} >
                  
                        <SendReuestIcon width={30}  height={30} stroke={colors.primaryBlue} style={{}} />
                  
             </TouchableHighlight>
         </View>
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.background,
    marginVertical: 12,
    padding: 12
  }
});

