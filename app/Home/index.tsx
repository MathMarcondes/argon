import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";


import {LinearGradient} from 'expo-linear-gradient';

export default function Home() {
  const navigation = useNavigation();

  return (
    
    <LinearGradient style={styles.container}
        colors={["#281483", "#8F6ED5", "#D782D9"]}
        
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        >
      <Text style={{
        color: '#fff', 
        fontWeight: 'bold', 
        alignItems: 'center',
        paddingStart: '35%',
        marginTop: '25%',
        alignContent: 'center',
        fontSize: 45

      }}>argon</Text>


      <Text style={{
        color: '#fff', 
        fontWeight: 'bold', 
        alignItems: 'center',
        paddingStart: '10%',
        marginTop: '45%',
        alignContent: 'center',
        fontSize: 57

      }}>Design System</Text>

      <Text style={{
        color: '#fff',
        paddingStart: '10%',
        fontSize: 16,
        marginTop: 20

      }}>Fully coded React Native components.</Text>

      <TouchableOpacity activeOpacity={0.9}
      style={{
        backgroundColor: '#fff',
        marginTop: '40%',
        marginStart: '10%',
        marginEnd: '10%',
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 5}}>
          <Text style={{
            fontWeight: 'bold',
            marginStart: '38%'
            }}
            
          onPress={() => navigation.navigate('CreateAccount')}>Get Started</Text>
      </TouchableOpacity>

      

      
    </LinearGradient>

  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})