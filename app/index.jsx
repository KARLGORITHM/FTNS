import { StyleSheet, Text, View, Image } from 'react-native'

import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}> 
      <Image source={Logo} style={styles.img}/>

      <Text style={styles.title}>The Number One</Text>  {/*if I want to use multiple style i would style={[styles.title, {colour: 'purple'}]} , which applies the title style but also specific properties */} 

      <Text style={{marginTop: 10, margineBottom: 30}}>Fitness App</Text>    


    </View> 
  )
}

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
  img:{
    marginVertical: 20, 
  },
})