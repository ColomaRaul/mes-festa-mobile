import React, { useContext, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../context/AuthContext';
import { OrganizationContext } from '../../context/OrganizationContext';

export const HomeScreen = () => {
    const { token, logOut } = useContext(AuthContext);
    const { organization, loadMainOrganization } = useContext(OrganizationContext);

    useEffect(() => {
        loadMainOrganization();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home organization</Text>
            <Text style={styles.title}>El token es: {token}</Text>
            <Text style={styles.title}>La organización es: {organization?.name}</Text>
            <Text style={styles.title}>La organización id: {organization?.id}</Text>
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
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
      fontSize: 20,
      marginBottom: 20,
      marginHorizontal: 5
  }
});
