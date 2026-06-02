"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import gsap from "gsap";
import {
    ScrollTrigger,
} from "gsap/ScrollTrigger";

gsap.registerPlugin(
    ScrollTrigger
);

const stages = [
    {
        title: "Student",
        image: "/char4.png",
    },
    {
        title: "Developer",
        image: "/chameleonY.png",
    },
    {
        title: "Engineer",
        image: "/charizardX.png",
    }
];

export default function Journey({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) {
    // const sectionRef =
    //     useRef<HTMLDivElement>(null);

    const [activeIndex,
        setActiveIndex] =
        useState(0);

    useEffect(() => {
        const ctx =
            gsap.context(() => {

                stages.forEach(
                    (_, index) => {

                        ScrollTrigger.create({
                            trigger:
                                sectionRef.current,

                            start:
                                `${index * 25}% top`,

                            end:
                                "bottom top",

                            scrub: true,
                            markers: false,

                            onEnter: () =>
                                setActiveIndex(
                                    index
                                ),

                            onEnterBack:
                                () =>
                                    setActiveIndex(
                                        index
                                    ),
                        });
                    }
                );

                ScrollTrigger.create({
                    trigger:
                        sectionRef.current,

                    start: "top top",

                    end: "bottom bottom",

                    pin: true,
                });
            },
                sectionRef);

        return () =>
            ctx.revert();
    }, []);

    return (

        <div className=" mt-10 grid grid-cols-2 items-center ">
            {/* left image */}
            <div className="flex justify-center">
                <img
                    src={
                        stages[
                            activeIndex
                        ].image
                    }
                    alt="avatar"
                    className="h-80 object-contain transition-all duration-500"
                />
            </div>

            {/* right timeline */}
            <div className="space-y-6">
                {stages.map(
                    (stage, index) => (
                        <div
                            key={stage.title}
                            className={` flex flex-col items-center  text-3xl transition-all duration-300 ${activeIndex === index
                                ? "text-yellow-400 glow"
                                : "text-white/30"
                                }
                            `}>
                            {stage.title}

                            {index !== stages.length - 1 && <div className="  ">↓</div>}
                        </div>
                    )
                )}
            </div>
        </div>

    );
}

