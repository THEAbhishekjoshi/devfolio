'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { workDetails } from '@/data/workDetails';
import { SquareChevronDown, SquareChevronUp } from 'lucide-react';

export default function WorkPage() {
    const [activeJob, setActiveJob] = useState(workDetails[0])
    const [startIndex, setStartIndex] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleArrow = (move: "up" | "down") => {
        let nextIndex = selectedIndex
        if (move == "up") {
            if (selectedIndex == 0) return
            nextIndex--
            if (nextIndex < startIndex) {
                setStartIndex(startIndex - 3)
            }
        }

        if (move == "down") {
            if (selectedIndex == workDetails.length - 1) return
            nextIndex++
            if (nextIndex >= startIndex + 3) {
                setStartIndex(startIndex + 3)
            }
        }
        setSelectedIndex(nextIndex)
        setActiveJob(workDetails[nextIndex])
    }

    return (
        <div className="min-h-screen text-white font-press p-4 md:p-8 mt-5">
            {/* Page Title */}
            <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center border-b border-zinc-800 pb-4">
                <h1 className="text-lg md:text-xl lg:text-2xl tracking-wider uppercase font-extrabold flex items-center gap-2">
                    <span className="text-pink-500">▶</span>
                    <span className='mt-2'>Quest Log</span>
                </h1>

            </div>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column: Job Selector Menu */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <h2 className="text-xs uppercase text-zinc-500 tracking-widest px-2">Select Mission</h2>

                    {/* Mobile Horizontal Scroll Menu */}
                    <div className="lg:hidden">
                        <div className='flex overflow-x-auto gap-3 mt-1 pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                            {workDetails.map((job, idx) => {
                                const isActive = activeJob.id === job.id
                                return (
                                    <button
                                        key={job.id}
                                        onClick={() => {
                                            setActiveJob(job)
                                            setSelectedIndex(idx)
                                            if (idx < startIndex || idx >= startIndex + 3) {
                                                setStartIndex(Math.max(0, Math.min(idx, Math.max(0, workDetails.length - 3))))
                                            }
                                        }}
                                        className={`flex-shrink-0 snap-start text-left p-4 relative overflow-hidden transition-all duration-150 w-[260px] ${isActive
                                            ? "bg-zinc-900/60 animate-[questGlow_2.6s_ease-in-out_infinite]"
                                            : "bg-zinc-950"
                                            }`}
                                    >
                                        {isActive && (
                                            <>
                                                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-400" />
                                                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-400" />
                                                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-yellow-400" />
                                                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-400" />
                                            </>
                                        )}

                                        <div className="flex justify-between items-center gap-2 mb-3">
                                            <span className={`inline-flex items-center gap-1.5 text-[0.6rem] px-2 py-1 font-bold border badge-tag-sm ${job.working === true
                                                ? "bg-green-500/10 text-green-400 border-green-500/30"
                                                : "bg-zinc-800 text-zinc-400 border-zinc-700"
                                                }`}>
                                                {job.working && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                )}
                                                {job.working ? "Working" : "Completed"}
                                            </span>
                                            <span className="text-[0.7rem] text-zinc-500">{job.duration.split(" - ")[0]}</span>
                                        </div>
                                        <h3 className="font-bold text-xs tracking-wide text-zinc-100 truncate uppercase">
                                            {job.company}
                                        </h3>
                                        <p className="text-[0.7rem] text-pink-500 mt-1 truncate">{job.role}</p>
                                    </button>
                                );
                            })}
                        </div>

                        {/* swipe position indicator */}
                        <div className="flex items-center justify-center gap-1.5 -mt-1">
                            {workDetails.map((job) => (
                                <span
                                    key={job.id}
                                    className={`h-1.5 transition-all duration-200 ${activeJob.id === job.id ? "w-4 bg-white" : "w-1.5 bg-zinc-700"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Vertical Menu */}
                    <div className='hidden lg:flex flex-col gap-4 mt-1'>
                        <div className={`flex justify-center text-white/80 ${selectedIndex == 0 ? "hover:text-white/50 cursor-not-allowed" : "hover:text-white cursor-pointer"}`}
                            onClick={() => handleArrow("up")}><SquareChevronUp /></div>

                        <div className="flex flex-col gap-3.5">
                            {workDetails.slice(startIndex, startIndex + 3).map((job, idx, arr) => {
                                const isActive = activeJob.id === job.id
                                const actualIndex = startIndex + idx
                                const isLast = idx === arr.length - 1

                                return (
                                    <div key={job.id} className="flex gap-3">
                                        <div className="flex flex-col items-center w-2.5 shrink-0 pt-5">
                                            <span
                                                className={`w-2.5 h-2.5 shrink-0 transition-colors duration-150 ${isActive
                                                    ? "bg-yellow-400 border-2 border-yellow-400"
                                                    : job.working
                                                        ? "bg-zinc-950 border-2 border-green-500"
                                                        : "bg-zinc-950 border-2 border-zinc-700"
                                                    }`}
                                            />
                                            {!isLast && (
                                                <span
                                                    className="flex-1 w-[2px] mt-1.5"
                                                    style={{ background: "repeating-linear-gradient(#27272a 0 4px, transparent 4px 8px)" }}
                                                />
                                            )}
                                        </div>

                                        <button
                                            onClick={() => {
                                                setActiveJob(job)
                                                setSelectedIndex(actualIndex)
                                            }}
                                            className={`flex-1 text-left p-4 relative overflow-hidden transition-all duration-150  ${isActive
                                                ? "bg-zinc-900/60 animate-[questGlow_2.6s_ease-in-out_infinite]"
                                                : "border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:translate-x-0.5"
                                                }`}
                                        >
                                            {isActive && (
                                                <>
                                                    <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-400" />
                                                    <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-400" />
                                                    <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-yellow-400" />
                                                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-400" />
                                                </>
                                            )}

                                            <div className="flex justify-between items-center gap-2">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 text-[0.7rem] pl-2 pr-2.5 py-1 font-bold border [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)] ${job.working
                                                        ? "bg-green-500/10 text-green-400 border-green-500/30"
                                                        : "bg-zinc-800 text-zinc-400 border-zinc-700"
                                                        }`}
                                                >
                                                    {job.working && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                    )}
                                                    {job.working ? "Working" : "Completed"}
                                                </span>
                                                <span className="text-[0.7rem] text-zinc-500">{job.duration.split(" - ")[0]}</span>
                                            </div>

                                            <h3 className="mt-2 font-bold text-sm tracking-wide text-zinc-100 truncate">
                                                {job.company}
                                            </h3>
                                            <p className="text-xs text-pink-500 mt-3 md:mt-5">{job.role}</p>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={`flex justify-center text-white/80 ${selectedIndex == workDetails.length - 1 ? "hover:text-white/50 cursor-not-allowed" : "hover:text-white cursor-pointer"}`}
                            onClick={() => handleArrow("down")}><SquareChevronDown /></div>
                    </div>
                </div>

                {/* Right Column: Detailed View */}
                <div className="lg:col-span-8">
                    <div className="border border-zinc-800 bg-zinc-950 p-6 flex flex-col gap-6 relative min-h-[500px]">

                        {/* Header Block */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-zinc-900">
                            <div>
                                <h2 className="text-base md:text-lg font-semibold uppercase">
                                    {activeJob.company}
                                </h2>
                                {/* <p className="font-semibold text-sm mt-5 uppercase tracking-wider">
                                    {activeJob.role}
                                </p> */}
                            </div>
                        </div>

                        {/*  Stat Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-zinc-900/40 p-3 border border-zinc-900/80 text-xs">
                            <div>
                                <span className="text-zinc-500 uppercase block">Main Attributes</span>
                                <span className="text-yellow-500 font-semibold font-space mt-2 block">{activeJob.stats.class}</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 uppercase block">Difficulty</span>
                                <span className=" font-bold font-space mt-2 block">{activeJob.stats.difficulty}</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 uppercase block">Location</span>
                                <span className="font-bold font-space mt-2 block">{activeJob.location}</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 uppercase block">Duration</span>
                                <span className="font-bold font-space mt-2 block">{activeJob.duration}</span>
                            </div>
                            <div>
                                <span className="text-zinc-500 uppercase block">Exp Unlocked</span>
                                <div className="font-semibold font-space  grid grid-cols-3 gap-2 mt-2" title={activeJob.stats.expGained}>
                                    {activeJob.stats.expGained.split(',').map((skill, i) => (
                                        <div key={i} className='outline outline-dashed outline-zinc-600 rounded bg-zinc-900/40 p-1 text-center text-[0.6rem] font-bold'>{skill}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Icons */}
                        <div>
                            <h4 className="text-xs uppercase text-zinc-500 tracking-wider mb-2">Abilities Used</h4>
                            <div className='flex flex-wrap gap-2 mt-3 font-space font-semibold'>
                                {activeJob.techStacks.map((tech, i) => (
                                    <div
                                        key={i}
                                        className='group/badge flex items-center gap-0 bg-white/5 border border-1 border-dashed  border-white/10 rounded-lg p-2 cursor-default transition-all duration-300 hover:bg-white/10 hover:border-white/20 overflow-hidden'
                                    >
                                        {tech.iconLink ? (
                                            <Image src={tech.iconLink} alt={""} width={18} height={18} className='w-[18px] h-[18px] object-contain shrink-0' />
                                        ) : (
                                            <span className='w-[18px] h-[18px] flex items-center justify-center text-[0.6rem] text-white/50 bg-white/10 rounded shrink-0'>{tech.name.charAt(0)}</span>
                                        )}
                                        <span className='max-w-0 group-hover/badge:max-w-[100px] overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap text-xs text-white/70 group-hover/badge:ml-2'>
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Logs */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xs uppercase text-zinc-500 tracking-wider">Work Log</h4>
                            <ul className="flex flex-col gap-3 text-sm text-zinc-300 leading-relaxed">
                                {activeJob.responsibilities.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 font-space">
                                        <span className="text-pink-500 select-none mt-0.5 font-press font-bold text-sm  p-1">{'>'}</span>
                                        <span className='font-bold'>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}