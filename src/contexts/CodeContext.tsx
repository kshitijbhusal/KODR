import { createContext, useState } from 'react'

const CodeContext = createContext({})

import { type ReactNode } from 'react'

interface CodeContextProviderProps {
    children: ReactNode;
}

const CodeContextProvider = ({ children }: CodeContextProviderProps): any => {
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")

    return (
        <CodeContext.Provider value={{ html, setHtml, css, setCss }}>

            {children}
        </CodeContext.Provider>)
}

export { CodeContext, CodeContextProvider };