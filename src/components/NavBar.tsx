import Link from "next/link";

export default function NavBar() {
    return (
        <div className="mt-3 mb-5 px-4 max-w-7xl mx-auto flex flex-row justify-center gap-4 sm:gap-5 md:gap-10 lg:gap-16 text-white text-[0.65rem] sm:text-sm lg:text-base font-medium">

            <Link href="/" className='group flex flex-row gap-3 items-center  transition-colors'>
                <div className='hidden lg:group-hover:block text-yellow-400'>{'>'}</div>
                <div>Home</div>
            </Link>
            <Link href="/work" className='group flex flex-row gap-3 items-center transition-colors'>
                <div className='hidden lg:group-hover:block text-yellow-400'>{'>'}</div>
                <div>Work</div>
            </Link>
            <Link href="/project" className='group flex flex-row gap-3 items-center transition-colors'>
                <div className='hidden lg:group-hover:block text-yellow-400'>{'>'}</div>
                <div>Projects</div>
            </Link>
            <Link href="/resume" className='group flex flex-row gap-3 items-center  transition-colors'>
                <div className='hidden lg:group-hover:block text-yellow-400'>{'>'}</div>
                <div>Resume</div>
            </Link>

        </div>
    )
}