import React from "react";
import { useAudio } from "../hooks/useAudio";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const {
    isPlaying,
    toggle,
    progress,
    duration,
    currentTime,
    isLoading,
    error,
  } = useAudio(src);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 mx-auto max-w-md">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4">
        {error ? (
          <div className="text-red-500 text-center text-sm font-medium">
            {error}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono opacity-60 w-10">
                {formatTime(currentTime)}
              </span>
              <div className="flex-1 mx-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-text-primary)] transition-all duration-300 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-mono opacity-60 w-10 text-right">
                {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={toggle}
              disabled={isLoading}
              className="w-full flex items-center justify-center py-4 bg-[var(--color-text-primary)] text-white rounded-xl font-bold text-lg active:scale-[0.98] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isPlaying ? "Pausa audio" : "Ascolta la guida"}
            >
              {isLoading ? (
                <span className="animate-pulse">Caricamento...</span>
              ) : isPlaying ? (
                <span className="flex items-center gap-2">PAUSA</span>
              ) : (
                <span className="flex items-center gap-2">ASCOLTA</span>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
