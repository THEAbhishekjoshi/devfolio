'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { devedexStats } from '../data/devedexStats'
import SkillModal from './SkillModal'

const titleList = [
    "Full Stack Developer",
    "Engineer",
    "Explorer"
]

const battleLines = [
    { text: "A wild RECRUITER appeared!", color: "text-white" },
    { text: "ABHISHEK used FULL-STACK DEV!", color: "text-white" },
    { text: "It's super effective!", color: "text-yellow-300" },
    { text: "ABHISHEK gained 9999 XP!", color: "text-green-400" },
]


export default function HeroSmallerScreen() {
    // Typewriter effect
    const [displayTitle, setDisplayTitle] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [msgIndex, setMsgIndex] = useState(0)
    const [selectedSkill, setSelectedSkill] = useState<{ category: string, skills: Record<string, string> } | null>(null)

    useEffect(() => {
        let i = 0
        const msg = titleList[msgIndex]
        setIsTyping(true)
        setDisplayTitle("")

        const interval = setInterval(() => {
            if (i < msg.length) {
                setDisplayTitle(msg.slice(0, i + 1))
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

    const skillBars = devedexStats.map((d) => {
        const { label, capability } = d
        const totalCap = Object.keys(capability).length
        const completed = Object.values(capability).filter((status) => status == "Completed").length
        const percentage = Math.round((completed / totalCap) * 100)
        return { label: label, value: percentage, capability }
    })

    return (
        <>
            <section className="py-4  rounded-t-lg">
                <div className="px-3">
                    {/* MAIN CARD */}
                    <div className="bg-white/5 backdrop-blur-sm border-2 border-zinc-600 p-1 ">
                        <div className="border border-[#4a4e69] flex flex-col">

                            {/*  Header Strip  */}
                            <div className="flex justify-between items-center border-b border-dashed border-[#4a4e69] px-3 py-2">
                                <h1 className="font-press text-white text-[0.5rem] sm:text-xs tracking-widest">TRAINER CARD</h1>
                                <div className="text-yellow-400 text-[0.5rem] sm:text-xs">★★★</div>
                            </div>

                            {/*  Profile Row: Avatar + Identity  */}
                            <div className="flex gap-3 sm:gap-4 p-3 items-center">
                                {/* Avatar */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-black border-2 border-white p-0.5">
                                    <Image
                                        src='/pfp.png'
                                        width={200}
                                        height={200}
                                        alt='profile image'
                                        className='object-cover w-full h-full'
                                    />
                                </div>

                                {/* Name + Title + Status */}
                                <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                                    <p className="font-press text-yellow-300 text-xs sm:text-sm">ABHISHEK</p>
                                    <div className="text-[9px] sm:text-[11px] font-mono text-green-400 min-h-[1.2rem]">
                                        {`> `}{displayTitle}
                                        {isTyping && (
                                            <span className="inline-block animate-pulse text-green-400 ml-0.5">█</span>
                                        )}
                                    </div>
                                    {/* Status indicator */}
                                    <div className="flex items-center gap-1.5">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                        </span>
                                        <span className="text-green-400 text-[7px] sm:text-[8px] tracking-widest font-mono">
                                            AVAILABLE FOR QUESTS
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/*  Quick Stats Grid  */}
                            <div className="mx-3 bg-black/50 border border-[#4a4e69] p-2.5 grid grid-cols-2 gap-x-4 gap-y-1.5">
                                <div className="flex justify-between items-baseline border-b border-[#4a4e69]/40 pb-1">
                                    <span className="font-press text-[6px] sm:text-[7px] text-slate-400 uppercase">ID</span>
                                    <span className="font-mono text-[9px] sm:text-[10px] text-white">#ABH-001</span>
                                </div>
                                <div className="flex justify-between items-baseline border-b border-[#4a4e69]/40 pb-1">
                                    <span className="font-press text-[6px] sm:text-[7px] text-slate-400 uppercase">Region</span>
                                    <span className="font-mono text-[9px] sm:text-[10px] text-white">India</span>
                                </div>
                                <div className="flex justify-between items-baseline border-b border-[#4a4e69]/40 pb-1">
                                    <span className="font-press text-[6px] sm:text-[7px] text-slate-400 uppercase">XP</span>
                                    <span className="font-mono text-[9px] sm:text-[10px] text-white">OSS / Projects</span>
                                </div>
                                <div className="flex justify-between items-baseline border-b border-[#4a4e69]/40 pb-1">
                                    <span className="font-press text-[6px] sm:text-[7px] text-slate-400 uppercase">Lv.</span>
                                    <span className="font-mono text-[9px] sm:text-[10px] text-yellow-300">99</span>
                                </div>
                            </div>

                            {/*  DEVÉDEX: Mini Skill Bars */}
                            <div className="mx-3 mt-2 border border-[#4a4e69] bg-black/50">
                                {/* Devedex header */}
                                <div className="flex justify-between items-center px-2.5 py-1.5 border-b border-dashed border-[#4a4e69]">
                                    <span className="font-press text-white text-[7px] sm:text-[8px] tracking-widest uppercase">DEVÉDEX</span>
                                    <span className="text-slate-400 font-mono text-[7px]">DATA_LOG</span>
                                </div>

                                {/* Compact skill bars */}
                                <div className="p-2.5 flex flex-col gap-2">
                                    {skillBars.map((skill) => {
                                        const blocks = 8
                                        const filled = Math.round((skill.value * blocks) / 100)
                                        return (
                                            <div
                                                key={skill.label}
                                                className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1 -mx-1 rounded transition-colors"
                                                onClick={() => setSelectedSkill({ category: skill.label, skills: skill.capability })}
                                            >
                                                <span className="font-press text-[6px] sm:text-[7px] text-white/70 w-16 sm:w-20 shrink-0 truncate">
                                                    {skill.label}
                                                </span>
                                                <div className="flex gap-[3px] flex-1">
                                                    {Array.from({ length: blocks }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`h-2.5 flex-1 pixel-box transition-all duration-300 ${i < filled ? "bg-yellow-300" : "bg-white/10"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="font-mono text-[7px] text-white/50 w-6 text-right">{skill.value}%</span>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Scan status */}
                                <div className="px-2.5 pb-1.5 flex justify-between text-slate-500 font-mono text-[6px] sm:text-[7px] uppercase">
                                    <span>Scanning complete...</span>
                                    <span>{skillBars.length} entries</span>
                                </div>
                            </div>

                            {/*  Current Quest  */}
                            <div className="mx-3 mt-2 mb-3 bg-black/50 border border-[#4a4e69] px-2.5 py-2">
                                <span className="font-press text-[6px] sm:text-[7px] text-yellow-400 uppercase tracking-wider">Current Quest</span>
                                <p className="font-mono text-[9px] sm:text-[10px] text-white mt-1">
                                    Learning NextJs and Building Portfolio
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <SkillModal
                isOpen={!!selectedSkill}
                onClose={() => setSelectedSkill(null)}
                category={selectedSkill?.category || null}
                skills={selectedSkill?.skills || null}
            />
        </>
    )
}