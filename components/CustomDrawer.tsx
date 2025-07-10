import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerContainer}>
          <Image 
            source={require('../assets/images/icon.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Task Manager</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#130057',
  },
});

export default CustomDrawer;