import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type AbsenceSummaryProps = {
  absences: number;
  lates: number;
};

export const AbsenceSummary: React.FC<AbsenceSummaryProps> = ({ absences, lates }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Absences et retards</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <MaterialCommunityIcons name="calendar-remove" size={24} color="#130057" />
          <Text style={styles.statValue}>{absences}</Text>
          <Text style={styles.statLabel}>Absences</Text>
        </View>
        
        <View style={styles.statItem}>
          <MaterialCommunityIcons name="clock-alert" size={24} color="#130057" />
          <Text style={styles.statValue}>{lates}</Text>
          <Text style={styles.statLabel}>Retards</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#130057',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#130057',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});