// app/ladderboard/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import LadderboardHome from './index'; // Main ladderboard screen
import { ThemeContext } from '../../contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function LadderboardLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="LadderboardHome"
      screenOptions={{
        headerShown: true, // Show headers
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Main Ladderboard tab screen */}
      <Stack.Screen
        name="LadderboardHome"
        component={LadderboardHome}
        options={{ title: 'Ladderboard' }}
      />
    </Stack.Navigator>
  );
}
