import { Tabs } from 'expo-router'


export default function TabLayout() {
  return (
   <Tabs
    screenOptions={{
        tabBarShowLabel: false,
    }}
   
   
   >
     <Tabs.Screen name="index"/>
     <Tabs.Screen name="emploie"/>
     <Tabs.Screen name="commun"/>
     <Tabs.Screen name="explore"/>
   </Tabs>
  )
}