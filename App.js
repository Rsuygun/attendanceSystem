import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import AttendanceScreen from './screens/AttendanceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: "ÖĞRENCİ BİLGİLENİRME SİSTEMİ" }} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} options={{ title: "YOKLAMAYA KATIL" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}