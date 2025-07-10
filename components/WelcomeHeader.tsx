import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Types pour les props du composant
type WelcomeHeaderProps = {
  student: {
    id: string;
    name: string;
    avatar: string;
    grade: string;
  };
};

// Composant d'en-tête avec les informations de l'élève
export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ student }) => {
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: student.avatar }}
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.id}>ID: {student.id}</Text>
          <Text style={styles.grade}>{student.grade}</Text>
        </View>
      </View>
      <Text style={styles.date}>{today}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#130057',
  },
  id: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  grade: {
    fontSize: 16,
    color: '#130057',
    marginTop: 2,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});