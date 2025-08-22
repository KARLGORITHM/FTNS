// app/_layout.jsx
import { useEffect, useState, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { Tabs } from 'expo-router';
import { supabase } from '../lib/supabase';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';
import { Colors } from '../constants/Colors';

// DEV toggle to bypass auth for testing navigation
const DEV_BYPASS_AUTH = true;

function AppLayoutContent() {
  const { theme } = useContext(ThemeContext); // Consume the theme context
  const [session, setSession] = useState(null);

  // Check user session on mount
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // If no session AND dev bypass is off, show Auth flow
  if (!session && !DEV_BYPASS_AUTH) {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tabs.Screen name="auth" options={{ tabBarButton: () => null }} />
      </Tabs>
    );
  }

  // Show main app tabs
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.iconColorFocused || Colors.primary,
          tabBarInactiveTintColor: theme.iconColor,
          tabBarStyle: { backgroundColor: theme.navBackground, height: 65 },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="tracker"
          options={{
            title: 'Tracker',
            tabBarIcon: ({ color, size }) => <Ionicons name="barbell-outline" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="ladderboard"
          options={{
            title: 'Ladderboard',
            tabBarIcon: ({ color, size }) => <Ionicons name="trophy-outline" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="social"
          options={{
            title: 'Social',
            tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

// Wrap everything in ThemeProvider
export default function AppLayout() {
  return (
    <ThemeProvider>
      <AppLayoutContent />
    </ThemeProvider>
  );
}


