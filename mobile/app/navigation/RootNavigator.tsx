import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import LoginScreen from '../screens/auth/LoginScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ObservationScreen from '../screens/observation/ObservationScreen';
import ObservationDetailScreen from '../screens/observation/ObservationDetailScreen';
import ReportsScreen from '../screens/reports/ReportsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import RainfallStationsScreen from '../screens/stations/RainfallStationsScreen';
import ChartAnalysisScreen from '../screens/analysis/ChartAnalysisScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#0066cc' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{ title: 'Dashboard Curah Hujan' }}
    />
    <Stack.Screen
      name="ChartAnalysis"
      component={ChartAnalysisScreen}
      options={{ title: 'Analisis Grafik' }}
    />
  </Stack.Navigator>
);

const ObservationStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#0066cc' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="ObservationList"
      component={ObservationScreen}
      options={{ title: 'Data Observasi' }}
    />
    <Stack.Screen
      name="ObservationDetail"
      component={ObservationDetailScreen}
      options={{ title: 'Detail Observasi' }}
    />
  </Stack.Navigator>
);

const StationsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#0066cc' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="StationsList"
      component={RainfallStationsScreen}
      options={{ title: 'Pos Hujan' }}
    />
  </Stack.Navigator>
);

const ReportsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#0066cc' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="ReportsList"
      component={ReportsScreen}
      options={{ title: 'Laporan' }}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#0066cc' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen
      name="SettingsList"
      component={SettingsScreen}
      options={{ title: 'Pengaturan' }}
    />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#0066cc',
      tabBarInactiveTintColor: '#999',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1,
      },
    }}
  >
    <Tab.Screen
      name="DashboardStack"
      component={DashboardStack}
      options={{
        title: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="dashboard" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ObservationStack"
      component={ObservationStack}
      options={{
        title: 'Observasi",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="note-add" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="StationsStack"
      component={StationsStack}
      options={{
        title: 'Pos Hujan',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="location-on" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ReportsStack"
      component={ReportsStack}
      options={{
        title: 'Laporan',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="assessment" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="SettingsStack"
      component={SettingsStack}
      options={{
        title: 'Pengaturan',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigator = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const isLoggedIn = !!user;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainTabs />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
