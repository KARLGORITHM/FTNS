// app/_layout.jsx
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Tabs } from 'expo-router';
import { supabase } from '../lib/supabase'; // Make sure this path points to your supabase client
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from '../context/ThemeContext'; // Import the ThemeProvider

export default function AppLayout() {
  // Local state to track the current session (logged-in user)
  const [session, setSession] = useState(null);

  // On mount, check if the user is already logged in
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session); // Save session in state
    };
    getSession();

    // Listen for auth changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session); // Update session when auth state changes
    });

    // Cleanup listener on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Wrap the entire app in the ThemeProvider
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* If no session exists, show the Auth flow */}
        {!session ? (
          <Tabs
            screenOptions={{
              headerShown: false,
              tabBarStyle: { display: 'none' }, // hide tabs while in auth
            }}
          >
            {/* Auth tab is hidden, just routes user to auth stack */}
            <Tabs.Screen name="auth" options={{ tabBarButton: () => null }} />
          </Tabs>
        ) : (
          // If user is logged in, show the main app tabs
          <Tabs
            screenOptions={{
              headerShown: false, // hide headers for now
              tabBarActiveTintColor: '#2f95dc', // active tab color
              tabBarInactiveTintColor: 'gray', // inactive tab color
              tabBarStyle: { backgroundColor: '#fff', height: 65 }, // styling for the tab bar
            }}
          >
            {/* Home Tab */}
            <Tabs.Screen
              name="home"
              options={{
                title: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
                ),
              }}
            />

            {/* Tracker Tab */}
            <Tabs.Screen
              name="tracker"
              options={{
                title: 'Tracker',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="barbell-outline" size={size} color={color} />
                ),
              }}
            />

            {/* Ladderboard Tab */}
            <Tabs.Screen
              name="ladderboard"
              options={{
                title: 'Ladderboard',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="trophy-outline" size={size} color={color} />
                ),
              }}
            />

            {/* Profile Tab */}
            <Tabs.Screen
              name="profile"
              options={{
                title: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />

            {/* Social Tab */}
            <Tabs.Screen
              name="social"
              options={{
                title: 'Social',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="people-outline" size={size} color={color} />
                ),
              }}
            />
          </Tabs>
        )}
      </SafeAreaView>
    </ThemeProvider>
  );
}

