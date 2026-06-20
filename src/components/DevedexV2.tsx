import PixelBar from "./PixelBar"

export default function DevedexV2() {
    return (
        //border-2  border-zinc-600
        <div className='w-full max-w-[25rem] h-[30rem] bg-black/80 border-2  border-zinc-600 p-1 shadow-[8px_8px_0px_rgba(0,0,0,0.8)]'>


            <div className='border-2 border-[#4a4e69] p-4 flex flex-col h-full'>

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
                <div className=' border-2 border-[#4a4e69] p-4 flex flex-col justify-evenly flex-grow'>

                    <div className='w-full'>
                        <PixelBar label="Frontend" value={30} />
                    </div>

                    <div className='w-full'>
                        <PixelBar label="Backend" value={30} />
                    </div>

                    <div className='w-full'>
                        <PixelBar label="Open Source" value={30} />
                    </div>

                    <div className='w-full'>
                        <PixelBar label="DSA Journey" value={30} />
                    </div>

                    <div className='w-full'>
                        <PixelBar label="AI" value={30} />
                    </div>

                </div>

                {/* Bottom Text */}
                <div className='mt-3 flex justify-between items-center text-slate-500 font-mono text-[9px] uppercase'>
                    <span>Scanning complete...</span>
                    <span>5 entries found</span>
                </div>

            </div>
        </div>
    )
}