import { StyleSheet, Pressable, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link } from 'expo-router'
import { Colors} from "../../constants/Colors.js"

import Spacer from '../../components/Spacer.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedView from '../../components/ThemedView.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser.jsx'

// just a page utilizing themed components we created. Link to the register page and some inline themes from stylesheet at the bottom

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    const { error } = await signIn(email, password);
    if (error) alert(error.message);
    else alert("Login successful!");
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>

        <Spacer/>
        <ThemedText title={true} style={styles.title}>
         Login to Your Account
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
            <ThemedText style={{color: '#f2f2f2'}}> Login </ThemedText>
        </ThemedButton>

        <Spacer height={100} />

        <Link href='/register' push>
        <ThemedText style= {{textAlign: 'center'}}>
            Register Instead
        </ThemedText>
        </Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

// ref: [styles.btn, pressed && styles.pressed]}>  means only apply the pressed value when the presses is true



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn:{
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed:{
        opacity: 0.8
    }
})