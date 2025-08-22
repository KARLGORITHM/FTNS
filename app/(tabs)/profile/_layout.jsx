// app/profile/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

// Import your profile pages
import ProfileHome from './index';
import ProfileSettings from './settings';
import ProfileVideos from './videos';

const Stack = createNativeStackNavigator();

export default function ProfileLayout() {
  const { theme } = useContext(ThemeContext); // Use app theme

  return (
    <Stack.Navigator
      initialRouteName="ProfileHome"
      screenOptions={{
        headerShown: true, // Show headers for nested navigation
        headerStyle: { backgroundColor: theme.navBackground }, // Theme-based background
        headerTintColor: theme.text, // Theme-based text color
        headerTitleStyle: { fontWeight: 'bold' }, // Bold title
        animation: 'slide_from_right', // Smooth transitions
      }}
    >
      {/* Nested profile pages */}
      <Stack.Screen
        name="ProfileHome"
        component={ProfileHome}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen
        name="ProfileVideos"
        component={ProfileVideos}
        options={{ title: 'Videos' }}
      />
    </Stack.Navigator>
  );
}

