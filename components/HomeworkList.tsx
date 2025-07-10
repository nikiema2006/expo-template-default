import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Homework = {
  subject: string;
  title: string;
  dueDate: string;
};

type HomeworkListProps = {
  homework: Homework[];
  onSeeAll: () => void;
};

export const HomeworkList: React.FC<HomeworkListProps> = ({ homework, onSeeAll }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Devoirs à faire</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>Voir tout</Text>
        </TouchableOpacity>
      </View>

      {homework.map((item, index) => (
        <View key={index} style={styles.homeworkItem}>
          <View style={styles.homeworkHeader}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.dueDate}>{item.dueDate}</Text>
          </View>
          <Text style={styles.homeworkTitle}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#130057',
  },
  seeAll: {
    fontSize: 14,
    color: '#130057',
  },
  homeworkItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  homeworkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  subject: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#130057',
  },
  dueDate: {
    fontSize: 12,
    color: '#666',
  },
  homeworkTitle: {
    fontSize: 14,
    color: '#333',
  },
});