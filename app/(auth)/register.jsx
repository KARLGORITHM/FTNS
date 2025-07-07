import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'


import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser.jsx'

// just a page utilizing themed components we created. Link to the register page and some inline themes from stylesheet at the bottom

const Register = () => {
    const[email, setEmail] = useState ('')
    const[password, setPassword] = useState ('')


    const {user, register} = useUser ()


        const handleSubmit = async () => {
        try{
            await register(email, password)
        }   catch (error){

        }
    }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemedText title={true} style={styles.title}>
         Register For an Account
        </ThemedText>



         <ThemedTextInput
        style={{width: '80%', marginBottom: 20}}
        placeholder="Email" 
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        />
        

        <ThemedTextInput
        style={{width: '80%', marginBottom: 20}}
        placeholder="Password" 
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        />


        <ThemedButton onPress={handleSubmit}>
            <ThemedText style={{color: '#f2f2f2'}}> Register </ThemedText>
        </ThemedButton>



        <Spacer height={100} />

        <Link href='/login' push>
        <ThemedText style= {{textAlign: 'center'}}>
            Login Instead
        </ThemedText>
        </Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
})