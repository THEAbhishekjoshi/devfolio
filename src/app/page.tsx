'use client'
import Image from 'next/image'
import PixelBar from '../components/PixelBar'
import BattleScene from '@/components/BattleScene'
import SocialBar from '@/components/SocialBar'
import { useEffect, useState } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleList = [
  "Full stack developer",
  "Engineer",
  "Polymath"
]

const workCardDetails = [
  {
    id: "xe",
    company: "Excellence Technologies",
    role: "Full stack developer",
    location: "Noida(on-site)",
    responsibilities: [
      `Developed an AI automation engine using LangChain and LangGraph to extract data from Solar Proposal PDFs 
      reducing manual entry for clients by over 80%`,
      `Engineered a multi-site synchronization tool using Playwright and OpenClaw to automate data injection into various
      solar platforms via custom API payloads`,
      `Built the backend for the company’s HR Management System using Next.js and Node.js, optimizing internal data
      flow and reporting`,
      `Designed and deployed AI Chatbots integrated with n8n workflows and monitored via LangSmith for real-time per
      formance tracking and debugging`
    ],
    techStacks: [
      { name: "React", iconLink: "" },
      { name: "Node.js", iconLink: "" },
      { name: "PostgreSQL", iconLink: "" },
      { name: "Langchain", iconLink: "" },
      { name: "NextJs", iconLink: "" },
      { name: "Supabase", iconLink: "" },
      { name: "TypeScript", iconLink: "" }
    ],
    duration: "November 2025 - April 2026",

  },
  {
    id: "xr",
    company: "DRC Systems",
    role: "Software Development Intern",
    location: "Gujarat(Remote)",
    responsibilities: [
      `Worked in a live codebase and learned the end-to-end flow from API to UI`,
      `Built React components and backend routes/controllers for tasks`,
      `Improved code style, error handling, and structure based on senior developer code reviews`,
      ` In parallel, applied these learnings to my MERN project (Finance Manager/Finance).`
    ],
    techStacks: [
      { name: "React", iconLink: "" },
      { name: "Node.js", iconLink: "" },
      { name: "MongoDB", iconLink: "" }
    ],
    duration: "July 2025 - August 2025",
  }
]

export default function MainPage() {
  const [displayTitle, setDisplayTitle] = useState<string>("")
  const [isTyping, setIsTyping] = useState<boolean>(true)
  const [msgIndex, setMsgIndex] = useState(0)
  const [activeWorkId, setActiveWorkId] = useState<string[]>([])

  // Type write effect
  useEffect(() => {
    let i = 0
    let msgText = titleList[msgIndex]
    const interval = setInterval(() => {

      if (i < msgText.length) {
        !isTyping && setIsTyping(true)
        setDisplayTitle(msgText.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setIsTyping(false)

        setTimeout(() => {
          setMsgIndex((prev) => (prev + 1) % titleList.length)
        }, 2000)

      }
    }, 45)
    return () => clearInterval(interval)

  }, [msgIndex])


  return (
    <div className="bg-black h-full font-press overflow-x-hidden" >

      <div className="p-3" >

        {/* Nav Bar section */}
        <div className=" flex flex-row  justify-center gap-15 mb-5 text-white">

          <div className='group  flex flex-row gap-3'>
            <div className='hidden group-hover:block text-yellow-400'>{'>'}</div>
            <button>Home</button>
          </div>
          <div className='group flex flex-row gap-3'>
            <div className='hidden group-hover:block text-yellow-400'>{'>'}</div>
            <button>Work</button>
          </div>
          <div className='group flex flex-row gap-3'>
            <div className='hidden group-hover:block text-yellow-400'>{'>'}</div>
            <button>Projects</button>
          </div>
          <div className='group flex flex-row gap-3'>
            <div className='hidden group-hover:block text-yellow-400'>{'>'}</div>
            <button>Resume</button>
          </div>


        </div>
        {/* Intro Section */}
        <section className="pb-5 pt-5 bg-[url('/valley1.jpg')] bg-cover bg-bottom rounded-t-lg " >

          <div className='flex flex-row justify-between p-2 mt-5 ml-5 mr-5'>
            {/* Profile card section */}
            <div className=' w-[40rem] h-[30rem] bg-black/70 rounded-xl p-5 flex flex-col items-center border-2 border-pink-700'>
              <div className='bg-white rounded-full border-4 border-yellow-400 w-30 h-30 flex justify-center items-center p-2'>
                <Image
                  src='/pfp.png'
                  width={200}
                  height={200}
                  alt='profile image'
                  className='object-cover  w-full h-full'
                />
              </div>
              <div className='font-press flex flex-col items-center '>
                <p className='font-bold text-yellow-300'>Abhishek</p>
                <div className='text-sm flex'>
                  <div >
                    {displayTitle}
                  </div>
                  {isTyping && (
                    <span className="inline-block ml-1 animate-pulse text-white">
                      ▌
                    </span>
                  )}
                </div>
                <div className='mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-[0.5rem] overflow-hidden w-full px-2'>
                  <div className='text-white/50'>TRAINER ID</div>
                  <div className='min-w-0 break-words'>#ABH-001</div>
                  <div className='text-white/50'>XP</div>
                  <div className='min-w-0 break-words'>OSS/Projects/Internships</div>
                  <div className='text-white/50'>REGION</div>
                  <div className='min-w-0 break-words'>India</div>
                  <div className='text-white/50'>COLLEGE</div>
                  <div className='min-w-0 break-words'>MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY(MAIT)</div>
                  <div className='text-white/50'>CURRENT QUEST</div>
                  <div className='min-w-0 break-words'>Learning NextJs</div>

                  <div className='animate-pulse text-pink-400'>
                    {'>'}
                  </div>
                </div>
              </div>

            </div>
            {/* Battle Section */}
            <div className='  text-xl text-white flex justify-center w-full '>

              <BattleScene />

            </div>
            {/* Devédex Section */}
            <div className='w-[40rem] h-[30rem] bg-black/70 rounded-xl border-2 border-pink-700'>
              <div className='mt-5 w-full border-b border-pink-700/90 text-center p-2'>Devédex</div>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Frontend" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Backend" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Open Source" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="Dsa Journey" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                  <PixelBar label="AI" value={30} />
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Social Bar section */}
        <div className="relative py-20 bg-[url('/valley1.jpg')] bg-cover bg-bottom  rounded-b-lg">
          <div
            className="
            absolute
            left-0
            right-0
            top-0
            h-full
            bg-black/20
            backdrop-blur-xl
            rounded-b-lg
            border border-white/10

            px-10 py-8
          "
          >
            <SocialBar />
          </div>


        </div>

        {/* work section */}
        <section className='w-full h-full mt-8 py-5 px-2'>
          {/* title */}
          <div className='font-bold text-xl mb-10'>Experience</div>
          {/* experience cards */}
          <div className='flex flex-col gap-7 mt-5 items-center'>
            {
              workCardDetails.map((item) => {
                return (
                  <div className='w-full flex flex-col gap-7' key={item.id}>
                    <div className='flex justify-between '  >
                      <div className='flex-col group'>
                        <div className='text-white flex gap-2'>
                          <button className='hidden group-hover:block text-yellow-400'
                            onClick={() => {
                              if (activeWorkId.includes(item.id)) {
                                setActiveWorkId(prev => prev.filter(id => id !== item.id))
                              } else {
                                setActiveWorkId(prev => [...prev, item.id])
                              }
                            }}>{'>'}</button>
                          {item.company}
                        </div>
                        <div className='text-sm text-white/80'>{item.role}</div>
                      </div>
                      <div className='flex-col'>
                        <div className='text-sm text-white/80'>{item.duration}</div>
                        <div className='text-end text-sm text-white/80'>{item.location}</div>
                      </div>
                    </div>
                    {activeWorkId.includes(item.id) &&

                      <div className='flex flex-col text-[0.5rem] text-white/80 gap-2'>
                        {item.responsibilities.map((resp) => {
                          return (
                            <div>
                              <span className='text-pink-400'>{'>'}</span>{resp}
                            </div>
                          )
                        })}
                      </div>}

                  </div>





                )
              })
            }



          </div>
        </section>
      </div>
    </div>
  )

}
