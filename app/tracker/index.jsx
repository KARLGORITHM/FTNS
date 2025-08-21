// app/tracker/index.jsx
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function TrackerHome() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tracker</Text>
        <Text style={styles.subtitle}>
          Log your lifts, track progress, and monitor your strength gains.
        </Text>

        {/* Navigation buttons to nested screens */}
        <View style={styles.buttons}>
          <Button
            title="Add Lift"
            onPress={() => router.push('/tracker/add')}
          />
          <Button
            title="History"
            onPress={() => router.push('/tracker/history')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#2f95dc',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    width: '100%',
    gap: 10, // spacing between buttons
  },
});
