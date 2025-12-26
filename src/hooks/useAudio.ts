import { useRef, useState, useEffect, useCallback } from "react";

interface AudioState {
  isPlaying: boolean;
  duration: number;
  currentTime: number;
  progress: number; // 0-100
}

interface UseAudioReturn extends AudioState {
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
  isLoading: boolean;
  error: string | null;
}

export const useAudio = (src: string): UseAudioReturn => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    duration: 0,
    currentTime: 0,
    progress: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    // Mobile audio handling: preload metadata
    audio.preload = "metadata";

    const setAudioData = () => {
      setState((prev) => ({ ...prev, duration: audio.duration }));
      setIsLoading(false);
    };

    const setAudioTime = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      setState((prev) => ({
        ...prev,
        currentTime: audio.currentTime,
        progress: Number.isNaN(progress) ? 0 : progress,
      }));
    };

    const handleEnded = () => {
      setState((prev) => ({ ...prev, isPlaying: false, progress: 100 }));
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setError("Impossibile caricare l'audio.");
      setIsLoading(false);
    };

    // Events
    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    // Initial load check in case event fired before listener
    if (audio.readyState >= 1) {
      setAudioData();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setState((prev) => ({ ...prev, isPlaying: true }));
      setError(null);
    } catch (err) {
      console.error("Play failed:", err);
      // Auto-play policies might block this if not triggered by user interaction
      setError("Premi play per ascoltare.");
      setState((prev) => ({ ...prev, isPlaying: false }));
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setState((prev) => ({ ...prev, isPlaying: false }));
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setState((prev) => ({ ...prev, currentTime: time }));
  }, []);

  return {
    ...state,
    play,
    pause,
    toggle,
    seek,
    isLoading,
    error,
  };
};
