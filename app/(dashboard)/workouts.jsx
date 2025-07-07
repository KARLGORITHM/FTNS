import {StyleSheet} from 'react-native'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from '../../components/ThemedView'

const Workouts = () => {
    return(
        <ThemedView style={styles.container} safe={true}>

            <Spacer />

            <ThemedText title={true} style={styles.heading}>
                Your Workouts
            </ThemedText>
            


        </ThemedView>
    )
}

export default Workouts

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})