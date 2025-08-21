// app/ladderboard/index.jsx
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Ladderboard() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Page title */}
        <Text style={styles.title}>Ladderboard</Text>
        <Text style={styles.subtitle}>
          This page will display rankings, tiered lifts, and competitive stats of users.
        </Text>

        {/* Placeholder button for navigation testing */}
        <Button
          title="Go to Tracker"
          onPress={() => router.push('/tracker')}
        />
        <Button
          title="Go to Profile"
          onPress={() => router.push('/profile')}
        />
      </View>
    </SafeAreaView>
  );
}

// Styles for Ladderboard tab
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
