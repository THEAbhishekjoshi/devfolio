'use client'
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { skillCategories } from "@/data/skillData"

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
