'use client'
import HeroSmallerScreen from "./HeroSmallerScreen";
import HeroLargeScreen from "./HeroLargeScreen";

export default function Hero() {
    return (
        <div className="">
            {/* Mobile/Tablet layout */}
            <div className="lg:hidden">
                <HeroSmallerScreen />
            </div>
            {/* Desktop layout */}
            <div className="hidden lg:block">
                <HeroLargeScreen />
            </div>


        </div>
    )
}