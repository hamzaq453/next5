import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Logos from '../../app/Logos.png'
import Footer from '@/components/Footer'

  


const Skills = () => {
  return (
    <>
    <Navbar/>
    <h2 className='font underline font-semibold ml-6 font-sans mb-5 bg-slate-300 underline-offset-3 ml-3 text-4xl font-light mt-50 w-full mb-5'>
        Skills: </h2>
    <div className='w-full h-screen '>
        
        <Image src={Logos} alt='Logos' className='justify-center
        items-center ml-[40%] mt-10 w-[40%]'/>
        <ul className='-mt-[22%] font-serif text-3xl font-medium list-disc pl-20'>
          <li>Nextjs</li>
          <li className='my-3'>React</li>
          <li className='my-3'>JavaScript</li>
          <li className='my-3'>Typescript</li>
          <li className='my-3'>Tailwind CSS</li>
          <li>Github</li>



        </ul>
       
    </div>
    <div className='-mt-40'>
    <Footer/>
    </div>
    </>
    )
}

export default Skills