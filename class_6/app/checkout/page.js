import React from 'react'
import Link from 'next/link';
// import { useRouter } from "next/navigation"


const page = () => {
const handleClick = () => {
//   const router = useRouter();
//   router.push('thank-you');
};
    return (
        <>
            <h1 className='w-[80vw] m-auto text-center mt-10 mb-2 text-2xl font-bold'>Enter Your Detials</h1>
            <div className='w-[80vw] m-auto flex flex-col justify-center items-center mb-10'>
                <form onSubmit={handleClick()} className='flex flex-col justify-center items-center gap-4 my-6'>
                    <input required className='border border-black rounded-lg placeholder-slate-800 px-3 py-2' type="text" placeholder='Enter Your Name'/>
                    <input required className='border border-black rounded-lg placeholder-slate-800 px-3 py-2' type="text" placeholder='Enter Your Email'/>
                    <input required className='border border-black rounded-lg placeholder-slate-800 px-3 py-2' type="text" placeholder='Card Number'/>
                    <input required className='border border-black rounded-lg placeholder-slate-800 px-3 py-2' type="text" placeholder='Address'/>
                    <Link href={'thank-you'}><button className='bg-blue-700 px-4 py-2 text-white text-sm rounded'>Place Your Order</button></Link>
                </form>
            </div>
        </>
    )
}

export default page