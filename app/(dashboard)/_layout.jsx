import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const DashboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light 
  return (
    <Tabs 
      screenOptions={{headerShown: false, tabBarStyle: {
        backgroundColor: theme.navBackground, 
        paddingTop: 2,
        height: 90
      },
        tabBarActiveTintColor : theme.iconColorFocused,
        tabBarInactiveTintColor : theme.iconColor
    }}

    >
        <Tabs.Screen 
        name ="profile" 
        options={{title: 'Profile', tabBarIcon: ({focused}) => (
          <Ionicons
            size={24}
            name={focused ? 'person' : 'person-outline'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

         <Tabs.Screen 
        name ="workouts" 
        options={{title: 'Wourkouts', tabBarIcon: ({focused}) => (
          <Ionicons
            size={24}
            name={focused ? 'fitness' : 'fitness-outline'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />

         <Tabs.Screen 
        name ="create" 
        options={{title: 'Create', tabBarIcon: ({focused}) => (
          <Ionicons
            size={24}
            name={focused ? 'create' : 'create-outline'}
            color={focused ? theme.iconColorFocused : theme.iconColor}
            />
        )}}
        />


      </Tabs>
  )
}

export default DashboardLayout