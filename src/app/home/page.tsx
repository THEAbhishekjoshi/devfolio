// 'use client';

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//     const sectionRef = useRef(null);

//     const box1 = useRef(null);
//     const box2 = useRef(null);
//     const box3 = useRef(null);

//     useEffect(() => {
//         if (
//             sectionRef.current &&
//             box1.current &&
//             box2.current &&
//             box3.current
//         ) {
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,

//                     start: "top top",

//                     end: "+=1500",

//                     scrub: true,

//                     pin: true,

//                     markers: true
//                 }
//             });

//             tl
//                 // .fromTo(
//                 //     box1.current,
//                 //     {
//                 //         opacity: 1,
//                 //         y: 0
//                 //     },
//                 //     {
//                 //         opacity: 0,
//                 //         y: 100
//                 //     }
//                 // )

//                 .fromTo(
//                     box2.current,
//                     {
//                         opacity: 0,
//                         y: -100
//                     },
//                     {
//                         opacity: 1,
//                         y: 0
//                     }
//                 )

//                 .fromTo(
//                     box3.current,
//                     {
//                         opacity: 0,
//                         y: -100
//                     },
//                     {
//                         opacity: 1,
//                         y: 0
//                     }
//                 );
//         }
//     }, []);

//     return (
//         <div className="min-h-[300vh] bg-pink-500">
//             <div
//                 ref={sectionRef}
//                 className="h-screen bg-black flex items-center justify-center"
//             >
//                 <div className="relative w-[300px] h-[300px]">
//                     <div
//                         ref={box1}
//                         className="absolute w-40 h-40 bg-red-300 rounded-md"
//                     />

//                     <div
//                         ref={box2}
//                         className="absolute w-40 h-40 bg-blue-300 rounded-md"
//                     />

//                     <div
//                         ref={box3}
//                         className="absolute w-40 h-40 bg-green-300 rounded-md"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }