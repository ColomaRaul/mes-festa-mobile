import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ProtectedScreen } from '../screens/login/ProtectedScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

export const Router = () => {
    const {status} = useContext(AuthContext);


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                (status === 'authenticated')
                ? (
                    <> 
                        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
                    </>
                )
                : (<Stack.Screen name="LoginScreen" component={LoginScreen} />)
            }
        </Stack.Navigator>
    );
}