'use client'

import SocialBar from '@/components/SocialBar'
import WorkCardDetails from '@/components/WorkCardDetails'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import End from '@/components/End'
import Hero from '@/components/Hero'





export default function MainPage() {



  return (
    <div className="bg-black h-full overflow-x-hidden" >

      <div className="p-3">

        {/* Hero Section */}
        <Hero />

        {/* Social Bar section */}
        <div className="px-3 py-4 md:relative md:py-25 lg:py-20 md:bg-[url('/valley1.jpg')] md:bg-cover md:bg-bottom  rounded-b-lg">
          <div
            className="
            md:absolute
            md:left-0
            md:right-0
            md:top-0
            h-full
            bg-black/20
            backdrop-blur-xl
            rounded-b-lg
            border border-white/10
            px-10 py-8
           
            w-full
            
          "
          >
            <SocialBar />
          </div>


        </div>

        {/* work section */}
        <section className='w-full h-full mt-10 py-5 px-2'>
          {/* title */}
          {/* <span className='hover:text-green-400 -all duration-300'>.sh</span> */}
          <h2 className='font-bold text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-white flex flex-row items-end'>Experience<div className='text-green-400 transition-all duration-300 text-sm  lg:text-base mb-0.5'>.sh</div></h2>
          {/* experience cards */}
          <WorkCardDetails />
        </section>

        {/* Projects section */}
        <section className='w-full h-full mt-10 py-5 px-2'>
          {/* title */}
          <h2 className='font-bold text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-white flex flex-row items-end'>Projects<div className='text-green-400 transition-all duration-300 text-sm  lg:text-base mb-0.5'>.sh</div></h2>
          {/* experience cards */}
          <Projects />
        </section>

        <section className='w-full h-full mt-10 py-5 px-2'>
          <h2 className='font-bold text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-white flex flex-row items-end'>Skills<div className='text-green-400 transition-all duration-300 text-sm  lg:text-base mb-0.5'>.sh</div></h2>
          <Skills />
        </section>


      </div>
      <End />
    </div>
  )

}
