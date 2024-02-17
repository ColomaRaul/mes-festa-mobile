import React, { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";
import mesFestaApi from "../api/mesFestaApi";
import { LoginResponse, LoginRequest, LoginResponseError } from '../intefaces/loginInterface';
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
    errorMessage: string;
    token: string | null;
    roles: string[] | null;
    name: string;
    email: string;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    logIn: (loginRequest: LoginRequest) => void;
    logOut: () => void;
    removeError: () => void;
};

const authInitialState: AuthContextType = {
    errorMessage: '',
    token: null,
    roles: null,
    name: '',
    email: '',
    status: 'checking',
    logIn: () => {},
    logOut: () => {},
    removeError: () => {}
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        const userLoged = await AsyncStorage.getItem('userLoged');
        
        if (!userLoged) return dispatch({ type: 'notAuthenticated' });

        const userLogedParse = JSON.parse(userLoged);
        dispatch({
            type: 'logIn',
            payload: userLogedParse
        });
        
    };

    const logIn = async ({ email, password }:LoginRequest) => {
        try {
            const resp = await mesFestaApi.post<LoginResponse>('/user/login', { email, password });
            dispatch({
                type: 'logIn',
                payload: {
                    token: resp.data.access_token,
                    name: resp.data.name,
                    roles: resp.data.roles,
                    email: resp.data.email
                }
            });
            const storeUserLoged = JSON.stringify({
                token: resp.data.access_token,
                name: resp.data.name,
                roles: resp.data.roles,
                email: resp.data.email
            });
            await AsyncStorage.setItem('userLoged', storeUserLoged);
        } catch (error: LoginResponseError | any) {
            dispatch({
                type: 'addError',
                payload: 'Información de login incorrecta'
            })
        }
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('userLoged');
        dispatch({ type: 'logOut' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            logIn,
            logOut,
            removeError
        }}>
            { children }
        </AuthContext.Provider>
    )
}