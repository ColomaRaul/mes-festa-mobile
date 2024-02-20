import React from 'react'
import { FlatList, View } from 'react-native'
import { SubMenuCard } from '../../components/SubMenuCard';
import { SubmenuSkeleton } from '../../components/SubMenuHome';

export const HomeScreen = () => {
    const subMenu = [
        {
            'id': 1,
            'title': 'Dades personals',
            'navigate': 'PersonalPageScreen',
            'icon': 'person-circle'
        },
        {
            'id': 2,
            'title': 'Notificacions',
            'navigate': 'NotificationScreen',
            'icon': 'notifications'
        },
        {
            'id': 3,
            'title': 'Compters',
            'navigate': 'TransactionsScreen',
            'icon': 'logo-euro',
        },
        {
            'id': 4,
            'title': 'Documents',
            'navigate': 'DocumentationScreen',
            'icon': 'document-text'
        },
        {
            'id': 5,
            'title': 'Assitencia a Actes',
            'navigate': 'AssitanceScreen',
            'icon': 'people'
        },
        {
            'id': 6,
            'title': 'Calendari',
            'navigate': 'CalendarScreen',
            'icon': 'calendar'
        },
    ];

    return (
        <SubmenuSkeleton>
            <View style={{alignItems: 'center'}}>
                <FlatList
                    keyExtractor={  (item) => item.id.toString() }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    data={subMenu}
                    renderItem={ ({ item }) => ( <SubMenuCard title={ item.title } navigate={item.navigate} icon={item.icon}/> )}
                >
                </FlatList>
            </View>
        </SubmenuSkeleton>
    )
}