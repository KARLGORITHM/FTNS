// app/home/index.jsx
import { View, Text, StyleSheet, SafeAreaView, Button, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Page title */}
        <Text style={styles.title}>Welcome to FTNS</Text>
        <Text style={styles.subtitle}>
          Track your lifts, verify your reps, and climb the ladderboard. Your strength journey starts here!
        </Text>

        {/* Quick navigation buttons for testing */}
        <Button
          title="Go to Tracker"
          onPress={() => router.push('/tracker')}
        />
        <Button
          title="Go to Ladderboard"
          onPress={() => router.push('/ladderboard')}
        />
        <Button
          title="Go to Profile"
          onPress={() => router.push('/profile')}
        />
        <Button
          title="Go to Social"
          onPress={() => router.push('/social')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for Home tab
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2f95dc',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
});
