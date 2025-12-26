import React from "react";
import { Outlet } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans antialiased">
      <main className="mx-auto max-w-md min-h-screen relative shadow-2xl bg-white/50 backdrop-blur-sm">
        <div className="min-h-full pb-32">
          {" "}
          {/* Padding bottom for sticky audio player */}
          <Outlet />
        </div>
      </main>
      <AudioPlayer src="/Presepe_2025_audio.m4a" />
    </div>
  );
};

export default Layout;
