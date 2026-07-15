'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const titleList = [
    "Full Stack Developer",
    "Engineer",
    "Explorer"
]

export default function ProfileCardV2() {
    const [displayTitle, setDisplayTitle] = useState<string>("")
    const [isTyping, setIsTyping] = useState<boolean>(true)
    const [msgIndex, setMsgIndex] = useState(0)

    // Typewriter effect
    useEffect(() => {
        let i = 0
        const msgText = titleList[msgIndex]
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
        <div className='w-full max-w-[25rem] bg-black/80 p-1  h-[30rem] border-2  border-zinc-600 shadow-[8px_8px_0px_rgba(0,0,0,0.8)]'>
            <div className='border-2 border-[#4a4e69]  p-4 flex flex-col gap-5 h-full'>

                {/* Header Strip */}
                <div className='flex justify-between items-center border-b-2 border-dashed border-[#4a4e69] pb-2'>
                    <h1 className='font-press text-white text-xs tracking-widest'>TRAINER CARD</h1>
                    <div className='text-yellow-400 text-xs'>★★★</div>
                </div>

                {/* Profile Section (Row Layout) */}
                <div className='flex gap-4 items-center'>
                    {/*  Avatar */}
                    <div className='w-24 h-24 shrink-0 bg-black border-2 border-white p-1'>
                        <Image
                            src='/pfp.png'
                            width={200}
                            height={200}
                            alt='profile image'
                            className='object-cover w-full h-full'
                        />
                    </div>

                    {/* Name & Typewriter */}
                    <div className='flex flex-col gap-2'>
                        <p className='font-press text-yellow-300 text-sm'>ABHISHEK</p>
                        <div className='text-[10px] sm:text-xs font-mono text-green-400 min-h-[1.5rem]'>
                            {`> `} {displayTitle}
                            {isTyping && (
                                <span className="inline-block animate-pulse text-green-400 ml-1">
                                    █
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Stats Container  */}
                <div className='bg-black/50 border border-[#4a4e69] p-3 flex flex-col gap-3 mt-5'>

                    {/* Stat Row */}
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#4a4e69]/50 pb-1 gap-1'>
                        <span className='font-press text-[8px] text-slate-400 uppercase'>Trainer ID</span>
                        <span className='font-mono text-xs text-white font-semibold'>#ABH-001</span>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#4a4e69]/50 pb-1 gap-1'>
                        <span className='font-press text-[8px] text-slate-400 uppercase'>Region</span>
                        <span className='font-mono text-xs text-white font-semibold'>India</span>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#4a4e69]/50 pb-1 gap-1'>
                        <span className='font-press text-[8px] text-slate-400 uppercase'>XP</span>
                        <span className='font-mono text-[10px] text-white text-right'>OSS / Projects / Internships</span>
                    </div>

                    <div className='flex flex-col border-b border-[#4a4e69]/50 pb-1 gap-1'>
                        <span className='font-press text-[8px] text-slate-400 uppercase'>College</span>
                        <span className='font-mono text-[10px] text-white leading-tight'>
                            Maharaja Agrasen Institute of Technology (MAIT)
                        </span>
                    </div>

                    <div className='flex flex-col pt-1 gap-1'>
                        <span className='font-press text-[8px] text-yellow-400 uppercase mb-2'>Current Quest</span>
                        <span className='font-mono text-[10px] text-white'>
                            Learning NextJs and Building Portfolio
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}