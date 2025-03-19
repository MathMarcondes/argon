import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Home';
import CreateAccount from '../CreateAccount';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
           <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}/> 

            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}