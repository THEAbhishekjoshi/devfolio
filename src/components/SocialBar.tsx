"use client";

import { useEffect, useState } from "react";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/THEAbhishekjoshi",
    color: "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhishek-joshi-403a6423b/",
    color: "hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.6)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://x.com/buildWithAbhi",
    color: "hover:text-black hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:abhishekjoshi.739.ak@gmail.com",
    color: "hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
      </svg>
    ),
  },
]



export default function SocialBar() {
  const [contribution, setContribution] = useState<number | null>(null)

  const stats = [
    { label: "PROJECTS", value: "5+" },
    { label: "CONTRIBUTIONS", value: contribution },
    { label: "INTERNSHIPS", value: "2" },
  ]

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        setContribution(data.contributionCalendar.totalContributions)
      })
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 w-full">

      {/* stats  */}
      <div className="flex items-center w-full h-full order-1 lg:order-2">
        <div className="flex items-start justify-between md:justify-start lg:justify-center w-full">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-start gap-2 sm:gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-white text-xs lg:text-sm tracking-wide">
                  {contribution === null ? (
                    <div className="w-8 h-4 rounded bg-white/10 animate-pulse" />
                  ) : (
                    `${stat.label === "CONTRIBUTIONS" ? `${contribution}+` : stat.value}`
                  )}
                </span>
                <span className="text-white/30 text-[0.30rem] md:text-[0.35rem] lg:text-[0.45rem] tracking-widest text-center">{stat.label === "CONTRIBUTIONS" ? <div className="flex flex-col items-center">
                  <div>{stat.label}</div>
                  <div className="text-[0.25rem] md:text-[0.3rem] lg:text-[0.35rem] uppercase">(last 3 months)</div>
                </div> : stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-6 bg-white/10 mr-1 md:mr-6 lg:mr-2 mt-1" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* social icons  */}
      <div className="flex items-center justify-between md:justify-end w-full gap-3 sm:gap-4 lg:gap-6 order-2 lg:order-3 ">
        {socials.map((s) => {
          const isEmail = s.url.startsWith("mailto:")
          return (
            <a
              key={s.name}
              href={s.url}
              {...(!isEmail && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              title={s.name}
              className={`
              p-2.5 bg-white/5 border border-white/10 rounded-lg
              text-white/40 transition-all duration-300
              hover:bg-white/10 hover:border-white/20 hover:scale-110
              w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center
              
              ${s.color}
            `}
            >
              {s.icon}
            </a>)
        })}
      </div>

      {/* tagline  */}
      <div className="flex items-center justify-center lg:justify-start w-full order-3 lg:order-1 mt-3 md:mt-7 lg:mt-3 md:col-span-2 lg:col-span-1 font-bold font-space">
        <div className="flex flex-col gap-1 w-full md:w-3/4 lg:w-full">
          <p className="text-white italic text-[0.7rem] lg:text-[0.8rem] leading-relaxed tracking-wider break-words  text-center lg:text-left">
            &quot;The powerful play goes on and you may contribute a verse. What will your verse be?.&quot;
          </p>
          <p className="flex justify-end text-white/80 italic text-[0.7rem] sm:text-[0.8rem] lg:text-[0.8rem] leading-relaxed tracking-wider break-words  text-center lg:text-right pr-2 lg:pr-0">
            - Dead Poets Society
          </p>
        </div>
      </div>
    </div>
  );
}
