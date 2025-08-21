// app/auth/_layout.jsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    // Stack navigator for Auth flow
    <Stack
      screenOptions={{
        headerShown: true, // show header for login/register pages
        headerTitleAlign: 'center',
      }}
    >
      {/* Default screen for /auth */}
      <Stack.Screen
        name="index"
        options={{ title: 'Authentication' }}
      />
      {/* Login screen */}
      <Stack.Screen
        name="login"
        options={{ title: 'Login' }}
      />
      {/* Register screen */}
      <Stack.Screen
        name="register"
        options={{ title: 'Register' }}
      />
    </Stack>
  );
}
