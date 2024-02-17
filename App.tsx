import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './src/router/Router';
import { AuthProvider } from './src/context/AuthContext';
import { OrganizationProvider } from './src/context/OrganizationContext';

const AppState = ({ children }: any) => {
    return (
      <AuthProvider>
        <OrganizationProvider>
          {children}
        </OrganizationProvider>
      </AuthProvider>
    );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Router />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
