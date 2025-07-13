import Nav from './components/Nav'
import Playground from './components/Playground'
import './index.css' // <- make sure this is imported
import { Landing } from './components/Landing'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';



const App = () => {
  const { session }: any = useContext(AuthContext)

  return (
    <>
      <main className=' '>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Landing />} />

            <Route path='/playground' element={session ? (<Playground />) : (<Navigate to="/" />)} />



          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </main>
    </>
  )
}

export default App






// -------------------------------------------------------------------------------------

// import { useState, useEffect } from 'react'
// import supabase from './utils/supabase'
// import type { Session } from '@supabase/supabase-js'


// export default function App() {
//   const [session, setSession] = useState<Session | null>(null)

//   const signOut = () => {
//     supabase.auth.signOut();
//   }

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

//   if (!session) {
//     return (<div>session not found</div>)
//   }
//   else {
//     return (
//       <>
//         <div>Logged in!</div>
//         <button onClick={signOut} className='bg-white text-black'>Logout</button>
//         <p>session is {JSON.stringify(session)} </p>
//       </>


//     )
//   }
// }