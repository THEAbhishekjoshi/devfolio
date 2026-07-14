'use client'

import { projectList } from "@/data/projectList"
import { ChevronLeft, ChevronRight, Lock } from "lucide-react"
import { div } from "motion/react-client"
import Image from "next/image"
import { useState } from "react"

const pageSize = 4
export default function project() {
    const [activeProject, setActiveProject] = useState(projectList[0])
    const [page, setPage] = useState<number>(0)
    const totalPages = Math.ceil(projectList.length / pageSize)
    const pageItems = projectList.slice(page * pageSize, page * pageSize + pageSize)
    const isLastPage = page === totalPages - 1
    const showComingSoon = isLastPage && pageItems.length < pageSize

    // const movePage = (move: "up" | "down") => {
    //     let nextMove = 0
    //     // up
    //     if (page > 0) {
    //         nextMove++
    //         setPage(nextMove)
    //     }
    //     // down
    //     if (page < totalPages) {
    //         nextMove--
    //         setPage(nextMove)
    //     }

    // }


    return (
        <div className="min-h-screen font-press text-white p-4 md:p-8 mt-5">
            {/* Page Title */}
            <div className="max-w-6xl mx-auto border-b border-zinc-800 pb-4 mb-8">
                <h1 className="text-lg md:text-xl lg:text-2xl tracking-wider uppercase font-extrabold flex items-center gap-2">
                    <span className="text-pink-500">▣</span>
                    <span className='mt-2'>Inventory</span>
                </h1>
            </div>


            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* left column: Project Cards */}
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-2 gap-4">
                        {pageItems.map((project, idx) => {
                            const isActive = project.id === activeProject.id
                            const globalIndex = page * pageSize + idx + 1
                            return (
                                <div key={project.id} className={`relative border  ${isActive ? 'border-yellow-400/40 ' : 'border-zinc-700'} flex flex-col items-center justify-center gap-2 py-8 px-4 group cursor-pointer transition-colors hover:bg-zinc-900/40`}
                                    onClick={() => setActiveProject(project)}
                                >
                                    <span className="absolute top-1 left-1.5 text-[10px] text-zinc-500 font-bold font-space">
                                        {globalIndex}
                                    </span>
                                    {isActive &&
                                        <>
                                            <span className="absolute top-0 left-0 border-yellow-400 w-8 h-8 border border-t-2 border-l-2 border-r-0 border-b-0 border-yellow-400" />
                                            <span className="absolute top-0 right-0 border-yellow-400 w-8 h-8 border border-t-2 border-l-0 border-r-2 border-b-0 border-yellow-400" />
                                            <span className="absolute bottom-0 left-0 border-yellow-400 w-8 h-8 border border-t-0 border-l-2 border-r-0 border-b-2 border-yellow-400" />
                                            <span className="absolute bottom-0 right-0 border-yellow-400 w-8 h-8 border border-t-0 border-l-0 border-r-2 border-b-2 border-yellow-400" />
                                        </>
                                    }
                                    {project.links.icon ? (
                                        <span
                                            className={`w-[30px] h-[30px] group-hover:bg-yellow-400 transition-colors duration-300 ${isActive ? 'bg-yellow-400' : 'bg-zinc-700'}`}
                                            style={{
                                                WebkitMaskImage: `url(${project.links.icon})`,
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                maskImage: `url(${project.links.icon})`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center',
                                            }}
                                        />
                                    ) : (

                                        <span className="w-[30px] h-[30px]" />
                                    )}

                                    <p className=" text-[10px] px-1 text-center text-white font-space font-semibold">{project.name}</p>
                                </div>
                            )
                        })
                        }
                        {showComingSoon && (
                            <div className="border border-white/40 flex flex-col items-center justify-center gap-2 p-8 opacity-20 ">
                                <Lock size={24} />
                                <p className="text-white font-space font-semibold">???</p>
                            </div>
                        )}
                    </div>
                    {
                        <div className="flex items-center justify-center gap-4 mt-5">
                            <button
                                onClick={() => setPage((p) => Math.max(0, p - 1))}
                                disabled={page === 0}
                                className="w-7 h-7 flex items-center justify-center border border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-zinc-500 transition-colors"
                            >
                                <ChevronLeft size={14} />
                            </button>
                            <span className="text-[10px] text-zinc-500 font-space tracking-widest">
                                PAGE {page + 1} / {totalPages}
                            </span>
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                                disabled={page === totalPages - 1}
                                className="w-7 h-7 flex items-center justify-center border border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-zinc-500 transition-colors"
                            >
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    }
                </div>
                {/* right column: */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    {/* Project Preview */}
                    <div className="border border-white/20 rounded-sm">
                        {/* Dots */}
                        <div className="border-b border-white/10 w-full p-3 flex gap-2 bg-black/20">
                            <div className="rounded-full bg-red-400/80 w-[12px] h-[12px]"></div>
                            <div className="rounded-full bg-yellow-400/80 w-[12px] h-[12px]"></div>
                            <div className="rounded-full bg-green-400/80 w-[12px] h-[12px]"></div>
                        </div>


                        {/* Project Image */}
                        <div className="relative h-[20rem] w-full rounded-t-md overflow-hidden">
                            <Image
                                src={activeProject.links.imageLink}
                                fill
                                alt={activeProject.name}
                                className="object-cover"
                            />
                        </div>

                    </div>

                    <div className="">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg lg:text-xl font-bold hover:text-pink-400 cursor-pointer transition-colors">{activeProject.name}</div>
                            <div className="text-xs md:text-sm font-space font-semibold text-white/90">{activeProject.shortDescription}</div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-5">
                            {/* Highlight 1 */}
                            <div className="flex flex-col gap-1 min-h-[5rem] ">
                                <span className=" text-yellow-400 uppercase tracking-widest font-bold text-xs">Build Log</span>
                                <div className="flex flex-col gap-3 font-space font-semibold text-white/90 text-xs md:text-sm mt-2">
                                    {activeProject.longDescription.map((feature, index) => {
                                        if (index >= 3) return
                                        return (
                                            <span key={index} className="">
                                                {index + 1}.{feature}
                                            </span>
                                        )
                                    })}
                                </div>


                            </div>

                            {/* Tech Stack Icons */}
                            <div className="flex flex-col gap-2 ">
                                <span className="text-xs text-yellow-400 uppercase tracking-widest font-bold">Built With</span>
                                <div className="flex flex-row gap-3 mt-1">
                                    {activeProject.techStack.map((tech, index) => (
                                        <div key={index} className="flex flex-col items-center" title={tech.name}>
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
                    </div>
                </div>
            </div>
        </div>

    )
}