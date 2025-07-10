import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Announcement = {
  title: string;
  author: string;
  date: string;
  message: string;
};

type AnnouncementsProps = {
  announcements: Announcement[];
};

export const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Annonces</Text>
      
      {announcements.map((announcement, index) => (
        <View key={index} style={styles.announcementCard}>
          <View style={styles.header}>
            <Text style={styles.announcementTitle}>{announcement.title}</Text>
            <Text style={styles.date}>{announcement.date}</Text>
          </View>
          <Text style={styles.author}>Par {announcement.author}</Text>
          <Text style={styles.message} numberOfLines={2}>
            {announcement.message}
          </Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#130057',
    marginBottom: 16,
  },
  announcementCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#130057',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});