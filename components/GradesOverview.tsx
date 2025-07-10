import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

type GradesOverviewProps = {
  average: number;
  classRank: number;
  totalStudents: number;
  recentGrades: number[];
};

export const GradesOverview: React.FC<GradesOverviewProps> = ({
  average,
  classRank,
  totalStudents,
  recentGrades,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progression académique</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{average.toFixed(2)}</Text>
          <Text style={styles.statLabel}>Moyenne générale</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{classRank}/{totalStudents}</Text>
          <Text style={styles.statLabel}>Rang</Text>
        </View>
      </View>

      <LineChart
        data={{
          labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
          datasets: [{
            data: recentGrades
          }]
        }}
        width={300}
        height={180}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(19, 0, 87, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        style={styles.chart}
        bezier
      />
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
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#130057',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});