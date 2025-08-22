// /app/auth/index.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useTheme } from '../../contexts/ThemeContext';

export default function Auth() {
  const { theme } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  // Handle login
  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      Alert.alert('Success', 'Logged in successfully!');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  // Handle registration
  const handleRegister = async () => {
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      Alert.alert('Success', 'Registered successfully! Check your email to confirm.');
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.title }]}>
          {isRegister ? 'Register' : 'Login'}
        </Text>

        <TextInput
          style={[styles.input, { backgroundColor: theme.uiBackground, color: theme.text }]}
          placeholder="Email"
          placeholderTextColor={theme.iconColor}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, { backgroundColor: theme.uiBackground, color: theme.text }]}
          placeholder="Password"
          placeholderTextColor={theme.iconColor}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title={isRegister ? 'Register' : 'Login'}
          onPress={isRegister ? handleRegister : handleLogin}
          color={theme.iconColorFocused}
        />

        <Text
          style={[styles.toggleText, { color: theme.text }]}
          onPress={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, marginVertical: 10, borderRadius: 8 },
  toggleText: { marginTop: 15, textDecorationLine: 'underline' },
});

