import React, { useContext, useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../context/AuthContext';
import { OrganizationContext } from '../../context/OrganizationContext';
import { SubMenuCard } from '../../components/SubMenuCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
    const { logOut, name } = useContext(AuthContext);
    const { organization, loadMainOrganization } = useContext(OrganizationContext);

    useEffect(() => {
        loadMainOrganization();
    }, []);

    const { top } = useSafeAreaInsets();

    const subMenu = [
        {
            'id': 1,
            'title': 'Dades personals',
            'navigate': 'PersonalPageScreen',
        },
        {
            'id': 2,
            'title': 'Notificacions',
            'navigate': 'NotificationScreen',
        },
        {
            'id': 3,
            'title': 'Compters',
            'navigate': 'TransactionsScreen',
        },
        {
            'id': 4,
            'title': 'Documents',
            'navigate': 'DocumentationScreen',
        },
        {
            'id': 5,
            'title': 'Assitencia a Actes',
            'navigate': 'AssitanceScreen',
        },
        {
            'id': 6,
            'title': 'Calendari',
            'navigate': 'CalendarScreen',
        },
    ];

    return (
        <View style={{
            ...styles.container,
            marginTop: top + 10
        }}>
            <Text style={styles.titleNameUser}>{name}</Text>
            <View style={styles.separatorNameUser} />

            <View style={{alignItems: 'center'}}>
                <FlatList
                    keyExtractor={  (item) => item.id.toString() }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    data={subMenu}
                    renderItem={ ({ item }) => ( <SubMenuCard title={ item.title } navigate={item.navigate} /> )}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            paddingBottom: 10
                        }}>{
                            (organization?.name) ? organization?.name : 'Cargant...'
                        } </Text>
                    )}
                >

                </FlatList>
            </View>
            <Button 
                title="logout"
                color="#5856D6"
                onPress={ logOut }
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9E1',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  titleNameUser: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 20
  },
  separatorNameUser: {
    borderBottomWidth: 5,
    borderBottomColor: 'black',
    marginBottom: 15,
    marginHorizontal: 20
  }
});
