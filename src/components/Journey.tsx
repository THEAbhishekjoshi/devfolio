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
        image: "/charmander1.png",
    },
    {
        title: "Developer",
        image: "/charmeleon.png",
    },
    {
        title: "Engineer",
        image: "/charizard1.png",
    }
];

export default function Journey() {
    const sectionRef =
        useRef<HTMLDivElement>(null);

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
                                `${(index + 1) * 25}% top`,

                            scrub: true,

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
        <section ref={sectionRef} className="">
            <div className="  grid grid-cols-2 items-center px-10">
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
                        (
                            stage,
                            index
                        ) => (
                            <div
                                key={
                                    stage.title
                                }
                                className={`
                  text-3xl
                  transition-all
                  duration-300
                  ${activeIndex ===
                                        index
                                        ? "text-white glow"
                                        : "text-white/30"
                                    }
                `}
                            >
                                {stage.title}

                                {index !==
                                    stages.length -
                                    1 && (
                                        <div>
                                            ↓
                                        </div>
                                    )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}