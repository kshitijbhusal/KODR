import { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import { CodeContext } from '../contexts/CodeContext'



const Playground = () => {

    const { html, css }: any = useContext(CodeContext)
    const [tailwind, setTailwind] = useState(false)

    const combined = `
  <html>
    <head>
      ${tailwind
            ? `<script src="https://cdn.tailwindcss.com"></script>`
            : `<style>${css}</style>
                <style>
                body{
                 color:white;
                }</style>
            `}
    </head>
    <body>
      ${html}
    </body>
  </html>
`;
    return (
        <>
            <main className='h-fit bg-background/80  bg-bg   '>

                <div className=" bg-bg w-full flex flex-col md:grid  grid-cols-2 grid-rows-1 gap-8 md:gap-2 text-foreground pt-1 ">

                    {/*----------------------- HTML DIV------------------------------------------- */}

                    <div className=' bg-light min-h-[50%]   p-1 overflow-hidden h-64 ' >
                        <p className='bg-bg inline-block px-2 py-1 text-yellow-500 '>HTML</p>

                        <CodeEditor lang="html" />
                    </div>


                    {/*----------------------- CSS DIV------------------------------------------ */}
                    <div className=' bg-light  p-1 min-h-[50%] overflow-hidden h-64' >

                        <section className='flex gap-2'>
                            <div className='bg-bg inline-block px-2 py-1 text-yellow-500  space-x-2 '>
                                <label htmlFor="css">CSS</label>
                                <input onClick={() => {
                                    setTailwind(false)
                                }} id='tailwind' type="checkbox" checked={!tailwind} />
                            </div>
                            <div className='bg-bg inline-block px-2 py-1 text-yellow-500  space-x-2 '>
                                <label htmlFor="tailwind" >TailwindCSS</label>
                                <input id="tailwind" onClick={() => setTailwind(true)} type="checkbox" checked={tailwind} />

                            </div>
                        </section>
                        {/* <textarea value={css} onChange={(e) => setCss(e.target.value)} className="w-full h-full font-mono outline-none p-2  "></textarea> */}
                        <CodeEditor lang="css" />
                    </div>


                    {/*----------------------- Preview DIV------------------------------------------- */}

                    <div className=' bg-light p-1 col-span-2 row-start-2  h-screen' >
                        <p className='bg-dark inline-block px-2 py-1 text-yellow-500 '>Preview</p>


                        <iframe
                            title="preview"
                            srcDoc={combined}
                            sandbox="allow-scripts"
                            className="  w-full h-full border border-border-muted mt-1 rounded-md"
                        />

                    </div>
                </div>

            </main>
        </>
    )
}

export default Playground;


