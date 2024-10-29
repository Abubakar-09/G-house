import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='bg-black max-md:hidden'>
        <div className='w-[80vw] m-auto'>
          <div className='grid grid-cols-2 grid-rows-1 text-white text-sm'>
            <div className=''>Download App By SMS</div>
            <div className='flex justify-end gap-2'><span className='cursor-pointer'>Sign Up </span> | <span className='cursor-pointer'> Sign In</span></div>
          </div>
          <hr />
          <div className='grid grid-cols-6 grid-rows-1 py-2'>
            <div className=''><Link href={'/'}><img className='object-contain' src="logo.png" alt="logo" /></Link></div>
            <div className='col-span-4'>
              <ul className='flex justify-between px-2 items-center h-full text-white font-bold'>
                <li className='cursor-pointer'>Used Cars</li>
                <li className='cursor-pointer'>New Cars</li>
                <li className='cursor-pointer'>Bikes</li>
                <li className='cursor-pointer'>Auto Store</li>
                <li className='cursor-pointer'>Videos</li>
                <li className='cursor-pointer'>Forum</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>More</li>
              </ul>
            </div>
            <div className='flex h-full w-full items-center justify-center text-white text-md'>
              <button className='bg-red-700 px-4 py-2 font-bold rounded'>Post An Ad</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar