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
        <div className='flex flex-col gap-7 mt-5 items-center'>
            {
                workCardDetails.map((item) => {
                    return (
                        <div className='w-full flex flex-col gap-7' key={item.id}>
                            <div className='flex justify-between '  >
                                <div className='flex-col group'>
                                    <div className='text-white flex gap-2'>
                                        <button className='hidden group-hover:block text-yellow-400'
                                            onClick={() => {
                                                if (activeWorkId.includes(item.id)) {
                                                    setActiveWorkId(prev => prev.filter(id => id !== item.id))
                                                } else {
                                                    setActiveWorkId(prev => [...prev, item.id])
                                                }
                                            }}>{'>'}</button>
                                        {item.company}
                                    </div>
                                    <div className='text-sm text-white/80'>{item.role}</div>
                                </div>
                                <div className='flex-col'>
                                    <div className='text-sm text-white/80'>{item.duration}</div>
                                    <div className='text-end text-sm text-white/80'>{item.location}</div>
                                </div>
                            </div>
                            {activeWorkId.includes(item.id) &&

                                <div className='flex flex-col text-[0.5rem] text-white/80 gap-2'>
                                    {item.responsibilities.map((resp) => {
                                        return (
                                            <div>
                                                <span className='text-pink-400'>{'>'}</span>{resp}
                                            </div>
                                        )
                                    })}
                                </div>}

                        </div>





                    )
                })
            }

        </div>

    )
} 
