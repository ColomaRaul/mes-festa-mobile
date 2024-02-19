import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/organization/HomeScreen';
import { TransactionScreen } from '../screens/organization/TransactionScreen';
import { DocumentationScreen } from '../screens/organization/DocumentationScreen';
import { PersonalPageScreen } from '../screens/organization/PersonalPageScreen';
import { CalendarScreen } from '../screens/organization/CalendarScreen';
import { AssistanceScreen } from '../screens/organization/AssistanceScreen';

export type OrganizationStackParams = {
    HomeScreen: undefined,
    TransactionsScreen: { id?: string, name?: string},
    CalendarScreen: { id?: string, name?: string },
    PersonalPageScreen: { id?: string, name?: string },
    DocumentationScreen: { id?: string, name?: string },
    AssitanceScreen: { id?: string, name?: string },
}

const Stack = createStackNavigator<OrganizationStackParams>();

export const OrganizationNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#EDE9E1'
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                headerShown: false
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
                options={{ title: 'Compters' }}
            />
            <Stack.Screen 
                name="DocumentationScreen"
                component={ DocumentationScreen }
                options={{ title: 'Documents' }}
            />
            <Stack.Screen 
                name="PersonalPageScreen"
                component={ PersonalPageScreen }
                options={{ title: 'Dades personals' }}
            />
            <Stack.Screen 
                name="CalendarScreen"
                component={ CalendarScreen }
                options={{ title: 'Calendari' }}
            />
            <Stack.Screen
                name="AssitanceScreen"
                component={ AssistanceScreen}
                options={{ title: 'Calendari' }}
            />
        </Stack.Navigator>
    )
}