// app/profile/videos.jsx
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileVideos() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Your Videos</Text>
        <Text style={styles.subtitle}>
          This page will display your submitted lift videos, verification results, and highlights.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#2f95dc' },
  subtitle: { fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 20 },
});
