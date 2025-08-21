// /app/tracker/[workoutId].jsx
import { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { useRouter, useSearchParams } from 'expo-router';

export default function WorkoutDetails() {
  const { theme } = useContext(ThemeContext); // Get the current theme
  const { workoutId } = useSearchParams(); // Get the dynamic route param
  const router = useRouter(); // Optional: for navigation if needed

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>
          Workout Details
        </Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Viewing details for workout ID: {workoutId}
        </Text>
        <Text style={[styles.info, { color: theme.text }]}>
          This page is a placeholder. Add workout stats, logs, or any other details here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  info: { fontSize: 14, textAlign: 'center' },
});
