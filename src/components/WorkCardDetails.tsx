'use client'
import { useState } from "react"

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

export default function WorkCArdDetials() {
    const [activeWorkId, setActiveWorkId] = useState<string[]>([])

    return (
        <div className='flex flex-col gap-12 mt-5 items-center'>
            {
                workCardDetails.slice(0, 5).map((item) => {
                    return (
                        <div className="w-full flex flex-row gap-2 group">
                            {/* toggle button */}
                            <button className={`h-full  lg:hidden lg:group-hover:block text-yellow-400 transition-transform duration-300 ${activeWorkId.includes(item.id) ? 'rotate-90' : ''}`}
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
                                <div className='flex flex-col gap-2 md:flex-row md:gap-0 md:justify-between '>
                                    <div className='flex flex-col  '>

                                        <div className='text-xs lg:text-sm'>{item.company}</div>

                                        <div className='text-xs lg:text-sm text-white/80'>{item.role}</div>
                                    </div>
                                    <div className='flex-col'>
                                        <div className='text-xs lg:text-sm'>{item.duration}</div>
                                        <div className='text-start md:text-end text-xs lg:text-sm text-white/80'>{item.location}</div>
                                    </div>
                                </div>
                                {activeWorkId.includes(item.id) &&

                                    <div className='flex flex-col text-md text-white/80 gap-2 font-space font-semibold'>
                                        {item.responsibilities.map((resp) => {
                                            return (
                                                <div className="flex flex-row gap-2 ">
                                                    <span className='text-pink-400 font-press'>{'>'}</span>
                                                    <div className="text-white/70">{resp}</div>
                                                </div>
                                            )
                                        })}
                                    </div>}

                            </div>
                        </div>





                    )
                })
            }

            {workCardDetails.length > 5 && (
                <div className="flex justify-center mt-4">
                    <button className="w-32 sm:w-42  lg:w-48 border-white/60 border-2 p-2 md:p-3 text-center text-[0.5rem] sm:text-xs lg:text-sm rounded hover:bg-white/10 transition-colors cursor-pointer">
                        Show More
                    </button>
                </div>
            )}
        </div>

    )
} 
