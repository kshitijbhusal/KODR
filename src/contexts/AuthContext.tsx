import React, { createContext, useEffect, useState } from 'react'
import supabase from '../utils/supabase';
const AuthContext = createContext({})





import type { Session } from '@supabase/supabase-js';

const AuthContextProvider = ({ children }: any) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            // 'session' here will directly be the session object, or null if no session

            setSession(session);
            console.log("session is:", session);
        })
            .catch(error => {
                console.error("Error getting session:", error);
            });
    }, []);




    const signInWithGoogle = () => {
        supabase.auth.signInWithOAuth({
            provider: "google"
        })

    }

    const signOut = () => {

    }

    return (
        <AuthContext.Provider value={{ session }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };