import { createContext, useEffect, useState } from 'react'
import supabase from '../lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { toast } from 'react-toastify';



const AuthContext = createContext({})


const AuthContextProvider = ({ children }: any) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            // 'session' here will directly be the session object, or null if no session

            setSession(session);


        })

        const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
            setSession(session ?? null)
        })

        return () => {
            listener.subscription.unsubscribe()
        }

    }, []);




    // session && console.log(session.user.user_metadata.name)

    const signInWithGoogle = async () => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: "google"
            });




        } catch (error) {
            throw new Error("Error while signIn");


        }



    }

    const signOut = async () => {
        try {
            toast('Logout Sucessfull.', {
                position: "bottom-right"
            })
            await supabase.auth.signOut();
            // const { error } = await supabase.auth.signOut();
            // if (error) {
            //     throw error;
            // }
            // setSession(null); // Clear session state
            // window.location.href = '/'; // Redirect to initial page (home)
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