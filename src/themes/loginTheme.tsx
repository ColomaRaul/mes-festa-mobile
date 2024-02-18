import { StyleSheet } from "react-native";


export const loginStyle = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'white',
        fontSize: 20,
        marginTop: 25,
        borderRadius: 100,
        borderWidth: 2,
        paddingHorizontal: 20,
        borderColor: 'white',
        height: 50,
    },
    inputFieldIOS: {
        marginTop: 25,
        borderRadius: 100,
        borderWidth: 2,
        paddingHorizontal: 20,
        borderColor: 'white',
        height: 50,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        marginBottom: 50
    }
});