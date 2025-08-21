// app/index.jsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Home() {
  return (
    // SafeAreaView ensures content is not hidden by notches/status bars
    <SafeAreaView style={styles.container}>
      {/* Main content container */}
      <View style={styles.content}>
        {/* Placeholder text for the Home tab */}
        <Text style={styles.title}>Welcome to FTNS</Text>
        <Text style={styles.subtitle}>
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
    backgroundColor: '#fff', // background color of the screen
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
    color: '#2f95dc',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});
