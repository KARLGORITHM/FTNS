// app/home/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import HomeScreen from './index'; // Main Home screen
import { ThemeContext } from '../../../contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function HomeLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true, // Show headers
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Main Home tab screen */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
}
