import Particles from '@/components/UI/Particles'

export default function GameEnd() {

    return (
        <footer className="relative overflow-hidden w-full h-dvh mt-16  border-pink-700/60 pt-16 pb-12 flex flex-col items-center justify-center text-center font-press">

            {/* Background Pixel Snow Component */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Particles
                    className={""}
                    particleColors={["#FFFFFF"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            {/* #BE185D */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full">

                {/* Retro Animated Banner */}
                <div className="mb-4 animate-bounce text-xl md:text-2xl text-yellow-400 tracking-wider">
                    ⚔️ QUEST COMPLETED! ⚔️
                </div>

                <div className="text-[0.65rem] text-white/70 max-w-md leading-relaxed mb-10 px-4 uppercase tracking-wide flex flex-col gap-2">

                    <p>You've reached the final checkpoint</p>

                    <p>If my work resonates with you,
                        let's connect and build something remarkable</p>
                </div>

                {/* Interactive  Menu */}
                <div className="bg-black border-4 border-double border-pink-700 p-6 max-w-sm w-full mx-4 mb-12 flex flex-col gap-4 text-left shadow-[0_0_15px_rgba(190,24,74,0.3)]">
                    <div className="flex justify-between items-center border-b border-pink-700/50 pb-2 mb-2">
                        <span className="text-[0.55rem] text-pink-400">// SYSTEM MENU</span>
                        <span className="text-[0.5rem] text-white/40">LV. 99</span>
                    </div>

                    {/* EMAIL*/}
                    <a
                        href="mailto:your.email@example.com"
                        className="group flex flex-row items-center gap-3 text-white hover:text-yellow-300 transition-colors text-xs"
                    >
                        <div className="w-4 text-yellow-400 invisible group-hover:visible">{'>'}</div>
                        <span>START NEW QUEST (EMAIL)</span>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-row items-center gap-3 text-white hover:text-yellow-300 transition-colors text-xs"
                    >
                        <div className="w-4 text-yellow-400 invisible group-hover:visible">{'>'}</div>
                        <span>ADD TO PARTY (LINKEDIN)</span>
                    </a>
                    {/* RESUME */}
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-row items-center gap-3 text-white hover:text-yellow-300 transition-colors text-xs"
                    >
                        <div className="w-4 text-yellow-400 invisible group-hover:visible">{'>'}</div>
                        <span>DOWNLOAD CHARACTER SHEET (RESUME)</span>
                    </a>

                    {/* BACK TO TOP */}
                    <button
                        onClick={() => window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })}
                        className="group flex flex-row items-center gap-3 text-white hover:text-yellow-300 transition-colors text-xs text-left w-full disabled:text-emerald-400 disabled:pointer-events-none"
                    >
                        <div className="w-4 text-yellow-400 invisible group-hover:visible">{'>'}</div>
                        <span className="uppercase">RESPAWN AT CHECKPOINT (BACK TO TOP)</span>
                    </button>
                </div>

                {/* Classic Arcade Footer Credits */}
                <div className="text-[0.5rem] text-white/30 tracking-widest leading-loose uppercase">
                    © 2026 ABHISHEK. All Rights Reserved. <br />
                    <span className="animate-pulse text-pink-500/80">Insert Coin to Continue / Created with Next.js</span>
                </div>

            </div>
        </footer>
    )
}