import '../index.css'

const Nav = () => {
    return (
        <>
            <section className='w-full bg-dark text-foreground h-12 flex justify-between px-4 md:px-16 font-sans items-center'>
                <h1 className='text-2xl bg-gradient-to-b from-yellow-500 to-slate-200 text-transparent bg-clip-text font-extrabold  '>KODR</h1>
                <div className='flex gap-x-8'>

                    {/* <button className='px-2 py-1 rounded-md text-foreground text-base font-semibold cursor-pointer '>New Ground ^</button> */}
                    <button className='px-2 py-1 rounded-md text-black bg-yellow-500 duration-200 text-base font-semibold cursor-pointer '>Login</button>

                </div>
            </section>

        </>
    )
}

export default Nav