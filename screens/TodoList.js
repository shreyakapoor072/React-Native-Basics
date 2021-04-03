/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   FlatList,
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   TouchableWithoutFeedback,
   Keyboard
 } from 'react-native';
 import Header from '../components/Header';
 import AddTodo from '../components/AddTodo';
 
 
 const TodoList = () => {
 
   const [todos, setTodos] = useState([
     { text: 'buy coffee', key: '1' },
     { text: 'create an app', key: '2' },
     { text: 'play on the switch', key: '3'}
   ])

   const deleteTodo = (id) => {
       setTodos((prevTodos) => {
            return prevTodos.filter(item => item.key !== id)
       })
   }

   const addNewTodo = (val) => {
        setTodos((prevTodos) => {
            return [{text: val, key: Math.random()}, ...prevTodos]
        })
   }
   
   return (
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     <View style={styles.container}> 
       <Header />
       <View style={styles.content}>
        <AddTodo addNewTodo={addNewTodo} />
         <View style={styles.list}>
             <FlatList 
               data={todos}
               renderItem={({item}) => {
                 return <TouchableOpacity style={styles.listItem} onPress={() => deleteTodo(item.key)}>
                     <Text>{item.text}</Text>
                    </TouchableOpacity>
               }}
             />
         </View>
       </View>
     </View>
     </TouchableWithoutFeedback>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex:1,
     backgroundColor: '#fff',
   },
   content:{
      padding: 10,
      backgroundColor: 'pink',
      flex: 1
   },
   list: {
     flex: 1, // if flex to content so that it can scroll
     marginTop: 20
   },
   listItem:{
     borderColor: '#000',
     borderWidth: 1,
     padding: 20,
     marginTop: 16,
     borderStyle: 'dashed'
   }
 });
 
 export default TodoList;
 