import CustomDrawer from "@/components/CustomDrawer";
import { Drawer } from 'expo-router/drawer';
import React from "react";
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#130057',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#fff',
        },
        drawerActiveTintColor: '#130057',
      }}
    >
      <Drawer.Screen 
        name="index" 
        options={{ 
          drawerLabel: 'Accueil',
          title: 'Accueil'
        }} 
      />
      <Drawer.Screen 
        name="StudentHomeScreen" 
        options={{ 
          drawerLabel: 'Rechercher',
          title: 'Rechercher'
        }} 
      />
      <Drawer.Screen 
        name="analytics" 
        options={{ 
          drawerLabel: 'Analytiques',
          title: 'Analytiques'
        }} 
      />
      <Drawer.Screen 
        name="wallet" 
        options={{ 
          drawerLabel: 'Portefeuille',
          title: 'Portefeuille'
        }} 
      />
      <Drawer.Screen 
        name="profile" 
        options={{ 
          drawerLabel: 'Profil',
          title: 'Profil'
        }} 
      />
    </Drawer>
  );
}