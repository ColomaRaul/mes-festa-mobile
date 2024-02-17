import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/organization/HomeScreen';
import { TransactionScreen } from '../screens/organization/TransactionScreen';
import { DocumentationScreen } from '../screens/organization/DocumentationScreen';
import { PersonalPageScreen } from '../screens/organization/PersonalPageScreen';
import { CalendarScreen } from '../screens/organization/CalendarScreen';

export type OrganizationStackParams = {
    HomeScreen: undefined,
    TransactionsScreen: { id?: string, name?: string},
    CalendarScreen: { id?: string, name?: string },
    PersonalPageScreen: { id?: string, name?: string },
    DocumentationScreen: { id?: string, name?: string },
}

const Stack = createStackNavigator<OrganizationStackParams>();

export const OrganizationNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >


            <Stack.Screen 
                name="HomeScreen"
                component={ HomeScreen }
                options={{ title: 'Home' }}
            />

            <Stack.Screen 
                name="TransactionsScreen"
                component={ TransactionScreen }
            />

            <Stack.Screen 
                name="DocumentationScreen"
                component={ DocumentationScreen }
            />

            <Stack.Screen 
                name="PersonalPageScreen"
                component={ PersonalPageScreen }
            />

            <Stack.Screen 
                name="CalendarScreen"
                component={ CalendarScreen }
            />
        </Stack.Navigator>
    )
}