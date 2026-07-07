'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
const titleList = [
    "Full stack developer",
    "Engineer",
    "Explorer"
]

export default function ProfileCard() {

    const [displayTitle, setDisplayTitle] = useState<string>("")
    const [isTyping, setIsTyping] = useState<boolean>(true)
    const [msgIndex, setMsgIndex] = useState(0)


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
        <div className='w-full max-w-[25rem] lg:max-w-[25rem] h-[30rem] bg-black/70 rounded-xl p-2 lg:p-5 flex flex-col justify-evenly border-2 border-pink-700'>
            <div className=' flex flex-col items-center w-full'>
                <div className='bg-white rounded-full border-4 border-yellow-400 w-30 h-30 flex justify-center items-center p-2'>
                    <Image
                        src='/pfp.png'
                        width={200}
                        height={200}
                        alt='profile image'
                        className='object-cover  w-full h-full'
                    />
                </div>
                <p className='font-bold text-yellow-300'>Abhishek</p>
                <div className='text-xs flex'>
                    <div >
                        {displayTitle}
                    </div>
                    {isTyping && (
                        <span className="inline-block ml-1 animate-pulse text-white">
                            ▌
                        </span>
                    )}
                </div>
            </div>
            <div className='leading-relaxed font-space  flex flex-col items-center'>
                <div className=' grid grid-cols-2 gap-x-4 gap-y-3 text-xs overflow-hidden w-full px-2 lg:py-5'>
                    <div className='text-yellow-400 font-press text-xs'>TRAINER ID</div>
                    <div className='min-w-0 break-words font-semibold'>#ABH-001</div>
                    <div className='text-yellow-400 font-press text-xs'>XP</div>
                    <div className='min-w-0 break-words font-semibold'>OSS/Projects/Internships</div>
                    <div className='text-yellow-400 font-press text-xs'>REGION</div>
                    <div className='min-w-0 break-words font-semibold'>India</div>
                    <div className='text-yellow-400 font-press text-xs'>COLLEGE</div>
                    <div className='min-w-0 break-words font-semibold'>MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY(MAIT)</div>
                    <div className='text-yellow-400 font-press text-xs'>CURRENT QUEST</div>
                    <div className='min-w-0 break-words font-semibold'>Learning NextJs</div>

                    {/* <div className='animate-pulse text-pink-400'>
                            {'>'}
                          </div> */}
                </div>
            </div>

        </div>
    )
}