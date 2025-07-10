import { AbsenceSummary } from '@/components/AbsenceSummary';
import { Announcements } from '@/components/Announcements';
import { GradesOverview } from '@/components/GradesOverview';
import { HomeworkList } from '@/components/HomeworkList';
import { QuickAccessButtons } from '@/components/QuickAccessButtons';
import { ScheduleToday } from '@/components/ScheduleToday';
import { WelcomeHeader } from '@/components/WelcomeHeader';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// Données mockées pour le développement
const mockData = {
  student: {
    id: "2023-1234",
    name: "Thomas Dubois",
    avatar: "https://i.pravatar.cc/150?img=8",
    grade: "Seconde A"
  },
  grades: {
    average: 15.5,
    classRank: 3,
    totalStudents: 28,
    recentGrades: [14, 16, 15, 15.5, 17]
  },
  schedule: [
    {
      subject: "Mathématiques",
      time: "8h00 - 9h30",
      room: "Salle 203",
      teacher: "M. Martin"
    },
    {
      subject: "Français",
      time: "9h45 - 11h15",
      room: "Salle 105",
      teacher: "Mme Bernard"
    },
    {
      subject: "Histoire-Géo",
      time: "13h30 - 15h00",
      room: "Salle 308",
      teacher: "M. Durand"
    }
  ],
  homework: [
    {
      subject: "Mathématiques",
      title: "Exercices 15 à 20 page 45",
      dueDate: "Demain"
    },
    {
      subject: "Français",
      title: "Dissertation sur Molière",
      dueDate: "Vendredi"
    }
  ],
  attendance: {
    absences: 2,
    lates: 1
  },
  announcements: [
    {
      title: "Réunion parents-profs",
      author: "Direction",
      date: "15/03/2024",
      message: "La réunion parents-professeurs aura lieu le 25 mars de 17h à 20h."
    },
    {
      title: "Sortie scolaire",
      author: "M. Durand",
      date: "14/03/2024",
      message: "Sortie au musée d'histoire prévue le 28 mars. N'oubliez pas de rapporter l'autorisation parentale."
    }
  ],
  quickAccess: [
    {
      icon: "notebook",
      label: "Notes",
      onPress: () => console.log("Notes")
    },
    {
      icon: "book-open-variant",
      label: "Devoirs",
      onPress: () => console.log("Devoirs")
    },
    {
      icon: "calendar-month",
      label: "Emploi du temps",
      onPress: () => console.log("EDT")
    },
    {
      icon: "file-document",
      label: "Bulletin",
      onPress: () => console.log("Bulletin")
    }
  ]
};

export default function StudentHomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <WelcomeHeader student={mockData.student} />
      <GradesOverview {...mockData.grades} />
      <ScheduleToday classes={mockData.schedule} />
      <HomeworkList 
        homework={mockData.homework}
        onSeeAll={() => console.log("Voir tous les devoirs")}
      />
      <AbsenceSummary {...mockData.attendance} />
      <Announcements announcements={mockData.announcements} />
      <QuickAccessButtons buttons={mockData.quickAccess} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f5',
  },
});