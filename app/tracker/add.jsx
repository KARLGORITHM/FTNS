// /app/tracker/add.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext'; // Import ThemeContext hook

export default function TrackerAdd() {
  // 1️⃣ Get the current theme from context
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>Add Workout</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          This page will allow you to log a new workout.
        </Text>
        {/* Future components: form inputs, buttons, workout type selectors */}
      </View>
    </SafeAreaView>
  );
}

// 2️⃣ Styles remain mostly static, color comes from theme
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

