import { View, TextInput, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CheckBoxBase } from '@react-native-community/checkbox';
import { useState } from 'react'
import { useNavigation } from 'expo-router';
import Checkbox from 'expo-checkbox';





export default function CreateAccount() {

    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.Sign}>
                    Sign up with
                </Text>
                <View style={styles.buttons}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.button}>
                        <Fontisto name="github" size={17} color="black" style={{alignContent:'space-between'}} />
                        <Text style={{color:'#5E72E4', fontWeight: 'bold', marginStart: 10}}>GITHUB</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={styles.button}>
                        <AntDesign name="google" size={17} color="black" style={{alignContent:'space-between'}}/>
                        <Text style={{color:'#5E72E4', fontWeight: 'bold', marginStart: 10}}>GOOGLE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Input}>
                    <Text style={styles.Sign}>
                        Or sign up with credentials
                    </Text>
                    
                    <TextInput style={{backgroundColor: '#FFFFFF', borderRadius: 10, marginStart: '5%', marginEnd: '10%', marginTop: '5%'}}>
                        Name
                    </TextInput>

                    <TextInput style={{backgroundColor: '#FFFFFF', borderRadius: 10, marginStart: '5%', marginEnd: '10%', marginTop: '5%'}}>
                        Email
                    </TextInput>

                    <TextInput style={{backgroundColor: '#FFFFFF', borderRadius: 10, marginStart: '5%', marginEnd: '10%', marginTop: '5%'}}>
                        Password
                    </TextInput>

                <Text style={{marginStart: '5%', marginTop: '5%'}}>password strenght: <Text style={{color: '#2DCE89', fontWeight: 'bold'}}>strong</Text> </Text>


                    <View style={styles.bottom}>
                        <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}/>
                        
                        <Text style={{marginTop: '5%', marginStart: '5%'}}>I agree with the <Text style={{color: '#5E72E4'}}>Privice Pollyce</Text></Text>
                    </View>
                <TouchableOpacity activeOpacity={0.9}  style={styles.botao}
                onPress={() => navigation.navigate('Home')}>
                    <Text style={{fontSize: 20, color:'#fff', paddingBottom: 18, alignContent: 'center'}}>Create Account</Text>
                </TouchableOpacity>

                    
                </View>


            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1A174D',
        flex: 1
    },
    content:{
        flex: 3,
        backgroundColor: '#fff',
        marginTop: '26%',
        marginBottom: '26%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: 10
        
    },
    Sign:{
        color: 'gray',
        fontWeight: 'bold',
        alignSelf:'center',
        marginTop: '10%',
    },
    buttons:{
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: '5%',
        alignSelf: 'center',
    },
    button:{
        flexDirection: 'row',
        alignContent: 'space-between',
        marginLeft: '15%',
        marginRight: '15%',
        backgroundColor: 'transparent',
        fontSize: 19,
        borderColor: 'black',
        shadowColor: '#000',
        borderRadius: 4,
        shadowOffset:{
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1,
        elevation: 1,
    },
    Input:{
        backgroundColor: '#F4F5F7',
        flex: 1,
        marginTop: '5%',
    },
    checkbox:{
        marginStart: '5%',
        marginTop: '5%'
    },
    bottom:{
        alignContent: 'space-between',
        flexDirection: 'row'

    },
    botao:{
        backgroundColor:'#5E72E4',
        marginTop: '15%',
        marginStart: '20%',
        marginEnd: '20%',
        marginBottom: '15%',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '20',
        borderRadius: 5


    }
    
})