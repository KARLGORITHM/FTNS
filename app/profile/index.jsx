// app/profile/index.jsx
import { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Profile() {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>
          View and manage your profile, stats, and settings.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.background },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: theme.title },
    subtitle: { fontSize: 16, color: theme.text, textAlign: 'center' },
  });

