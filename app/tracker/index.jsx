// /app/tracker/index.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext'; // Import ThemeContext hook

export default function TrackerIndex() {
  // 1️⃣ Get the current theme from context
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>Tracker</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          This page will show your workouts, progress, and stats.
        </Text>
        {/* Future components: workout list, quick add, filters */}
      </View>
    </SafeAreaView>
  );
}

// 2️⃣ Styles remain mostly static, color will come from theme
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


