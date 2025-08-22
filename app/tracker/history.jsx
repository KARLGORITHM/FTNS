// /app/tracker/history.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext'; // Import ThemeContext hook

export default function TrackerHistory() {
  // 1️⃣ Get the current theme from context
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>Workout History</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Here you'll see a log of all your previous workouts.
        </Text>
        {/* Future components: list of workouts, filter by date/type, summary stats */}
      </View>
    </SafeAreaView>
  );
}

// 2️⃣ Styles
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

