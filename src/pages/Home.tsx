import React from "react";

const Home: React.FC = () => {
  return (
    <div className="px-6 py-8 s-prose">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 tracking-tight">
          Presepe di San Rocco
        </h1>
        <p className="text-[var(--color-text-primary)] opacity-80 text-lg italic">
          26 Dicembre 2024
        </p>
      </header>

      <article className="space-y-6 text-xl leading-relaxed text-[var(--color-text-primary)] opacity-90">
        <p>
          Benvenuti al Presepe Vivente di San Rocco. Vi invitiamo a immergervi
          in questa rappresentazione sacra, dove la tradizione incontra la fede
          in un'atmosfera di pace e serenità.
        </p>
        <p>
          Mentre camminate attraverso le scene, ascoltate la guida audio che vi
          accompagnerà in questo viaggio spirituale, raccontandovi la storia
          della Natività come non l'avete mai sentita.
        </p>
        {/* Placeholder for more content */}
        <div className="h-32 flex items-center justify-center border-2 border-dashed border-[var(--color-accent-end)] rounded-xl bg-white/30">
          <span className="text-sm opacity-50">Contenuto Narrativo...</span>
        </div>
      </article>

      {/* Audio Player placeholder will be injected via Layout or placed here later */}
    </div>
  );
};

export default Home;
