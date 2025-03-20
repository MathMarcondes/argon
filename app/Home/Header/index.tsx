import { View, TextInput, Text, StyleSheet   } from 'react-native';

import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';




export default function Header() {
 return (
   
   <View style={styles.container}>

      
    
      <TextInput style={styles.Search}>What are you looking for?<Ionicons name="notifications" size={19} color="black" /></TextInput>
      
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
       
    },
    Search:{
        marginTop: '5%',
        marginStart: '5%',
        marginEnd: '5%',
        backgroundColor: '#ffff',
        borderBlockColor: 'black',
        alignContent: 'space-between'
    }
})