import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[rgb(230,230,230)] py-5">
        <div className='w-11/12 md:w-9/12 lg:w-8/12 mx-auto flex items-center justify-between'>
            <div className='text-3xl logo tracking-wider font-bold hover:text-[rgba(197,163,111,255)] hover:scale-105 duration-300 cursor-pointer'>
                ARTVERSE
            </div>
            <ul className='w-9/12 md:w-7/12 lg:w-5/12 flex justify-between items-center text-slate-800'>
                <Link href="/browse"><li className='cursor-pointer '>Browse</li></Link>
                <Link href="/artists"><li className='cursor-pointer'>Artists</li></Link>
                <Link href="marketplace"><li className='cursor-pointer'>Marketplace</li> </Link> 
                <Link href="/signin"><li className='cursor-pointer btn btn--stripe'>Sign In</li></Link> 
            </ul>
        </div>

    </nav>
  )
}

export default Navbar