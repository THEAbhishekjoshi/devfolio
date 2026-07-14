'use Client'
import { useState } from "react"
import { projectListType } from "@/data/projectList"
import { motion } from "framer-motion"
import Image from "next/image"


export default function DesktopViewProject({ projectList }: { projectList: projectListType[] }) {
    const [activeProject, setActiveProject] = useState(projectList[0]);
    return (
        <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-4 ">

            {/* Project List */}
            <div className="flex flex-col gap-4 md:gap-7">
                {projectList.slice(0, 5).map((proj, idx) => (
                    <motion.div
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.98 }}
                        onHoverStart={() => setActiveProject(proj)}
                        key={proj.id}
                        className={`flex flex-row rounded-md p-3 gap-6 cursor-pointer transition-colors ${activeProject.id === proj.id ? 'bg-white/20' : 'hover:bg-white/10'
                            }`}
                    >

                        <div className="text-xl lg:text-2xl font-bold opacity-80 mt-1">
                            {idx < 9 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-md lg:text-lg font-semibold ">{proj.name}</div>
                            <div className="text-sm lg:text-md text-white/70 line-clamp-2 leading-relaxed  font-space  font-semibold break-words">
                                {proj.shortDescription}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/*  Project Preview Card */}
            <div className="bg-white/5 border border-white/10 rounded-lg m-2 flex flex-col overflow-hidden">
                {/* Dots */}
                <div className="border-b border-white/10 w-full p-3 flex gap-2 bg-black/20">
                    <div className="rounded-full bg-red-400/80 w-[12px] h-[12px]"></div>
                    <div className="rounded-full bg-yellow-400/80 w-[12px] h-[12px]"></div>
                    <div className="rounded-full bg-green-400/80 w-[12px] h-[12px]"></div>
                </div>

                <div className="p-4 flex-1 flex flex-col">

                    <div className="relative h-[20rem] w-full rounded-t-md overflow-hidden">
                        <Image
                            src={activeProject.links.imageLink}
                            fill
                            alt={activeProject.name}
                            className="object-cover"
                        />
                    </div>


                    <div className="bg-black/60 backdrop-blur-xl rounded-b-md border border-white/10 p-4 flex flex-col gap-7 text-white">
                        {/* Dynamic Title */}
                        <h3 className="text-lg lg:text-xl font-bold">{activeProject.name}</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Highlight 1 */}
                            <div className="flex flex-col gap-1 min-h-[5rem] text-xs">
                                <span className=" text-yellow-400 uppercase tracking-widest font-bold">Key Feature</span>
                                <div className="flex flex-col gap-1 font-space font-semibold text-white/90 ">
                                    {activeProject.keyFeatures.map((feature, index) => {
                                        if (index >= 3) return
                                        return (
                                            <span key={index} className="line-clamp-1">
                                                {index + 1}.{feature}
                                            </span>
                                        )
                                    })}
                                </div>


                            </div>

                            {/* Tech Stack Icons */}
                            <div className="flex flex-col gap-2 ">
                                <span className="text-xs text-yellow-400 uppercase tracking-widest font-bold">Built With</span>
                                <div className="flex flex-row gap-3 ">
                                    {activeProject.techStack.map((tech, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <Image
                                                src={tech.iconLink}
                                                width={24}
                                                height={24}
                                                alt={tech.name}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-row gap-3 mt-2 font-space font-semibold">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={activeProject.links.live}
                                className="bg-pink-600 hover:bg-pink-500 text-white text-xs lg:text-sm py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer w-full">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={activeProject.links.github}
                                className="bg-transparent border border-white/30 hover:bg-white/10 text-white text-xs lg:text-sm py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer w-full">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}