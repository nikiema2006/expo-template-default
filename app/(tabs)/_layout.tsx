import Colors from '@/constants/Colors'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            height: 63,
            marginHorizontal: 120,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white'
    }}
    >
        <Tabs.Screen name='index' options={{
            tabBarIcon: ({color, size,focused}) => (
                <View style={{
                    padding: 12,
                    borderRadius: 30,
                    borderBlockColor: focused ? Colors.tabIconSelected : Colors.tabIconDefault
                }}>
                    <SimpleLineIcons name='pie-chart' size={size} color={color}/>
                </View>
            )
        }}
        />
        <Tabs.Screen name='message' options={{
            tabBarIcon: ({color, size,focused}) => (
                <View style={{
                    padding: 12,
                    borderRadius: 30,
                    borderBlockColor: focused ? Colors.tabIconSelected : Colors.tabIconDefault
                }}>
                    <SimpleLineIcons name='pie-chart' size={size} color={color}/>
                </View>
            )
        }}
        />
        <Tabs.Screen name='note' options={{
            tabBarIcon: ({color, size,focused}) => (
                <View style={{
                    padding: 12,
                    borderRadius: 30,
                    borderBlockColor: focused ? Colors.tabIconSelected : Colors.tabIconDefault
                }}>
                    <SimpleLineIcons name='pie-chart' size={size} color={color}/>
                </View>
            )
        }}
        />
    </Tabs>
  )
}
export default Layout