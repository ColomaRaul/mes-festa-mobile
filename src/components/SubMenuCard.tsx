import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width

interface Props {
    title: string;
    navigate: string;
}

export const SubMenuCard = ({ title, navigate }: Props ) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={ 
                () => console.log(navigate)
            }
        >
            <View style={styles.containerCard}>
                <View>
                    
                </View>
                <View>
                    <Text style={styles.menuItemText}>
                        { title }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: '#D0BD9F',
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuItemText: {
      marginVertical: 10,
      textAlign: 'center',
    },
    menuIcon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
