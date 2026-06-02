"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";


const battleSequence = [
  { text: "A wild RECRUITER appeared!", color: "text-white" },
  { text: "Go! ABHISHEK!", color: "text-white" },
  { text: "ABHISHEK used FULL-STACK DEV!", color: "text-white" },
  { text: "It's super effective! 💥", color: "text-yellow-300" },
  { text: "RECRUITER fainted!", color: "text-red-400" },
  { text: "ABHISHEK gained 9999 XP!", color: "text-green-400" },
];

const menuItems = [
  { label: "FIGHT", icon: "⚔️" },
  { label: "SKILLS", icon: "🛡️" },
  { label: "PROJECTS", icon: "📦" },
  { label: "RUN", icon: "💨" },
];

export default function BattleScene() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [flash, setFlash] = useState(false);
  const [shake, setShake] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    const msg = battleSequence[msgIndex].text;
    let i = 0;
    setIsTyping(true);
    setDisplayText("");

    const interval = setInterval(() => {
      if (i < msg.length) {
        setDisplayText(msg.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);

        // trigger flash on "super effective"
        if (msg.includes("super effective")) {
          setFlash(true);
          setShake(true);
          setTimeout(() => setFlash(false), 600);
          setTimeout(() => setShake(false), 400);
        }

        // auto‑advance after a pause
        timerRef.current = setTimeout(() => {
          setMsgIndex((prev) => (prev + 1) % battleSequence.length);
        }, 2200);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [msgIndex]);

  // cycle menu
  useEffect(() => {
    const id = setInterval(() => {
      setActiveMenu((p) => (p + 1) % menuItems.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 w-[320px]">
      {/* ── HP bar area ── */}
      <div className="w-full bg-black/70 border-2 border-white/60 rounded px-3 py-2 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[0.5rem] text-yellow-300 tracking-wider">ABHISHEK</span>
          <span className="text-[0.4rem] text-white/50">Lv. 99</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[0.4rem] text-white/50">HP</span>
          <div className="w-24 h-2 bg-white/10 rounded-sm overflow-hidden border border-white/20">
            <div
              className="h-full bg-green-400 rounded-sm transition-all duration-1000"
              style={{ width: "92%" }}
            />
          </div>
        </div>
      </div>

      {/* ── sprite area ── */}
      <div className="relative flex items-center justify-center h-52 w-full">
        {/* flash overlay */}
        {flash && (
          <div className="absolute inset-0 bg-yellow-300/40 rounded-lg z-20 animate-pulse" />
        )}

        {/* ambient glow */}
        <div className="absolute w-32 h-32 bg-orange-500/15 rounded-full blur-3xl" />

        {/* sprite */}
        <div
          className={`relative z-10 transition-transform ${shake ? "animate-[battleShake_0.1s_ease-in-out_3]" : ""
            }`}
          style={{
            animation: shake
              ? undefined
              : "spriteFloat 3s ease-in-out infinite",
          }}
        >
          <Image
            src="/char4.png"
            width={180}
            height={180}
            alt="battle sprite"
            className="object-contain drop-shadow-[0_0_20px_rgba(255,165,0,0.35)]"
          />
        </div>

        {/* ground shadow */}
        <div className="absolute bottom-2 w-28 h-3 bg-black/40 rounded-full blur-sm" />
      </div>

      {/* ── dialogue box ── */}
      <div className="relative w-full battle-dialog-box bg-[#1a1a2e] border-[3px] border-white/80 rounded-md p-3 min-h-[68px]">
        {/* inner highlight border */}
        <div className="absolute inset-[3px] border border-white/15 rounded pointer-events-none" />

        <p
          className={`text-[0.6rem] leading-relaxed ${battleSequence[msgIndex].color} relative z-10`}
        >
          {displayText}
          {isTyping && (
            <span className="inline-block ml-1 animate-pulse text-white">
              ▌
            </span>
          )}
        </p>

        {!isTyping && (
          <div className="absolute bottom-1.5 right-2.5 animate-bounce text-yellow-300 text-[0.5rem]">
            ▼
          </div>
        )}
      </div>

      {/* ── battle menu ── */}
      <div className="w-full bg-[#1a1a2e] border-[3px] border-white/80 rounded-md p-2.5 grid grid-cols-2 gap-x-4 gap-y-2">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            className={`text-[0.55rem] text-left transition-all duration-200 flex items-center gap-1.5 py-0.5 px-1 rounded-sm
              ${activeMenu === i
                ? "text-yellow-300 bg-white/5"
                : "text-white/50 hover:text-white/80"
              }`}
          >
            <span
              className={`transition-opacity duration-200 ${activeMenu === i ? "opacity-100" : "opacity-0"
                }`}
            >
              ▸
            </span>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
