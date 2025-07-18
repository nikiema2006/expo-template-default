import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { Platform, View, StyleSheet } from 'react-native';
import { FloatingMenu } from '../../components/FloatingMenu';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            borderRadius: 15,
            height: 70,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
          },
          tabBarBackground: () => (
            <BlurView
              tint="light"
              intensity={30}
              style={StyleSheet.absoluteFill}
            />
          ),
          tabBarActiveTintColor: '#130057',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: true,
          headerShown: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="message"
          options={{
            title: 'Messages',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="note"
          options={{
            title: 'Notes',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="communiqué"
          options={{
            title: 'Communiqués',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="megaphone-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="devoirs"
          options={{
            title: 'Devoirs',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="emploie-du-temps"
          options={{
            title: 'Emploi du temps',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      <FloatingMenu />
    </View>
  );
}