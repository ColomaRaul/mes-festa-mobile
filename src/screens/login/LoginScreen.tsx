import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../../components/Background'
import { WhiteLogo } from '../../components/WhiteLogo'
import { loginStyle } from '../../themes/loginTheme'
import { useForm } from '../../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../../context/AuthContext'

interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ({navigation}: Props) => {

    const { logIn, errorMessage, removeError } = useContext(AuthContext);

    const {email, password, onChange} = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (errorMessage.length === 0) return;
        Alert.alert(
            'Login incorrecto', 
            errorMessage,
            [{
                text: 'Ok',
                onPress: removeError
            }]  
        );

    }, [errorMessage]);

    const onLogin = () => {
        Keyboard.dismiss();
        logIn({email, password});
    };

    return (
        <>
            <Background/>
            <KeyboardAvoidingView 
                style={{flex: 1}}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                <View style={loginStyle.formContainer}>
                    <WhiteLogo/>
                    <Text style={loginStyle.title}>Login</Text>

                    <Text style={loginStyle.label}>Email:</Text>
                    <TextInput
                        placeholder="Ingrese su email"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyle.inputField,
                            (Platform.OS === 'ios') && loginStyle.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                    />
                    <Text style={loginStyle.label}>Contraseña:</Text>
                    <TextInput
                        placeholder="*****"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[
                            loginStyle.inputField,
                            (Platform.OS === 'ios') && loginStyle.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                    />

                    <View style={loginStyle.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyle.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyle.title}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
