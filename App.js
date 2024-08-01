import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import StudentScreen from './screens/StudentScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import TeacherScreen from './screens/TeacherScreen';
import TakingAttendanceScreen from './screens/TakingAttendanceScreen';
import AttendanceListScreen from './screens/AttendanceListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: "ÖĞRENCİ BİLGİLENİRME SİSTEMİ" }} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} options={{ title: "YOKLAMAYA KATIL" }} />
        <Stack.Screen name="Teacher" component={TeacherScreen} options={{ title: "ÖĞRETMEN BİLGİLENDİRME SİSTEMİ" }} />
        <Stack.Screen name="TakingAttendance" component={TakingAttendanceScreen} options={{ title: "YOKLAMA AL" }} />
        <Stack.Screen name="AttendanceList" component={AttendanceListScreen} options={{ title: "YOKLAMA LİSTESİ" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
