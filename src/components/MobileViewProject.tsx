import Image from "next/image"
import { projectListType } from "@/data/projectList"



export default function MobileViewProejct({ projectList }: { projectList: projectListType[] }) {

    return (
        <div className="flex flex-col gap-5 sm:gap-10">
            {projectList.slice(0, 5).map((project, idx) => (
                <div key={idx} className="flex flex-col gap-2 sm:gap-3">
                    <div className="flex flex-row gap-2 text-sm md:text-lg">
                        <div className=" opacity-80">{idx < 9 ? `0${idx + 1}` : idx + 1}</div>
                        <div className="text-sm md:text-lg">{project.name}</div>
                    </div>
                    <div className="text-[0.5rem] sm:text-xs text-white/70 opacity-90 line-clamp-4">{project.shortDescription}</div>
                    <div className="bg-white/5 border border-white/10 rounded-lg  flex flex-col overflow-hidden mt-2">
                        <div className="border-b border-white/10 w-full p-3 flex gap-2 bg-black/20">
                            <div className="rounded-full bg-red-400/80 w-[12px] h-[12px]"></div>
                            <div className="rounded-full bg-yellow-400/80 w-[12px] h-[12px]"></div>
                            <div className="rounded-full bg-green-400/80 w-[12px] h-[12px]"></div>
                        </div>

                        <div className="p-4 flex-1 flex flex-col">
                            <div className="relative aspect-video w-full rounded-t-md overflow-hidden">
                                <Image
                                    src={project.links.imageLink}
                                    fill
                                    alt={project.name}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-5 sm:gap-7 mt-5">
                                <div className="flex flex-col gap-2">
                                    <div className="text-[0.5rem] sm:text-xs font-bold  tracking-widest text-yellow-400 uppercase ">Key Feature</div>
                                    <div className="text-[0.4rem] sm:text-xs flex flex-col gap-2">
                                        {project.keyFeatures.slice(0, 3).map((keyFeature, idx) => (
                                            <div
                                                key={idx}
                                                className="line-clamp-2"
                                            >
                                                {idx + 1}. {keyFeature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 ">
                                    <span className="text-[0.5rem] sm:text-xs text-yellow-400 uppercase tracking-widest font-bold">Built With</span>
                                    <div className="flex flex-row gap-3 ">
                                        {project.techStack.map((tech, index) => (
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

                                {/* Action Links */}
                                <div className="flex flex-row gap-3 mt-2 font-space font-semibold">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.links.live}
                                        className="bg-pink-600 hover:bg-pink-500 text-white text-[0.5rem] md:text-xs py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer w-full">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        Live Demo
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.links.github}
                                        className="bg-transparent border border-white/30 hover:bg-white/10 text-white text-[0.5rem] md:text-xs py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer w-full">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        Source Code
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}