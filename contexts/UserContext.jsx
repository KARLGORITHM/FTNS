import { createContext, useState } from "react";
import { supabase } from "../lib/supabase";

export const UserContext = createContext ()

export function UserProvider ({children}) {

    const [user, setUser] = useState(null)

    async function login (email, password){
           try{
            await supabase.auth.signInWithPassword(email, password)
            const { data: { user }, error } = await supabase.auth.getUser();
            setUser(response)
        }   catch (error){
            console.log(error.message)
        }
        
    }
        

    async function register (email, password){
        try{
            await supabase.auth.signUp({email, password})
            await login (email, password)
        }   catch (error){
            console.log(error.message)
        }
        
    }

    async function logout (){
        
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}