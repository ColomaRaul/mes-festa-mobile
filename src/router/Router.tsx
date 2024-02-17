import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { OrganizationNavigator } from './OrganizationRouter';

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
                        <Stack.Screen name="OrganizationRouter" component={OrganizationNavigator} />
                    </>
                )
                : (<Stack.Screen name="LoginScreen" component={LoginScreen} />)
            }
        </Stack.Navigator>
    );
}