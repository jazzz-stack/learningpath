// App.tsx
import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { linking } from './src/utils/linkingConfig';
import { HomeScreen } from './src/containers/HomeScreen';
import { ProfileScreen } from './src/containers/ProfileScreen';
import { SettingsScreen } from './src/containers/SettingsScreen';

// Mock Screens

const NotFoundScreen = () => <Text>Page Not Found</Text>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer 
      linking={linking} 
      fallback={<ActivityIndicator size="large" color="#0000ff" />}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
