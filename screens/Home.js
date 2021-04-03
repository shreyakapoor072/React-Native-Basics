import React from 'react';
import {
Button,
  View,
  Text,
  StyleSheet
} from 'react-native';


export default function Home(props) {

    return <View>
        <Text style={styles.heading}>Welcome to home page</Text>
        <Button title="go to todolist" color="coral" onPress={() => props.navigation.navigate('TodoList')}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
    },
    heading: {
        color: 'coral',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20
    }
    
  });
  

