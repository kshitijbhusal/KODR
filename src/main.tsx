import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CodeContextProvider } from './contexts/CodeContext.tsx'
import { AuthContextProvider } from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <CodeContextProvider>

        <App />

      </CodeContextProvider>
    </AuthContextProvider>
  </StrictMode >,
)
