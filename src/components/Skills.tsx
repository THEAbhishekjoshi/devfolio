'use client'
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type Skill = {
    name: string
    icon: string
    level: number
}

type SkillCategory = {
    id: string
    label: string
    tag: string
    color: string
    borderColor: string
    bgGlow: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        label: "FRONTEND",
        tag: "UI Arsenal",
        color: "text-pink-400",
        borderColor: "border-pink-700",
        bgGlow: "bg-pink-500/10",
        skills: [
            { name: "React", icon: "/temp_icon_1.png", level: 4 },
            { name: "Next.js", icon: "/temp_icon_2.png", level: 4 },
            { name: "TailwindCSS", icon: "/temp_icon_3.png", level: 5 },
            { name: "Framer Motion", icon: "/temp_icon_1.png", level: 3 },
            { name: "TypeScript", icon: "/temp_icon_2.png", level: 4 },
            { name: "HTML/CSS", icon: "/temp_icon_3.png", level: 5 },
            { name: "HTML/CSS", icon: "/temp_icon_3.png", level: 5 },
            { name: "HTML/CSS", icon: "/temp_icon_3.png", level: 5 },
            { name: "HTML/CSS", icon: "/temp_icon_3.png", level: 5 },
            { name: "HTML/CSS", icon: "/temp_icon_3.png", level: 5 },
        ]
    },
    {
        id: "backend",
        label: "BACKEND",
        tag: "Server Fortress",
        color: "text-yellow-300",
        borderColor: "border-yellow-600",
        bgGlow: "bg-yellow-500/10",
        skills: [
            { name: "Node.js", icon: "/temp_icon_1.png", level: 4 },
            { name: "Express", icon: "/temp_icon_2.png", level: 4 },
            { name: "PostgreSQL", icon: "/temp_icon_3.png", level: 3 },
            { name: "MongoDB", icon: "/temp_icon_1.png", level: 3 },
            { name: "Supabase", icon: "/temp_icon_2.png", level: 3 },
            { name: "REST APIs", icon: "/temp_icon_3.png", level: 4 },
        ]
    },
    {
        id: "tools",
        label: "TOOLS",
        tag: "Developer Kit",
        color: "text-green-400",
        borderColor: "border-green-700",
        bgGlow: "bg-green-500/10",
        skills: [
            { name: "Git", icon: "/temp_icon_1.png", level: 4 },
            { name: "GitHub", icon: "/temp_icon_2.png", level: 4 },
            { name: "VS Code", icon: "/temp_icon_3.png", level: 5 },
            { name: "Vercel", icon: "/temp_icon_1.png", level: 4 },
            { name: "Figma", icon: "/temp_icon_2.png", level: 3 },
            { name: "Docker", icon: "/temp_icon_3.png", level: 2 },
        ]
    },
    {
        id: "languages",
        label: "LANGUAGES",
        tag: "Core Languages",
        color: "text-red-400",
        borderColor: "border-red-700",
        bgGlow: "bg-red-500/10",
        skills: [
            { name: "JavaScript", icon: "/temp_icon_1.png", level: 4 },
            { name: "Typescript", icon: "/temp_icon_2.png", level: 4 },
            { name: "Python", icon: "/temp_icon_2.png", level: 3 },
        ]
    }
]

export default function Skills() {
    const [activeTab, setActiveTab] = useState<string>("frontend")

    const activeCategory = skillCategories.find(c => c.id === activeTab)!

    return (
        <div className="flex flex-col gap-6 font-press">
            {/* Category Tabs */}
            <div className=" border-2 border-white/80 rounded-md p-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`
                                flex-1 py-2 px-2 sm:px-4 rounded-sm text-[0.45rem] sm:text-[0.55rem] 
                                tracking-wider transition-all duration-300 cursor-pointer
                                ${activeTab === cat.id
                                    ? `${cat.color} bg-white/10 `
                                    : "text-white/40 hover:text-white/70 hover:bg-white/5 "
                                }
                            `}
                        >
                            <span className={`mr-1.5 transition-opacity duration-200 ${activeTab === cat.id ? "opacity-100" : "opacity-0"}`}>
                                ▸
                            </span>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Category Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-black/70 border-2 ${activeCategory.borderColor} rounded-xl overflow-hidden`}
                >
                    {/* Header */}
                    <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className={`text-xs ${activeCategory.color}`}>{activeCategory.label}</span>
                            <span className="text-[0.4rem] text-white/30 tracking-widest uppercase">
                                // {activeCategory.tag}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[0.4rem] text-white/30">{activeCategory.skills.length} EQUIPPED</span>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-3 h-80 overflow-y-auto auto-rows-[6.25rem] custom-scrollbar">
                        {activeCategory.skills.map((skill, idx) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: idx * 0.06 }}
                                whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
                                className={`
                                    group relative bg-white/5 border border-white/10 rounded-lg p-3
                                    hover:bg-white/10 hover:border-white/20
                                    transition-colors duration-300 cursor-default
                                    flex flex-col items-center gap-2.5
                                `}
                            >
                                {/* Glow on hover */}
                                <div className={`absolute inset-0 ${activeCategory.bgGlow} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10">
                                    <Image
                                        src={skill.icon}
                                        fill
                                        alt={skill.name}
                                        className="object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
                                    />
                                </div>

                                {/* Name */}
                                <span className="relative z-10 text-[0.45rem] sm:text-[0.5rem] text-white/80 text-center leading-tight font-space md:text-xs font-bold">
                                    {skill.name}
                                </span>

                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
