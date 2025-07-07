import {Stack} from "expo-router"
import {StatusBar} from "react-native"


// layout to customize the header of the Login and Register Page, since it is nested inside the (auht) file

export default function AuthLayout () {
    return (
        <>
        <StatusBar style="auto" />
        <Stack
            screenOptions={{headerShown: false, animation: "none"}}
            />
        </>
    );
};

