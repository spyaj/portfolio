"use client";

import { useEffect, useRef, useState } from "react";

const MusicAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Track playback position
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reset currentTime on component mount (page load/reload)
  useEffect(() => {
    setCurrentTime(0); // Start from beginning on reload
    return () => {
      // Cleanup audio on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = () => {
    if (!isPlaying) {
      if (!audioRef.current) {
        audioRef.current = new Audio("/heartbeat.mp3");
        audioRef.current.loop = true;
        console.log("Audio initialized:", audioRef.current.src);
      }
      audioRef.current.muted = isMuted;
      audioRef.current.currentTime = currentTime; // Resume from last position
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("Audio playing, currentTime:", currentTime, "Animation active");
        })
        .catch((e) => {
          console.error("Audio playback failed:", e);
          setIsPlaying(false);
        });
    }
  };

  const pauseAudio = () => {
    if (isPlaying && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime); // Save current position
      audioRef.current.pause();
      setIsPlaying(false);
      console.log("Audio paused, saved currentTime:", currentTime, "Animation stopped");
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      console.log("Audio muted:", !isMuted);
    }
  };

  return (
    <div className="relative flex h-48 flex-col items-center justify-center">
      <style jsx>{`
        .heartbeat-line {
          stroke-width: 3;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: ${isPlaying
            ? "flow 4s linear infinite, beat 1s ease-in-out infinite"
            : "none"};
        }
        .heartbeat-line-2 {
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: ${isPlaying
            ? "flow 4s linear infinite reverse, beat 1s ease-in-out infinite"
            : "none"};
        }
        @keyframes flow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200);
          }
        }
        @keyframes beat {
          0%,
          20%,
          40%,
          60%,
          80%,
          100% {
            transform: scaleY(1);
          }
          10%,
          30%,
          50%,
          70% {
            transform: scaleY(1.2);
          }
        }
        .heartbeat-container {
          overflow: hidden;
        }
      `}</style>
      <div
        className="heartbeat-container w-full max-w-xs"
        role="img"
        aria-label="Heartbeat animation with sound control, visible when music plays"
      >
        <svg width="400" height="80" viewBox="0 0 400 80" className="w-full">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} /> {/* rose-400 */}
              <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />{" "}
              {/* pink-500 */}
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />{" "}
              {/* amber-400 */}
              <stop offset="100%" style={{ stopColor: "#f97316", stopOpacity: 1 }} />{" "}
              {/* orange-500 */}
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="heartbeat-line"
            stroke="url(#gradient1)"
            filter="url(#glow)"
            d="M0 40 H50 L60 30 L80 50 L100 30 L120 50 L140 30 L150 40 H200
               H250 L260 30 L280 50 L300 30 L320 50 L340 30 L350 40 H400"
          />
          <path
            className="heartbeat-line-2"
            stroke="url(#gradient2)"
            filter="url(#glow)"
            d="M0 42 H50 L60 32 L80 52 L100 32 L120 52 L140 32 L150 42 H200
               H250 L260 32 L280 52 L300 32 L320 52 L340 32 L350 42 H400"
            style={{ animationDelay: "0.2s" }}
          />
        </svg>
      </div>
      <button
        onClick={togglePlayPause}
        className="mt-4 rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500"
        aria-label={isPlaying ? "Pause heartbeat sound" : "Play heartbeat sound"}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        onClick={toggleMute}
        className="absolute top-0 right-0 rounded-full bg-card p-1.5 text-secondary shadow-sm transition-all duration-300 hover:scale-105"
        aria-label={isMuted ? "Unmute heartbeat sound" : "Mute heartbeat sound"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default MusicAnimation;
