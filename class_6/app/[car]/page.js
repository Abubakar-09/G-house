"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const page = ({ params }) => {
  const [name, setname] = useState('')
  const [car, setcar] = useState('')


  useEffect(() => {
    params.then(resolvedParams => {
      setcar(resolvedParams.car)
      if (resolvedParams.car == 1) {
        setname("Toyota Corolla")
      } else if (resolvedParams.car == 2) {
        setname("Suzuki Alto")
      } else if (resolvedParams.car == 3) {
        setname("Honda City")
      } else if (resolvedParams.car == 4) {
        setname("Honda Civic")
      }
    });
  }, [params])
  

  return (
    <>
      <div className='w-[80vw] m-auto py-12 flex justify-center items-center flex-col gap-6'>
        <h1 className='text-2xl font-extrabold underline'>{name}</h1>
        <img src={car == 2 ? `${car}.png` : `${car}.jpg`} alt="car-image" />
        <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor. Dolores voluptates officia itaque qui amet maxime unde commodi consequatur at ex excepturi eius impedit fugiat illo quam totam rerum voluptate, ut error earum. Quidem, aspernatur perferendis. Iusto, asperiores? Modi ratione earum odit voluptatibus nam inventore a corporis, consequuntur nobis commodi obcaecati nulla maxime, accusamus mollitia vitae assumenda quibusdam. Incidunt placeat dolor accusantium fuga eum minus sapiente deleniti quia neque blanditiis. Eius est necessitatibus assumenda maiores ducimus voluptatibus quibusdam adipisci, nobis praesentium harum blanditiis id suscipit inventore hic architecto numquam quae modi placeat. Modi inventore suscipit quasi quos? Quos necessitatibus reiciendis, dolorem ipsum dolore voluptatem natus nihil odio quae ratione iusto. Quia dolore, consequatur aut voluptate deleniti illo cum minus accusamus labore, qui architecto ratione quibusdam, doloribus perspiciatis ducimus ab ex laudantium deserunt necessitatibus officia eos numquam. Repellendus blanditiis, corporis, deserunt nemo commodi unde quia soluta dolorum aperiam a rem?</p>
        <p className='text-xl text-green-600'>PKR 5000000</p>
        <Link href={'checkout'}><button className='bg-blue-700 px-4 py-2 rounded text-white'>Make Payment</button></Link>
      </div>
    </>
  )
}

export default page