import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { ProtectedScreen } from '../screens/login/ProtectedScreen';

const Stack = createStackNavigator();

export const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
        </Stack.Navigator>
    );
}