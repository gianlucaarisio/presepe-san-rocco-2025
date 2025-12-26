import React from "react";
import { narrativeContent } from "../constants";

const Home: React.FC = () => {
  return (
    <div className="px-6 py-8 pb-32 max-w-lg mx-auto">
      {narrativeContent.map((block, index) => {
        switch (block.type) {
          case "main-title":
            return (
              <header key={index} className="mb-10 text-center animate-fade-in">
                <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tight leading-tight">
                  {block.content}
                  <br />
                  {block.subContent}
                </h1>
                <div className="w-16 h-2 bg-[var(--color-accent-end)] mx-auto rounded-full" />
              </header>
            );

          case "intro":
            return (
              <p
                key={index}
                className="text-xl font-medium leading-relaxed text-[var(--color-text-primary)] mb-8"
              >
                {block.content}
              </p>
            );

          case "chapter":
            return (
              <section key={index} className="mb-10">
                <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3 relative pl-4 border-l-4 border-[var(--color-accent-end)]">
                  {block.title || ""}
                </h2>
                <p className="text-xl font-medium leading-relaxed text-[var(--color-text-primary)]">
                  {block.content}
                </p>
              </section>
            );

          case "transition":
            return (
              <p
                key={index}
                className="text-xl font-medium leading-relaxed text-[var(--color-text-primary)] mb-8 italic"
              >
                {block.content}
              </p>
            );

          case "quote":
            return (
              <figure
                key={index}
                className="mb-10 p-6 bg-white/60 rounded-xl shadow-sm border border-[var(--color-accent-start)]"
              >
                <blockquote className="text-xl font-medium italic text-[var(--color-text-primary)] mb-4 relative">
                  <span className="absolute -top-5 -left-2 text-5xl text-[var(--color-accent-end)] opacity-70">
                    "
                  </span>
                  <span className="relative z-10">{block.content}</span>
                </blockquote>
                {block.author && (
                  <figcaption className="text-right text-sm font-semibold opacity-70">
                    — {block.author}
                  </figcaption>
                )}
              </figure>
            );

          case "prayer":
            return (
              <div
                key={index}
                className="mb-12 text-center py-8 px-6 bg-gradient-to-b from-[var(--color-accent-start)]/30 to-transparent rounded-2xl mx-2"
              >
                <h3 className="text-base uppercase tracking-widest opacity-60 mb-4 font-bold">
                  Preghiera
                </h3>
                <p className="whitespace-pre-line text-2xl font-medium font-serif leading-loose text-[var(--color-text-primary)]">
                  {block.content}
                </p>
              </div>
            );

          case "reflection":
            return (
              <section
                key={index}
                className="mb-12 p-6 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-text-primary)]/80 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4 border-b border-[var(--color-text-primary)]/80 pb-2">
                  {block.title || "Riflessione"}
                </h3>
                <p className="text-xl leading-relaxed whitespace-pre-line font-medium opacity-95">
                  {block.content}
                </p>
              </section>
            );

          case "outro":
            return (
              <footer
                key={index}
                className="mt-12 text-center p-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-text-primary)]/80 rounded-2xl shadow-lg"
              >
                <div key="icon" className="text-4xl mb-3">
                  🎁
                </div>
                <p className="text-xl font-medium text-[var(--color-text-primary)]">
                  {block.content}
                </p>
              </footer>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default Home;
