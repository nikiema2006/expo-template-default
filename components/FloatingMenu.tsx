import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

export const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      useNativeDriver: true,
      tension: 40,
      friction: 7,
    }).start();
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: 'calendar-clock', route: 'emploie-du-temps', label: 'Emploi du temps' },
    { icon: 'book-open-variant', route: 'devoirs', label: 'Devoirs' },
    { icon: 'message-text', route: 'communiqué', label: 'Communiqués' },
  ];

  return (
    <View style={styles.container}>
      {isOpen && (
        <BlurView intensity={20} tint="light" style={styles.blurContainer}>
          {menuItems.map((item) => {
            const itemAnimation = animation.interpolate({
              inputRange: [0, 1],
              outputRange: [90, 0],
            });

            return (
              <Animated.View
                key={item.route}
                style={[{
                  transform: [{ translateY: itemAnimation }],
                  opacity: animation,
                }, styles.menuItem]}
              >
                <TouchableOpacity
                  onPress={() => {
                    router.push(`/(tabs)/${item.route}` as any);
                    toggleMenu();
                  }}
                  style={styles.iconButton}
                >
                  <MaterialCommunityIcons
                    name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap}
                    size={24}
                    color="#130057"
                  />
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </BlurView>
      )}
      <TouchableOpacity
        style={[styles.plusButton, isOpen && styles.plusButtonActive]}
        onPress={toggleMenu}
      >
        <Animated.View
          style={[{
            transform: [{
              rotate: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '45deg']
              })
            }]
          }]}
        >
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color="#fff"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    alignItems: 'center',
  },
  blurContainer: {
    position: 'absolute',
    bottom: 70,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 10,
    paddingBottom: 20,
  },
  menuItem: {
    marginVertical: 5,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#130057',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusButtonActive: {
    backgroundColor: '#ff4444',
  },
});