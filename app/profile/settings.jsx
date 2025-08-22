// /app/profile/settings.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export default function ProfileSettings() {
  // 1️⃣ Get theme and toggle function from context
  const { theme, themeType, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>Settings</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Manage your profile settings, preferences, and account.
        </Text>

        {/* 2️⃣ Theme toggle */}
        <View style={styles.toggleContainer}>
          <Text style={[styles.toggleLabel, { color: theme.text }]}>
            Dark Mode
          </Text>
          <Switch
            value={themeType === 'dark'}
            onValueChange={toggleTheme}
            thumbColor={themeType === 'dark' ? theme.iconColorFocused : theme.iconColor}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// 3️⃣ Styles
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
    marginTop: 20,
  },
  toggleLabel: { fontSize: 16 },
});



