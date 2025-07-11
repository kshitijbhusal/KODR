import Nav from './components/Nav'
import Playground from './components/Playground'
import './index.css' // <- make sure this is imported
import { Landing } from './components/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <main className=' '>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/playground' element={<Playground />} />



          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App