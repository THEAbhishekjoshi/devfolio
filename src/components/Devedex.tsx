import PixelBar from "./PixelBar"

export default function Devedex() {
    return (
        <div className='w-full max-w-[25rem] lg:max-w-[25rem] h-[30rem]  bg-black/70 rounded-xl border-2 border-pink-700'>
            <div className='mt-5  border-b border-pink-700/90 text-center py-2 px-5'>Devédex</div>
            <div className='flex flex-col items-center px-5'>
                <div className='flex flex-row mt-5'>
                    <PixelBar label="Frontend" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                    <PixelBar label="Backend" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                    <PixelBar label="Open Source" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                    <PixelBar label="Dsa Journey" value={30} />
                </div>
                <div className='flex flex-row mt-5'>
                    <PixelBar label="AI" value={30} />
                </div>
            </div>

        </div>
    )
}