import React, { createContext, useEffect, useState } from 'react'
import supabase from '../lib/supabase';
import type { Session } from '@supabase/supabase-js';



const AuthContext = createContext({})


const AuthContextProvider = ({ children }: any) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            // 'session' here will directly be the session object, or null if no session

            setSession(session);
            console.log("useEffect run");

        })
            .catch(error => {
                console.error("Error getting session:", error);
            });
    }, []);




    // session && console.log(session.user.user_metadata.name)

    const signInWithGoogle = () => {

        supabase.auth.signInWithOAuth({
            provider: "google"
        })

    }

    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw error;
            }
            setSession(null); // Clear session state
            window.location.href = '/'; // Redirect to initial page (home)
        } catch (error) {
            console.log("Error logging out", error);
        }
    }

    return (
        <AuthContext.Provider value={{ session, signInWithGoogle, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };