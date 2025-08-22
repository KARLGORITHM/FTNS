// /app/tracker/[workoutId].jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../../../contexts/ThemeContext'; // Import ThemeContext hook
import { useRouter, useLocalSearchParams } from 'expo-router'; // For dynamic route params

export default function WorkoutDetail() {
  // 1️⃣ Get theme from context
  const { theme } = useTheme();

  // 2️⃣ Get the dynamic workoutId from URL params
  const { workoutId } = useLocalSearchParams();
  const router = useRouter(); // Optional: for navigation if needed

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>
          Workout Details
        </Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          You are viewing the details for workout ID: {workoutId}
        </Text>
        {/* Future components: display exercises, sets, reps, weights, and stats */}
      </View>
    </SafeAreaView>
  );
}

// 3️⃣ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

