import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../../components/Background'
import { WhiteLogo } from '../../components/WhiteLogo'
import { loginStyle } from '../../themes/loginTheme'

export const LoginScreen = () => {
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
                        /* onChangeText={(value) => onChange(value, 'email')}
                        value={form.email}  */
                    />
                    <Text style={loginStyle.label}>Contraseña:</Text>
                    <TextInput
                        placeholder="*****"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyle.inputField,
                            (Platform.OS === 'ios') && loginStyle.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        /* onChangeText={(value) => onChange(value, 'email')}
                        value={form.email}  */
                    />

                    <View style={loginStyle.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyle.button}
                        >
                            <Text style={loginStyle.title}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
