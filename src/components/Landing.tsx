import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import ShineBorderCard from './AnimatedDiv';

// Main App component for the landing page
export const Landing = () => {

    const { session }: any = useContext(AuthContext)



    function handleStartBtn() {
        if (!session) {
            toast("Please Login.", {
                position: "bottom-right"
            })
            return
        }

        navigate("/playground");



    }
    const navigate = useNavigate();



    return (
        <motion.div initial={{ opacity: 0 }} // Starting state
            animate={{ opacity: 1 }} // Target state
            transition={{ duration: 1 }} className="min-h-screen bg-gray-900 text-white font-sans">
            {/*  */}

            {/* Hero Section */}
            <header className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden"> {/* Adjusted gradient */}
                <div className="absolute inset-0 z-0 opacity-10">
                    {/* Background pattern - simple dots */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
                </div>
                <div className="text-center z-10 p-6 max-w-4xl mx-auto">
                    {/* Changed gradient colors for headline to yellow shades */}
                    <h1 className="text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse-slow">
                        Your Code, Your Canvas.
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Experience a seamless online code editor supporting HTML, CSS, and Tailwind CSS. Write, preview, and refine your web projects instantly.
                    </p>
                    {/* Changed Start Coding Now button color to yellow */}
                    <button onClick={handleStartBtn} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50">
                        Start Playground
                    </button>
                    <div className=' size-100 mt-10 md:mt-0 md:size-fit md:block md:relative top-5 left-40 opacity-90 '>

                        <ShineBorderCard />

                    </div>



                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6 text-center">
                    {/* Changed headline color to yellow */}
                    <h2 className="text-5xl font-extrabold mb-12 text-yellow-500">Powerful Features at Your Fingertips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1: HTML Editor - Changed icon color to yellow */}
                        <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> {/* Changed background to black */}
                            <div className="text-5xl mb-6 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">HTML Editor</h3>
                            <p className="text-gray-400 leading-relaxed">Craft your web structure with a robust HTML editor, offering syntax highlighting and real-time updates.</p>
                        </div>

                        {/* Feature 2: CSS Styling - Changed icon color to yellow */}
                        <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> {/* Changed background to black */}
                            <div className="text-5xl mb-6 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">CSS & Tailwind</h3>
                            <p className="text-gray-400 leading-relaxed">Style your creations with standard CSS or leverage the power of Tailwind CSS for rapid development.</p>
                        </div>

                        {/* Feature 3: Live Preview - Changed icon color to yellow */}
                        <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> {/* Changed background to black */}
                            <div className="text-5xl mb-6 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Live Preview</h3>
                            <p className="text-gray-400 leading-relaxed">See your changes instantly with a dynamic live preview, making debugging and design a breeze.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-center"> {/* Adjusted gradient */}
                <div className="container mx-auto px-6">
                    {/* Changed headline color to yellow */}
                    <h2 className="text-5xl font-extrabold mb-8 text-yellow-500">Ready to Build Something Amazing?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join thousands of developers who are bringing their ideas to life with KODR. No setup, just pure coding.
                    </p>
                    {/* Changed Get Started button color to yellow */}
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-12 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50">
                        Get Started for Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-8 text-center text-gray-400"> {/* Changed footer background to black */}
                <div className="container mx-auto px-6">
                    <p>&copy; {new Date().getFullYear()} KODR. All rights reserved.</p>
                    <div className="mt-4">
                        {/* Changed footer link hover color to yellow */}
                        <a href="#" className="text-gray-400 hover:text-yellow-500 mx-2">Privacy Policy</a>
                        <span className="mx-2">|</span>
                        <a href="#" className="text-gray-400 hover:text-yellow-500 mx-2">Terms of Service</a>
                    </div>
                </div>
            </footer>

        </motion.div>
    );
};




// Navigation Bar
// <nav className="bg-black p-4 shadow-lg"> {/* Changed nav background to black */}
//     <div className="container mx-auto flex justify-between items-center">
//         {/* Changed KODR text color to yellow */}
//         <div className="text-2xl font-bold text-yellow-500">KODR</div>
//         <div>
//             <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">Features</a> {/* Adjusted hover */}
//             <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ml-4">About</a>
//             <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ml-4">Contact</a>
//             {/* Changed Login button color to yellow */}
//             <button className="ml-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
//                 Login
//             </button>
//         </div>
//     </div>
// </nav>