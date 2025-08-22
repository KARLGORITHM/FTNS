// app/tracker/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import TrackerHome from './index';
import AddLift from './add';
import History from './history';
import { ThemeContext } from '../../../contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function TrackerLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="TrackerHome"
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
        headerStyle: {
          backgroundColor: theme.navBackground, // Header background matches theme
        },
        headerTintColor: theme.text,       // Back button & icons match theme
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: theme.text,               // Title color matches theme
        },
        headerShadowVisible: false,             // Optional: remove shadow
      }}
    >
      <Stack.Screen
        name="TrackerHome"
        component={TrackerHome}
        options={{ title: 'Tracker' }}
      />
      <Stack.Screen
        name="AddLift"
        component={AddLift}
        options={{ title: 'Add Lift' }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ title: 'History' }}
      />
    </Stack.Navigator>
  );
}



