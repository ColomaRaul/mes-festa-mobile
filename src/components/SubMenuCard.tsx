import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width

interface Props {
    title: string;
    navigate: string;
    icon: string;
}

export const SubMenuCard = ({ title, navigate, icon }: Props ) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={ 
                () => navigation.navigate(navigate as never)
            }
        >
            <View style={styles.containerCard}>
                <View style={styles.menuIcon}>
                    <Icon
                        name={ icon }
                        color="black"
                        size={100}
                    />
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
        height: 160,
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
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
  });
