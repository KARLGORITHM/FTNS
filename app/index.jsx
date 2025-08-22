// app/index.jsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; // Import the ThemeContext

export default function Home() {
  // Get the current theme from the context
  const { theme } = useContext(ThemeContext);

  return (
    // SafeAreaView ensures content is not hidden by notches/status bars
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]} // dynamic background
    >
      {/* Main content container */}
      <View style={styles.content}>
        {/* Placeholder text for the Home tab */}
        <Text style={[styles.title, { color: theme.title }]}>Welcome to FTNS</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Your ultimate strength tracking & verified lifting app.
        </Text>
        {/* This is the place to add future components like feed, tips, quick links */}
      </View>
    </SafeAreaView>
  );
}

// Styles for the Home page
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center', // center horizontally
    justifyContent: 'center', // center vertically
    paddingHorizontal: 20, // padding to avoid edges
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

