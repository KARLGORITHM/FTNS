import { StyleSheet, Text, } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo_light.png'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}> 

      <ThemedLogo/>
      <Spacer height={20}/>

      
      <ThemedText style={styles.title} title={true}> 
        The Number One 
        </ThemedText>  
      

      <Spacer height={10} />
      <ThemedText>Fitness App</ThemedText>    
      <Spacer/>

      <Link  href="/login" style={styles.link} push> 
      <ThemedText> Login Page</ThemedText>   
       </Link> 

      <Link  href="/register" style={styles.link} push> 
      <ThemedText>Register Page</ThemedText>   
       </Link> 

       <Link  href="/profile" style={styles.link} push> 
      <ThemedText>Profile Page</ThemedText>   
       </Link> 

       <Link  href="/create" style={styles.link} push> 
      <ThemedText>Create Page</ThemedText>   
       </Link> 

       <Link  href="/workouts" style={styles.link} push> 
      <ThemedText>Workouts Page</ThemedText>   
       </Link> 

       <Link  href="/about" style={styles.link} push> 
      <ThemedText> About Page</ThemedText>   
       </Link> 

      <Link  href="/contact" style={styles.link} push> 
      <ThemedText>Contact Page</ThemedText>   
       </Link> 


    </ThemedView> 
  )
}

//if I want to use multiple style i would style={[styles.title, {colour: 'purple'}]} , which applies the title style but also specific properties ref. <Text style={styles.title}>The Number One</Text>
//creates a pressable link, href="/about" takes you back to the about.jsx i.e About Page} ref. <Link  href="/about" style={styles.link}> About Page </Link
//creates a pressable link, href="/contact" takes you back to the contact.jsx i.e Contact Page ref. <Link  href="/contact" style={styles.link}> Contact Page </Link> 

export default Home

const styles = StyleSheet.create({  //we create styles than we can call on our Home component to style it
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
  },
})