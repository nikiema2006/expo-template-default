import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

type Class = {
  subject: string;
  time: string;
  room: string;
  teacher: string;
};

type ScheduleTodayProps = {
  classes: Class[];
};

export const ScheduleToday: React.FC<ScheduleTodayProps> = ({ classes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emploi du temps aujourd'hui</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {classes.map((classItem, index) => (
          <View key={index} style={styles.classCard}>
            <Text style={styles.subject}>{classItem.subject}</Text>
            <Text style={styles.time}>{classItem.time}</Text>
            <Text style={styles.details}>{classItem.room}</Text>
            <Text style={styles.details}>{classItem.teacher}</Text>
          </View>
        ))}
      </ScrollView>
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
  classCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 160,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#130057',
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#130057',
    marginBottom: 4,
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});