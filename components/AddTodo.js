import React, {useState} from 'react';
 import {
   TextInput,
   StyleSheet,
   View,
   Button
 } from 'react-native';


export default function AddTodo(props) {
    const [ text, setText] = useState('');

    const inputChanged = (val) => {
        setText(val);
    }
     return (
         <View>
             <TextInput style={styles.form} placeholder="add text here" onChangeText={inputChanged}/>
             <Button title="add todo" color="coral" onPress={() => props.addNewTodo(text)} />
         </View>
     )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#eee"
    }
})