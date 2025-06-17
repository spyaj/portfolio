"use client";

import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Ensure lucide-react is installed

const MusicAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Track playback position
  const [duration, setDuration] = useState(0); // Track song duration
  const [progress, setProgress] = useState(0); // Progress in percentage
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Define your playlist array (place songs in public/songs/)
  const playlist = [
    { title: "Dhairya", artist: "Sajjan Raj Vaidya", src: "/songs/heartbeat.mp3" },
    { title: "Kati Baschau Pardesamai", artist: "Trishna Gurung", src: "/songs/song1.mp3" },
    { title: "Hataarindai, Bataasindai", artist: "Sajjan Raj Vaidya", src: "/songs/song2.mp3" },
    { title: "Changa", artist: "Yabesh Thapa", src: "/songs/song3.mp3" },
    { title: "Najeek", artist: "Bartika Eam Rai", src: "/songs/song4.mp3" },
    { title: "Sapana Ko Mayalu", artist: "The Elements", src: "/songs/song5.mp3" },
  ];

  // Reset currentTime and initialize audio on mount/reload
  useEffect(() => {
    setCurrentTime(0); // Start from beginning on reload
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update progress and duration, handle song end
  useEffect(() => {
    if (audioRef.current) {
      const updateProgress = () => {
        setCurrentTime(audioRef.current!.currentTime);
        setDuration(audioRef.current!.duration);
        setProgress((audioRef.current!.currentTime / audioRef.current!.duration) * 100 || 0);
      };
      const handleEnded = () => {
        nextSong(); // Move to next song when current ends
      };
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        audioRef.current!.removeEventListener("timeupdate", updateProgress);
        audioRef.current!.removeEventListener("ended", handleEnded);
      };
    }
  }, [currentSongIndex]);

  // Handle audio playback
  const playAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(playlist[currentSongIndex].src);
      audioRef.current.loop = false; // Disable loop to allow next song
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current!.duration);
      });
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
  };

  // Handle audio pause
  const pauseAudio = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime); // Save current position
      audioRef.current.pause();
      setIsPlaying(false);
      console.log("Audio paused, saved currentTime:", currentTime, "Animation stopped");
    }
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Navigate to next song and play if isPlaying is true
  const nextSong = () => {
    if (audioRef.current) {
      setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
      audioRef.current.src = playlist[(currentSongIndex + 1) % playlist.length].src;
      setCurrentTime(0);
      if (isPlaying) {
        playAudio(); // Play automatically if already playing
      }
    }
  };

  // Navigate to previous song and play if isPlaying is true
  const prevSong = () => {
    if (audioRef.current) {
      setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
      audioRef.current.src =
        playlist[(currentSongIndex - 1 + playlist.length) % playlist.length].src;
      setCurrentTime(0);
      if (isPlaying) {
        playAudio(); // Play automatically if already playing
      }
    }
  };

  // Update progress on slider change
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    if (audioRef.current) {
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      console.log("Audio muted:", !isMuted);
    }
  };

  return (
    <div className="relative flex h-48 flex-col items-center justify-center">
      <div className="mb-2 text-sm text-secondary dark:text-secondary-foreground">
        {playlist[currentSongIndex].title}
      </div>
      <div className="mb-2 text-sm text-secondary dark:text-secondary-foreground">
        Song by {playlist[currentSongIndex].artist}
      </div>
      <div
        className={`heartbeat-container w-full max-w-xs ${isPlaying ? "playing" : ""}`}
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
      <div className="my-2 flex w-full max-w-xs items-center justify-center space-x-2">
        <button
          onClick={prevSong}
          className="text-secondary hover:text-foreground dark:text-secondary-foreground dark:hover:text-foreground"
          aria-label="Previous song"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={togglePlayPause}
          className="rounded-full bg-gray-200 px-3 py-1 text-secondary shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-500"
          aria-label={isPlaying ? "Pause sound" : "Play  sound"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={nextSong}
          className="text-secondary hover:text-foreground dark:text-secondary-foreground dark:hover:text-foreground"
          aria-label="Next song"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleProgressChange}
        className="progress-slider w-full max-w-xs"
      />
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
