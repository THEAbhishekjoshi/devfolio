'use client'
import { useState } from "react"
import Image from "next/image"
import { workDetails } from "@/data/workDetails"

export default function WorkCardDetials() {
    const [activeWorkId, setActiveWorkId] = useState<string[]>([])

    return (
        <div className='flex flex-col gap-12 mt-5 items-center'>
            {
                workDetails.slice(0, 5).map((item) => {
                    return (
                        <div className="w-full flex flex-row gap-2 group">
                            {/* toggle button */}
                            <button className={`p-1 h-full text-yellow-400 transition-transform duration-300 ${activeWorkId.includes(item.id) ? 'rotate-90 lg:block' : 'lg:hidden lg:group-hover:block'}`}
                                onClick={() => {
                                    if (activeWorkId.includes(item.id)) {
                                        setActiveWorkId(prev => prev.filter(id => id !== item.id))
                                    } else {
                                        setActiveWorkId(prev => [...prev, item.id])
                                    }
                                }}>{'>'}
                            </button>
                            {/* toggle content */}
                            <div className='w-full flex flex-col gap-10 ' key={item.id}>
                                <div className='flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between '>
                                    <div className='flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-3'>
                                        <div className="flex flex-col gap-1">
                                            <div className='text-sm md:text-base lg:text-lg font-bold text-white'>{item.company}</div>

                                            <div className='text-sm lg:text-base text-pink-400 font-medium'>{item.role}</div>
                                        </div>
                                        {item.working && (
                                            <span className='w-fit inline-flex items-center gap-1.5 px-2 py-1 text-[0.6rem] font-semibold rounded-sm bg-green-400/15 text-green-400 border border-green-400/30 '>
                                                <span className='w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
                                                Working
                                            </span>
                                        )}
                                    </div>
                                    <div className='flex-col md:pt-1 lg:pt-0'>
                                        <div className='text-xs lg:text-sm'>{item.duration}</div>
                                        <div className='text-start md:text-end text-xs lg:text-sm text-white/85'>{item.location}</div>
                                    </div>
                                </div>
                                {activeWorkId.includes(item.id) &&
                                    <div className='flex flex-col text-md text-white/80 gap-5 font-space font-semibold'>
                                        {/* Tech Stack Badges */}
                                        <div className='flex flex-wrap gap-2 mt-3'>
                                            {item.techStacks.map((tech, i) => (
                                                <div
                                                    key={i}
                                                    className='group/badge flex items-center gap-0 bg-white/5 border border-1 border-dashed  border-white/10 rounded-lg p-2 cursor-default transition-all duration-300 hover:bg-white/10 hover:border-white/20 overflow-hidden'
                                                >
                                                    {tech.iconLink ? (
                                                        <Image src={tech.iconLink} alt={tech.name} width={18} height={18} className='w-[18px] h-[18px] object-contain shrink-0' />
                                                    ) : (
                                                        <span className='w-[18px] h-[18px] flex items-center justify-center text-[0.6rem] text-white/50 bg-white/10 rounded shrink-0'>{tech.name.charAt(0)}</span>
                                                    )}
                                                    <span className='max-w-0 group-hover/badge:max-w-[100px] overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap text-xs text-white/70 group-hover/badge:ml-2'>
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            {item.responsibilities.map((resp) => {
                                                return (
                                                    <div className="flex flex-row gap-2 ">
                                                        <span className='text-pink-400 font-press'>{'>'}</span>
                                                        <div className="text-white/70">{resp}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>}

                            </div>
                        </div>





                    )
                })
            }

            {workDetails.length > 5 && (
                <div className="flex justify-center mt-4">
                    <button className="w-32 sm:w-42  lg:w-48 border-white/60 border-2 p-2 md:p-3 text-center text-[0.5rem] sm:text-xs lg:text-sm rounded hover:bg-white/10 transition-colors cursor-pointer">
                        Show More
                    </button>
                </div>
            )}
        </div>

    )
} 
