// app/tracker/_layout.jsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackerHome from './index'; // Main tracker screen
import AddLift from './add';       // Future screen to add a lift
import History from './history';    // Future screen to see past workouts

const Stack = createNativeStackNavigator();

export default function TrackerLayout() {
  return (
    <Stack.Navigator
      initialRouteName="TrackerHome"
      screenOptions={{
        headerShown: true, // Show headers for nested screens
        animation: 'slide_from_right', // Smooth screen transitions
      }}
    >
      {/* Main Tracker tab screen */}
      <Stack.Screen
        name="TrackerHome"
        component={TrackerHome}
        options={{ title: 'Tracker' }}
      />

      {/* Add a lift screen */}
      <Stack.Screen
        name="AddLift"
        component={AddLift}
        options={{ title: 'Add Lift' }}
      />

      {/* Workout history screen */}
      <Stack.Screen
        name="History"
        component={History}
        options={{ title: 'History' }}
      />
    </Stack.Navigator>
  );
}
