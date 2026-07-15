export default function ResumePage() {
    return (
        <div className="w-full min-h-[calc(100vh-100px)] p-4 md:px-10 pb-10 flex flex-col items-center font-press mt-5">
            <div className="w-full max-w-5xl border-b border-zinc-800 pb-4 mb-8">
                <h1 className="text-lg md:text-xl lg:text-2xl tracking-wider uppercase font-extrabold flex items-center gap-2 text-white">
                    <span className="text-pink-500">▣</span>
                    <span className="mt-2">Resume</span>
                    <span className="text-green-400 mt-2 text-sm">.pdf</span>
                </h1>
            </div>
            <iframe 
                src="/Resume/resumeAbhishek.pdf" 
                className="w-full max-w-5xl h-[75vh] border-2 border-zinc-600 bg-zinc-900 shadow-[8px_8px_0px_rgba(74,222,128,0.5)]"
                title="Resume"
            />
        </div>
    )
}
