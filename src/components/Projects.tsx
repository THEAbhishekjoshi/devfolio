import Image from "next/image"
import { motion } from "motion/react"
import { div } from "motion/react-client"

const projectList = [
    {
        id: "yu",
        name: "Yuva",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations, and community-driven initiatives. The application serves as a dynamic hub for discovering events, joining groups, and engaging in skill-based volunteering, fostering a vibrant ecosystem of youth participation and personal growth.",
        longDescription: [
            "Built an end-to-end event management system with robust authentication and secure payment gateway integration",
            "Architected scalable backend infrastructure using Node.js and managed complex database schemas with PostgreSQL",
            "Developed responsive frontend interfaces using React and integrated third-party APIs for seamless user experience",
            "Implemented real-time notification services to keep users engaged and informed about relevant activities and events",
        ],
        techStack: [{ name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        ],

    },
    {
        id: "hui",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations, and community-driven initiatives. The application serves as a dynamic hub for discovering events, joining groups, and engaging in skill-based volunteering, fostering a vibrant ecosystem of youth participation and personal growth.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        ],

    },
    {
        id: "hui",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations, and community-driven initiatives. The application serves as a dynamic hub for discovering events, joining groups, and engaging in skill-based volunteering, fostering a vibrant ecosystem of youth participation and personal growth.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        ],

    },
    {
        id: "hui",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations, and community-driven initiatives. The application serves as a dynamic hub for discovering events, joining groups, and engaging in skill-based volunteering, fostering a vibrant ecosystem of youth participation and personal growth.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        ],

    },
    {
        id: "hui",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations, and community-driven initiatives. The application serves as a dynamic hub for discovering events, joining groups, and engaging in skill-based volunteering, fostering a vibrant ecosystem of youth participation and personal growth.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        ],

    },
    {
        id: "hui",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations, and community-driven initiatives. The application serves as a dynamic hub for discovering events, joining groups, and engaging in skill-based volunteering, fostering a vibrant ecosystem of youth participation and personal growth.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        { name: "", iconLink: "" },
        ],

    },

]

export default function Projects() {
    return (
        <div className="flex flex-col gap-7">
            <div className="grid grid-cols-2    ">
                <div className="flex flex-col gap-7 ">
                    {
                        projectList.map((proj, idx) => {
                            if (idx < 5) {
                                return (
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            transition: {
                                                duration: 0.25,
                                            }

                                        }}
                                        whileTap={{
                                            scale: 0.8
                                        }}

                                        key={proj.id} className="flex flex-row rounded-md hover:bg-white/10 p-2 gap-6 ">
                                        <div className="text-2xl  ">{idx < 10 ? '0' + (idx + 1) : (idx + 1)}</div>
                                        <div className="flex flex-col gap-2">
                                            <div>{proj.name}</div>
                                            <div className="text-[0.4rem] text-white/80 font-space">{proj.shortDescription}</div>
                                        </div>

                                    </motion.div>
                                )
                            }
                        })
                    }

                </div>
                <div className="bg-white/10 border border-white/10  rounded-lg m-2 ">
                    <div className="border-b-1 border-white/20 w-full p-2 flex gap-2  ">
                        <div className="rounded-full bg-white/40 w-[10px] h-[10px]"></div>
                        <div className="rounded-full bg-white/30 w-[10px] h-[10px]"></div>
                        <div className="rounded-full bg-white/20 w-[10px] h-[10px]"></div>
                    </div>
                    <div className=" p-2">
                        <Image
                            src='/valley1.jpg'
                            width={200}
                            height={200}
                            alt=""
                            className="w-full h-full object-cover rounded-t-md"
                        />
                        <div className="bg-black/40 backdrop-blur-xl rounded-b-md border border-white/10 h-[8rem] grid grid-cols-3 items-center justify-between p-4 px-6 text-white font-space">

                            {/* Highlight 1 */}
                            <div className="flex flex-col gap-1 h-full mt-2">
                                <span className="text-xs text-yellow-400 uppercase tracking-widest font-bold">Key Feature</span>
                                <span className="text-[0.4rem] font-semibold text-white/90">Reduced Manual Entry by 80% </span>
                            </div>

                            {/* Tech Stack Icons */}
                            <div className="flex flex-col gap-2 h-full items-center border-x border-white/10 px-4 mt-2">
                                <span className="text-xs text-yellow-400 uppercase tracking-widest font-bold">Built With</span>
                                <div className="flex flex-row gap-3">
                                    {/* React Icon SVG */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-transform cursor-pointer"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse></svg>
                                    {/* Node Icon SVG */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-green-500 hover:text-green-400 hover:scale-110 transition-transform cursor-pointer"><path d="M12 2L22 7.77V16.2L12 22L2 16.2V7.77L12 2Z"></path><path d="M12 12L12 22"></path><path d="M12 12L22 6.2"></path><path d="M12 12L2 6.2"></path></svg>
                                    {/* Next.js SVG */}
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white hover:text-gray-300 hover:scale-110 transition-transform cursor-pointer"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.9392 17.1593L10.0573 9.47959H8.38135V14.6548H9.68007V10.6698L14.7828 17.3228C15.1873 17.2917 15.5714 17.237 15.9392 17.1593ZM15.6593 14.6548V9.47959H14.3615V14.6548H15.6593Z" /></svg>
                                </div>
                            </div>

                            {/* Action Links */}
                            <div className="h-full px-4 mt-2 ">
                                <div className="flex flex-row gap-2 w-full max-w-[120px]">
                                    <button className="bg-pink-600 hover:bg-pink-500 text-white text-[0.5rem] py-1.5 px-3 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        Live Demo
                                    </button>
                                    <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white text-[0.5rem] py-1.5 px-3 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        Source Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ></div>
                </div >



            </div >
            <div className={`flex justify-center ${projectList.length > 5 ? '' : 'hidden'}`}>
                <div className="w-50  border-white border-2 p-2 text-center text-xs">Show More</div>
            </div>
        </div>
    )
}