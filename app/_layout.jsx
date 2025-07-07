import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors} from "../constants/Colors.js"
import { StatusBar } from 'expo-status-bar'
import { AuthProvider } from '../contexts/AuthContext.jsx'


const RootLayout = () => {

const colorScheme = useColorScheme()
const theme = Colors[colorScheme] ?? Colors.light  //Logic: applies the color pallet depending on user device (light or dark) and in case the value is null it set it to light

//tells the expo-router how to render in conjunction with the index page & adds navigation features & can also add global options to all the screens
  return (
    <AuthProvider>
        <StatusBar value="auto" />
        <Stack screenOptions ={{ 
            headerStyle: { backgroundColor: theme.navBackground }, // picks the header colour from the colors.js according to user device (light or dark)
            headerTintColor: theme.title,
        }}> 
            
            

            <Stack.Screen name="index" options={{ title: 'Home'}}/> 
            <Stack.Screen name="about" options={{ title: 'About'}}/>
            <Stack.Screen name="contact" options={{ title: 'Contact'}}/> 

        </Stack>
    </AuthProvider>
  )
}

//adds characteristics to each page of the app ref. <Stack.Screen name="index" options={{ title: 'Home'}}/>
//if I want to hide the header I can add after 'Contact' , headerShown: false

export default RootLayout

const styles = StyleSheet.create({})