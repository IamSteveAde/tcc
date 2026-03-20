"use client";

import { useRef, useState, useEffect } from "react";
import { Volume2, X } from "lucide-react";

export default function AudioWelcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  // Smooth delayed entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const playAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = false;
    audioRef.current.play().then(() => {
      setShowPrompt(false);
    });
  };

  const dismiss = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/audio/wel.mp3" preload="auto" />

      {showPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

          {/* BACKDROP */}
          <div
            onClick={dismiss}
            className="
              absolute inset-0
              bg-black/40
              backdrop-blur-md
              opacity-0
              animate-fadeIn
            "
          />

          {/* MODAL */}
          <div
            className="
              relative z-10
              w-full max-w-md
              rounded-3xl
              bg-white/90
              backdrop-blur-xl
              border border-white/20
              shadow-[0_40px_120px_rgba(0,0,0,0.25)]
              p-6 sm:p-7
              opacity-0
              animate-scaleIn
            "
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={dismiss}
              aria-label="Dismiss audio prompt"
              className="
                absolute top-4 right-4
                text-black/40 hover:text-black
                transition
              "
            >
              <X size={18} />
            </button>

            {/* ICON */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#004CFE]/10 flex items-center justify-center text-[#004CFE]">
                <Volume2 size={20} />
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#000028] mb-2">
                Welcome to TCC 2026
              </h3>

              <p className="text-sm text-black/70 leading-relaxed">
                <span className="block sm:hidden">
                  Listen to a quick message about what this experience is really about.
                </span>

                <span className="hidden sm:block">
                  Would you like a short audio message about what The Career Core Conference is truly about and why it matters for your future?
                </span>
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 flex flex-col gap-3">

              <button
                onClick={playAudio}
                className="
                  w-full
                  rounded-full
                  bg-[#004CFE]
                  px-6 py-3
                  text-xs
                  tracking-[0.25em]
                  uppercase
                  text-white
                  hover:bg-[#003ad6]
                  active:scale-[0.98]
                  transition-all duration-200
                "
              >
                Play Message
              </button>

              <button
                onClick={dismiss}
                className="
                  text-xs
                  text-black/50
                  hover:text-black
                  transition
                "
              >
                Skip
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}