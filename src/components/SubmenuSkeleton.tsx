import React, { useContext, useEffect } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { OrganizationContext } from '../context/OrganizationContext';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SubmenuSkeleton = ({children, isLoadOrganization = false}: {children: React.ReactNode, isLoadOrganization?: boolean }) => {
    const { logOut, name } = useContext(AuthContext);
    const { organization, loadMainOrganization } = useContext(OrganizationContext);
    const navigation = useNavigation();

    useEffect(() => {
        if (isLoadOrganization) {
            loadMainOrganization();
        }
    }, [isLoadOrganization]);

    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.container,
            marginTop: top + 10
        }}>
            <Text style={styles.titleNameUser}>{name}</Text>
            <View style={styles.separatorNameUser} />
            <View style={{flex:1}}>
                { children }
            </View>
            
            <View style={styles.footer}>
                <View>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('HomeScreen' as never) }
                    >
                        <Text style={styles.title}>{organization?.name}</Text>
                    </TouchableOpacity>
                </View>
                
                
                <View>
                    <TouchableOpacity
                        onPress={ logOut }
                        style={{borderRadius: 20, borderColor: 'black', borderWidth: 3}}
                    >
                        <Text style={{fontSize: 30, color: 'black'}}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>    
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
      color: 'black',
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
    },
    footer: {
        height: 100,
        alignItems: 'center',
        backgroundColor: '#D0BD9F',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    }
  });
