import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Profile from '../../public/Profile/developer-pic-1.png'
import Animatedtext from '@/components/Animatedtext'

export default function Home() {
  return (
    <main className="flex text-dark w-full min-h-screen flex-col ">
     
      <Navbar/>

      <div className='flex items-center justify-between w-full '>
        <div className='w-1/2'>
          <Image src={Profile} alt='Hamza Qureshi' className='w-full h-auto'/>
        </div>
        <div className='mr-5 flex flex-col items-center self-center text-left'>
         
          <Animatedtext text="Turning Vision Into Reality With Code And Design." className='text-left'/>
          <p className='text-lg mr-10'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
 Explore my latest projects and articles, showcasing my expertise in Next.js and web development.
          </p>
        </div>
      </div>
    </main>
  )
}
