import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page1 from '../Page1';
import CreateAccount from '../CreateAccount';
import Home from '../Home';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
           <Stack.Screen
                name="Page1"
                component={Page1}
                options={{headerShown: false}}/> 

            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{headerShown: true}}/>

            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: true}}/>
                    
        </Stack.Navigator>
    )
}