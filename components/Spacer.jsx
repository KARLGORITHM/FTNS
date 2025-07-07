import { View } from 'react-native'

//creates a spacer with specific width and height


const Spacer = ({ width = "100", height = 40 }) => {


  return (
    <View style={{ width, height}}/>
  )
}

export default Spacer