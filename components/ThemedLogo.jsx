import { Image, useColorScheme } from 'react-native'


import DarkLogo from '../assets/img/logo_light.png'
import LightLogo from '../assets/img/logo_light.png'

//picks the Logo depending of the users interface preferance (light or dark)
// const logo = colorScheme === 'dark' ? DarkLogo : LightLogo, is equal to: if colorScheme is dark then dark ELSE light
// the {{...props}} allows for extra properties to be added whenever this components is called on various pages


const ThemedLogo = ({ ...props}) => {
    
    const colorScheme = useColorScheme()


    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo