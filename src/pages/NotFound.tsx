import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
        Pace a voi
      </h1>
      <p className="text-lg mb-8 opacity-80">
        Sembra che abbiate smarrito il sentiero.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full font-medium shadow-lg active:scale-95 transition-transform"
        aria-label="Torna alla pagina principale"
      >
        Ritorna al Presepe
      </Link>
    </div>
  );
};

export default NotFound;
