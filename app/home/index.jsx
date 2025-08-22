// /app/home/index.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export default function Home() {
  // 1️⃣ Get theme from context
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>Welcome to FTNS</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Your ultimate strength tracking & verified lifting app.
        </Text>
        {/* Future components: feed, tips, quick links */}
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
    alignItems: 'center',
    justifyContent: 'center',
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

