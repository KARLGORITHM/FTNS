// app/profile/settings.jsx
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Make sure this path is correct

export default function ProfileSettings() {
  // Get current theme, dark mode state, and toggle function from ThemeContext
  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        {/* Page title */}
        <Text style={[styles.title, { color: theme.title }]}>Settings</Text>

        {/* Subtitle / description */}
        <Text style={[styles.subtitle, { color: theme.text }]}>
          This page will include profile settings, preferences, and account management options.
        </Text>

        {/* Dark Mode toggle */}
        <View style={styles.toggleContainer}>
          <Text style={[styles.toggleLabel, { color: theme.text }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}           // current toggle state
            onValueChange={toggleTheme}  // function to switch dark/light
            trackColor={{ false: '#ccc', true: theme.primary }}
            thumbColor={isDarkMode ? theme.primary : '#fff'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    paddingVertical: 15,
  },
  toggleLabel: { fontSize: 18 },
});

