import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type QuickAccessButton = {
  icon: string;
  label: string;
  onPress: () => void;
};

type QuickAccessButtonsProps = {
  buttons: QuickAccessButton[];
};

export const QuickAccessButtons: React.FC<QuickAccessButtonsProps> = ({ buttons }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={button.onPress}
        >
          <MaterialCommunityIcons
            name={button.icon as any}
            size={24}
            color="#130057"
          />
          <Text style={styles.label}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  button: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#130057',
    marginTop: 8,
    textAlign: 'center',
  },
});