// app/profile/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from 'expo-router';

// Import your profile pages
import ProfileHome from './index';
import ProfileSettings from './settings';
import ProfileVideos from './videos';

const Stack = createNativeStackNavigator();

export default function ProfileLayout() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileHome"
      screenOptions={{
        headerShown: true, // Show headers for nested navigation
        headerStyle: { backgroundColor: '#2f95dc' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Nested profile pages */}
      <Stack.Screen name="ProfileHome" component={ProfileHome} options={{ title: 'Profile' }} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{ title: 'Settings' }} />
      <Stack.Screen name="ProfileVideos" component={ProfileVideos} options={{ title: 'Videos' }} />
    </Stack.Navigator>
  );
}
