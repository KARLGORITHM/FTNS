import { StyleSheet, useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView.jsx'
import { Colors} from "../constants/Colors.js"
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Contact = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
   <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>

      <ThemedText style={styles.title}>Contact Page</ThemedText>

      <Link href="/" style={styles.link} push> 
      <ThemedText> Back Home </ThemedText>
      </Link> 

    </ThemedView>
  )
}


//reates a pressable link, href="/" takes you back to the index.jsx i.e Home screen ref. <Link href="/" style={styles.link}> Back Home</Link> 

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
     },
    title: {                          //this is applied directly to the text itself (bold) on top of the all in all styling we applied to the view (center font size and so on)
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }

})