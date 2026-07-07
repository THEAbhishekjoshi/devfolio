import PixelBar from "./PixelBar"
import { useState } from "react"
import SkillModal from "./SkillModal"
import { devedexStats } from "@/data/devedexStats";


export default function DevedexV2() {
    const [selectedSkill, setSelectedSkill] = useState<{ category: string, skills: Record<string, string> } | null>(null)

    const skillBars = devedexStats.map((d) => {
        const { label, capability } = d
        const totalCap = Object.keys(capability).length
        const completed = Object.values(capability).filter((status) => status == "Completed").length
        const percentage = Math.round((completed / totalCap) * 100)
        return { label: label, value: percentage, capability: capability }
    })


    return (
        <>
            <div className='w-full max-w-[25rem] h-[30rem] bg-black/80 border-2  border-zinc-600 p-1 shadow-[8px_8px_0px_rgba(0,0,0,0.8)]'>


                <div className='border-2 border-[#4a4e69] p-4 flex flex-col h-full '>

                    {/* Header Strip */}
                    <div className='flex justify-between items-center border-b-2 border-dashed border-[#4a4e69] pb-3 mb-4'>
                        <div className='flex items-center gap-3'>
                            {/* indicator light */}
                            {/* <div className='w-3 h-3 rounded-full bg-blue-400 border border-white animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]'></div> */}
                            <h2 className='font-press text-white text-sm tracking-widest uppercase'>DEVÉDEX</h2>
                        </div>
                        <div className='text-slate-400 font-mono text-[10px]'>DATA_LOG</div>
                    </div>

                    {/* Stats Container*/}
                    <div className=' border-2 border-[#4a4e69] p-4 flex flex-col justify-evenly flex-grow overflow-y-auto custom-scrollbar-devedex'>

                        {skillBars.map((item, index) => (
                            <div
                                key={index}
                                className='w-full cursor-pointer hover:bg-white/5 transition-colors p-2 -mx-2 rounded-md'
                                onClick={() => setSelectedSkill({ category: item.label, skills: item.capability })}
                            >
                                <PixelBar label={item.label} value={item.value} />
                            </div>
                        ))}

                    </div>

                    {/* Bottom Text */}
                    <div className='mt-3 flex justify-between items-center text-slate-500 font-mono text-[9px] uppercase'>
                        <span>Scanning complete...</span>
                        <span>{skillBars.length} entries found</span>
                    </div>

                </div>
            </div>

            <SkillModal
                isOpen={!!selectedSkill}
                onClose={() => setSelectedSkill(null)}
                category={selectedSkill?.category || null}
                skills={selectedSkill?.skills || null}
            />
        </>
    )
}