import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        backgroundColor: 'coral',
        paddingTop: 16
    }, 
    title: {
        textAlign:'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Header;