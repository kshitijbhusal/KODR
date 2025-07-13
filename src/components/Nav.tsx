import { useContext, useEffect, useState } from 'react'
import '../index.css'
import { motion } from "motion/react"
// import supabase from '../lib/supabase'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'


const Nav = (): any => {


    const { session, signInWithGoogle, signOut }: any = useContext(AuthContext)
    const [user, setUser]: any = useState("")

    useEffect(() => {
        if (session) {
            setUser(session.user)
            console.log("if runng")
        }

    }, [session])



    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }


    return (
        <>
            <section className='w-full bg-dark text-foreground h-12 flex justify-between px-4 md:px-16 font-sans items-center'>
                <Link to="/" ><h1 className='text-2xl bg-gradient-to-bl from-cyan-400 to-red-600  text-transparent bg-clip-text font-extrabold  '>KODR</h1></Link>

                <div className='flex gap-x-8'>


                    {user ?
                        (
                            <>
                                <div className='size-8 rounded-full flex flex-col items-center justify-center text-lg font-semibold bg-gradient-to-bl from-cyan-400/50 to-red-600/80 text-yellow-200 '>{user.user_metadata.name.split("")[0]}</div>
                                <button onClick={signOut} className='px-2 py-1 rounded-md text-white bg-red-500/60 hover:bg-red-500/80 duration-200 text-base font-semibold cursor-pointer '>Logout</button>

                            </>
                        ) :
                        (<button onClick={handleOpen} className='px-2 py-1 rounded-md text-black bg-yellow-500 duration-200 text-base font-semibold cursor-pointer '>Login</button>)}






                    {open && (
                        <>
                            {/* Overlay with blur */}
                            <div
                                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                                onClick={handleClose}
                            />
                            {/* Centered Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="fixed z-50 inset-0 flex items-center justify-center "
                                tabIndex={-1}
                            >
                                <div className="relative bg-gradient-to-br from-white/90 via-yellow-50 to-slate-100 shadow-2xl rounded-2xl px-8 py-6 w-full max-w-sm border border-yellow-200">
                                    <button
                                        onClick={handleClose}
                                        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold focus:outline-none"
                                        aria-label="Close"
                                    >
                                        &times;
                                    </button>
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gradient-to-tr from-yellow-400/20 via-pink-400/20 to-cyan-400/20 rounded-full p-2 mb-4 shadow-lg">
                                            <svg width="36" height="36" fill="none" viewBox="0 0 48 48">
                                                <circle cx="24" cy="24" r="24" fill="#fff" />
                                                <path d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" fill="#FFC107" />
                                                <path d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4 24 4c-7.3 0-13.5 4.1-17.7 10.7z" fill="#FF3D00" />
                                                <path d="M24 44c5.5 0 10.4-1.8 14.2-4.9l-6.6-5.4C29.7 35.7 27 36.7 24 36.7c-6.1 0-10.7-3.9-12.5-9.3l-7 5.4C7.7 39.9 15.2 44 24 44z" fill="#4CAF50" />
                                                <path d="M44.5 20H24v8.5h11.7c-1.1 3.1-3.7 5.7-7.2 7.2l6.6 5.4C41.6 38.2 44.5 32.7 44.5 24c0-1.3-.1-2.7-.2-4z" fill="#1976D2" />
                                            </svg>
                                        </div>
                                        <h1 className="text-xl font-bold text-gray-800 mb-2">Sign up with Google</h1>
                                        <p className="text-gray-500 text-sm mb-6 text-center">Join Kodr instantly with your Google account. Fast, secure, and easy!</p>
                                        <div className="flex gap-3 w-full">
                                            <button
                                                onClick={handleClose}
                                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 font-semibold hover:bg-gray-100 transition"
                                            >
                                                Not now
                                            </button>
                                            <button
                                                onClick={signInWithGoogle}
                                                className="flex-1 bg-gradient-to-r from-yellow-400/20 to-yellow-400/70 text-white font-bold rounded-lg px-4 py-2 shadow-md hover:from-yellow-500/30 hover:to-yellow-500 cursor-pointer duration-300 transition flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" /><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4 24 4c-7.3 0-13.5 4.1-17.7 10.7z" /><path fill="#FBBC05" d="M24 44c5.5 0 10.4-1.8 14.2-4.9l-6.6-5.4C29.7 35.7 27 36.7 24 36.7c-6.1 0-10.7-3.9-12.5-9.3l-7 5.4C7.7 39.9 15.2 44 24 44z" /><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-3.7 5.7-7.2 7.2l6.6 5.4C41.6 38.2 44.5 32.7 44.5 24c0-1.3-.1-2.7-.2-4z" /></g></svg>
                                                Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </div>
            </section >

        </>
    )
}

export default Nav