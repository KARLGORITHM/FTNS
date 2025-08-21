// app/tracker/add.jsx
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddLift() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Page title */}
        <Text style={styles.title}>Add a New Lift</Text>
        <Text style={styles.subtitle}>
          Here you will be able to log a new lift with details like weight, reps, RIR, etc.
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

// Styles for AddLift
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
