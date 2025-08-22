// app/social/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import SocialHome from './index'; // Main social screen
import { ThemeContext } from '../../contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function SocialLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="SocialHome"
      screenOptions={{
        headerShown: true, // Show headers
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Main Social tab screen */}
      <Stack.Screen
        name="SocialHome"
        component={SocialHome}
        options={{ title: 'Social' }}
      />
    </Stack.Navigator>
  );
}
