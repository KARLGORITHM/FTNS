// app/index.jsx
import { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Landing() {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const styles = getStyles(theme);

  // Navigate to Home immediately
  useEffect(() => {
    router.replace('/home');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to FTNS</Text>
        <Text style={styles.subtitle}>
          Your ultimate strength tracking & verified lifting app.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.background },
    content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: theme.title },
    subtitle: { fontSize: 16, color: theme.text, textAlign: 'center' },
  });




