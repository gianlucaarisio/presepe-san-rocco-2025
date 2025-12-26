import React from "react";

export type ContentBlock =
  | {
      type: "main-title";
      content: React.ReactNode;
      subContent?: React.ReactNode;
    }
  | { type: "intro"; content: React.ReactNode }
  | { type: "chapter"; title: string; content: React.ReactNode }
  | { type: "transition"; content: React.ReactNode }
  | { type: "quote"; content: React.ReactNode; author?: string }
  | { type: "prayer"; content: React.ReactNode }
  | { type: "reflection"; title: string; content: React.ReactNode }
  | { type: "outro"; content: React.ReactNode };

export const narrativeContent: ContentBlock[] = [
  {
    type: "main-title",
    content: "Alla ricerca di Gesù con i personaggi del presepe: ",
    subContent: "Gli Angeli",
  },
  {
    type: "intro",
    content: (
      <>
        In questo presepe vogliamo evidenziare gli interventi degli Angeli nelle
        vicende della nascita di Gesù, come narrati nei Vangeli di Luca e
        Matteo.
        <br />
        <br />
        La parola “vangelo” (buona novella) deriva dalla parola “angelo” che
        significa messaggero.
        <br />
        Nel mistero della Natività, gli angeli si rivelano proprio come fedeli
        messaggeri di Dio, inviati per annunciare la Nascita del Salvatore.
        <br />
        Essi guidano, annunciano e proteggono, rivelando il piano di salvezza.
        <br />
        <br />
        Abbiamo pertanto realizzato gli avvenimenti in successione.
      </>
    ),
  },
  {
    type: "chapter",
    title: "L’Annunciazione a Maria",
    content: (
      <>
        La storia di Cristo, e del cristianesimo, incomincia con l’apparizione
        di un angelo.
        <br />
        <br />
        L’Arcangelo Gabriele annuncia a Maria, umile Vergine di Nazareth, che
        avrà un Figlio:
        <br />
        <em>
          «Rallegrati, piena di grazia, il Signore è con te. Hai trovato grazia
          presso Dio. Concepirai un figlio, lo darai alla luce e lo chiamerai
          Gesù».
        </em>
        <br />
        <br />
        L’angelo introduce l’accettazione umile e incondizionata di Maria al
        volere del Padre Eterno.
      </>
    ),
  },
  {
    type: "chapter",
    title: "Giuseppe visitato dall’angelo",
    content: (
      <>
        Giuseppe, quando apprende che la promessa sposa è incinta, ha una
        reazione molto umana e pensa di lasciarla.
        <br />
        <br />
        A Giuseppe, sposo giusto, un angelo del Signore appare in sogno:
        <br />
        <em>
          «Non temere di prendere con te Maria, tua sposa, il bambino è generato
          in lei dallo Spirito Santo, tu lo chiamerai Gesù ed egli salverà il
          suo popolo dai suoi peccati».
        </em>
        <br />
        <br />
        Questa visione dissipa ogni dubbio, guidando Giuseppe a custodire il
        Verbo incarnato.
      </>
    ),
  },
  {
    type: "chapter",
    title: "L’angelo annuncia ai pastori la buona novella",
    content: (
      <>
        Un angelo del Signore si manifesta ai pastori:
        <br />
        <em>
          «Non temete, vi annuncio una grande gioia, che sarà per tutto il
          popolo: oggi nella città di Davide è nato per voi il Salvatore, che è
          Cristo Signore».
        </em>
        <br />
        <br />I primi testimoni della nascita di Gesù sono gli umili pastori di
        Betlemme, ed essi accorrono ad adorare il fanciullo.
      </>
    ),
  },
  {
    type: "chapter",
    title: "La nascita di Gesù",
    content: (
      <>
        Per un censimento voluto dall’imperatore Augusto, Giuseppe e Maria, si
        recano a Betlemme e lì la sposa dà alla luce un Bimbo in una stalla e lo
        depone in una mangiatoia.
        <br />
        <br />
        Alla condizione di estrema povertà del Bambino sulla terra corrisponde
        l’esultanza nel cielo.
        <br />
        Una schiera celeste irrompe nella notte:{" "}
        <em>
          «Gloria a Dio nel più alto dei cieli e pace in terra agli uomini di
          buona volontà».
        </em>
      </>
    ),
  },
  {
    type: "chapter",
    title: "I Magi avvisati dall’angelo di non tornare da Erode",
    content: (
      <>
        La protezione angelica continua, avvertiti di non tornare da Erode, per
        un’altra strada fanno ritorno al loro paese, preservando il Bambino
        dalle trame del re che ne temeva la futura grandezza.
      </>
    ),
  },
  {
    type: "chapter",
    title: "La fuga in Egitto",
    content: (
      <>
        L’angelo appare in sogno a Giuseppe:
        <br />
        <em>
          «Alzati, prendi il bambino e sua Madre, fuggi in Egitto e rimani
          finché non ti dirò».
        </em>
        <br />
        <br />
        Giuseppe, Maria e Gesù partono per l’Egitto e vi rimangono fino alla
        morte di Erode, quando l’angelo avvisa nuovamente Giuseppe che possono
        ritornare in Israele.
      </>
    ),
  },
  {
    type: "transition",
    content: (
      <>
        Nel nostro presepe mettiamo in risalto gli Angeli alla nascita di Gesù e
        vogliamo riflettere sul loro ruolo nella nostra vita.
        <br />
        <br />
        Ogni uomo riceve un angelo custode, compagno invisibile assegnato da Dio
        per custodire, illuminare e governare.
        <br />
        Messaggero di Dio, ci accompagna e ci ispira; non si limita a vigilare,
        ma ci può guidare e proteggere.
        <br />
        <br />
        L’Angelo custode ricorda all’uomo che non è solo, ma avvolto da una
        comunione celeste. Ci insegna a contemplare Dio nel quotidiano.
        <br />
        <br />
        Papa Francesco ce lo ricorda il 2 ottobre 2014 nella festa dei Santi
        Angeli Custodi:
      </>
    ),
  },
  {
    type: "quote",
    author: "Papa Francesco, 2 ottobre 2014",
    content:
      "L’angelo custode è una realtà concreta. Dobbiamo ascoltarlo e pregarlo. È vicino a noi, ci accompagna nella vita.",
  },
  {
    type: "transition",
    content: (
      <>
        Queste parole del Santo Padre ci esortano a fidarci di questo messaggero
        personale, che ci sussurra la volontà di Dio e ci difende dalle insidie.
        <br />
        <br />
        Invitiamo dunque lo Spirito a rendere vivo in noi questo dialogo
        celeste, con la preghiera:
      </>
    ),
  },
  {
    type: "prayer",
    content: (
      <>
        Angelo di Dio,
        <br />
        che sei il mio custode,
        <br />
        illumina, custodisci, reggi e
        <br />
        governa me che ti fui affidato
        <br />
        dalla Pietà Celeste.
      </>
    ),
  },
  {
    type: "reflection",
    title: "Riflettiamo",
    content: (
      <>
        Signore, hai mandato anche a me un angelo, ma la fretta, la
        superficialità, il frastuono in cui vivo abitualmente mi hanno impedito
        di scorgerlo.
        <br />
        <br />
        Occorre calma e silenzio per udire voci speciali, per accogliere nel
        cuore certi messaggi.
        <br />
        <br />
        Occorre apertura ad una novità di vita, coraggio e desiderio di amare
        per non rimanere sordi ai tuoi richiami.
      </>
    ),
  },
  {
    type: "outro",
    content:
      "Gli angioletti di legno sono stati benedetti da Don Mauro la notte di Natale; portane uno con te, ti ricorderà il Tuo Angelo.",
  },
];
