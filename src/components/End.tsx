import ShapeGrid from './ShapeGrid'
import DecryptedText from './DecryptedText'

export default function GameEnd() {

    return (
        <footer className="relative overflow-hidden w-full h-dvh mt-16  border-pink-700/60 pt-16 pb-12 flex flex-col items-center justify-center text-center font-press">

            {/* Background Pixel Snow Component */}
            <div className="absolute inset-0 ">

                <ShapeGrid
                    speed={0.5}
                    squareSize={40}
                    direction='down'
                    borderColor="#221a20ff"
                    hoverFillColor='#4ADE80'
                    shape='square'
                    hoverTrailAmount={0}
                />
            </div>
            {/* #BE185D */}
            <div className="relative z-10 flex flex-col items-center justify-center ">

                {/* Retro Animated Banner */}
                <div className="mb-4 text-sm md:text-2xl text-green-500 animate-bounce mt-5">
                    <DecryptedText
                        text="⚔️ QUEST COMPLETED! ⚔️"
                        speed={60}
                        maxIterations={10}
                        characters="ABCD1234!?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />

                </div>

                <div className="text-[0.65rem] text-white max-w-md leading-relaxed mb-10 px-4 uppercase tracking-wide flex flex-col gap-2">

                    <p className='text-white/80'>You&apos;ve reached the final checkpoint</p>

                    <p className='mt-5 italic font-mono font-extrabold  animate-pulse hover:text-white'>~ If my work resonates with you,
                        let&apos;s connect and build something remarkable</p>
                </div>

                {/* Interactive  Menu */}
                <div className="bg-black/40 border-4 border-double border-green-700 p-6 max-w-sm mx-4 mb-12 flex flex-col gap-4 text-left shadow-[0_0_5px_#4ADE80,0_0_10px_#4ADE80]">
                    <div className="flex justify-between items-center border-b border-green-700/50 pb-2 mb-2">
                        <span className="text-[0.55rem] text-white">{"//"} SYSTEM MENU</span>
                        <span className="text-[0.5rem] text-white/40">LV. 99</span>
                    </div>

                    {/* EMAIL*/}
                    <a
                        href="abhishekjoshi.739.ak@example.com"
                        className="group flex flex-row items-start gap-3 text-white hover:text-green-400 transition-colors text-[0.65rem] md:text-xs"
                    >
                        <div className="w-4 text-green-400 lg:invisible lg:group-hover:visible">{'>'}</div>
                        <span>START NEW QUEST (EMAIL)</span>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/abhishek-joshi-403a6423b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-row items-start gap-3 text-white hover:text-green-400 transition-colors text-[0.65rem] md:text-xs"
                    >
                        <div className="w-4 text-green-400 lg:invisible lg:group-hover:visible">{'>'}</div>
                        <span>ADD TO PARTY (LINKEDIN)</span>
                    </a>
                    {/* RESUME */}
                    <a
                        href="/Resume/resumeAbhishek.pdf"
                        download
                        className="group flex flex-row items-start gap-3 text-white hover:text-green-400 transition-colors text-[0.65rem] md:text-xs"
                    >
                        <div className="w-4 text-green-400 lg:invisible lg:group-hover:visible">{'>'}</div>
                        <span>DOWNLOAD CHARACTER SHEET (RESUME)</span>
                    </a>

                    {/* BACK TO TOP */}
                    <button
                        onClick={() => window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })}
                        className="group flex flex-row items-center gap-3 text-white hover:text-green-400 transition-colors text-[0.65rem] md:text-xs text-left w-full disabled:text-emerald-400 disabled:pointer-events-none"
                    >
                        <div className="w-4 text-green-400 lg:invisible lg:group-hover:visible">{'>'}</div>
                        <span className="uppercase">RESPAWN AT CHECKPOINT (BACK TO TOP)</span>
                    </button>
                </div>

                {/* Classic Arcade Footer Credits */}
                <div className="text-[0.4em] text-white/30 tracking-widest leading-loose uppercase">
                    © 2026 ABHISHEK. All Rights Reserved. <br />
                    <span className="animate-pulse text-green-500/80">Insert Coin to Continue / Created with Next.js</span>
                </div>

            </div>
        </footer>
    )
}