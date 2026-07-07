import { CircleCheckBig, LockKeyhole } from 'lucide-react';
import { useEffect } from 'react';

type SkillModalProps = {
    isOpen: boolean;
    onClose: () => void;
    category: string | null;
    skills: Record<string, string> | null;
}

export default function SkillModal({ isOpen, onClose, category, skills }: SkillModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    if (!isOpen || !category || !skills) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all" onClick={onClose}>
            {/* Modal Content */}
            <div
                className="relative w-full max-w-sm sm:max-w-md bg-black border-2 border-zinc-600 p-1 shadow-[8px_8px_0px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="border-2 border-[#4a4e69] flex flex-col max-h-[85vh]">

                    {/* Header */}
                    <div className="flex justify-between items-center border-b-2 border-dashed border-[#4a4e69] p-3 sm:p-4 bg-black/80">
                        <h2 className="font-press text-yellow-300 text-[10px] sm:text-xs tracking-widest uppercase">
                            {category}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-white font-press text-xs ml-4"
                        >
                            X
                        </button>
                    </div>

                    {/* Skill List */}
                    <div className="p-4 sm:p-5 overflow-y-auto font-mono text-sm sm:text-base text-white bg-black">
                        <ul className="space-y-3">
                            {Object.entries(skills).map(([skill, status]) => (
                                <li key={skill} className="flex items-center gap-3">
                                    <span className="text-base sm:text-lg shrink-0">
                                        {status === 'Completed' ? <CircleCheckBig className='text-green-400/70' /> : <LockKeyhole className='text-yellow-400/70' />}
                                    </span>
                                    <span className={`break-words ${status === 'Completed' ? 'text-white' : 'text-slate-500'}`}>
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-dashed border-[#4a4e69] p-2 sm:p-3 flex justify-between bg-black/80">
                        <span className="text-slate-500 font-mono text-[8px] sm:text-[10px] uppercase">
                            Data Module Loaded
                        </span>
                        <span className="text-slate-500 font-mono text-[8px] sm:text-[10px] uppercase">
                            [{Object.keys(skills).length} SKILLS]
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
