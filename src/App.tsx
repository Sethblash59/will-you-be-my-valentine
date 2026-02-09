"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "T'es sérieux ?",
      "Et si je te le demande gentiment ?",
      "Sil te plaît ?",
      "Et si je t'offre un café ?",
      "Un thé alors ?",
      "STEUPLAIT !!",
      "MAIS :*(",
      "Je vais mourir de tristesse...",
      "Ouais je suis morte",
      "Tu parle au fantôme de Sarah là..",
      "Sil te plaît mon coeur :((((",
      "Et si je t'offre un livre ?",
      ":((((",
      "STEUPLAIT MON AMOUR :(((",
      "Jsuis morte là :(",
      "Je vais écrire une fanfiction sur nous pour la peine :(",
      "Non :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            YEAHHHHH , JT'AIME MON AMOUR !!;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Tu veux être mon Valentin ?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Oui
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
