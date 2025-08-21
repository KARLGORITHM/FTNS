// app/tracker/history.jsx
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function History() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Page title */}
        <Text style={styles.title}>Workout History</Text>
        <Text style={styles.subtitle}>
          This page will show your past workouts, lifts, and stats.
        </Text>

        {/* Navigation / placeholder button */}
        <Button
          title="Back to Tracker Home"
          onPress={() => router.push('/tracker')}
        />
      </View>
    </SafeAreaView>
  );
}

// Styles for History
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#2f95dc',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
});
