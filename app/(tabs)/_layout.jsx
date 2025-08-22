// app/(tabs)/_layout.jsx
import { useEffect, useState, useContext } from 'react';
import { Tabs } from 'expo-router';
import { supabase } from '../../lib/supabase';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Colors } from '../../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DEV_BYPASS_AUTH = true;

function AppLayoutContent() {
  const { theme } = useContext(ThemeContext);
  const insets = useSafeAreaInsets();
  const [session, setSession] = useState(null);

  // Check user session
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

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

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.iconColorFocused || Colors.primary,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          height: 45 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? 5 : 0,
        },
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
  );
}

export default function AppLayout() {
  return <AppLayoutContent />;
}




