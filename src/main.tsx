import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CodeContextProvider } from './contexts/CodeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CodeContextProvider>

      <App />
    </CodeContextProvider>
  </StrictMode>,
)
