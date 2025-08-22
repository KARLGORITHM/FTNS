// /app/ladderboard/index.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export default function Ladderboard() {
  // 1️⃣ Get theme from context
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>Ladderboard</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Track your rank and compare with other users.
        </Text>
        {/* Future components: leaderboard list, rankings, user stats */}
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

