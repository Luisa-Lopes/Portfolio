import {
  ArrowPathIcon,
  HomeIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "../GameOver/style.css";
import "./style.css";
import { soundManager } from "../../audio/SoundManager";

interface IPause {
  continueGame: () => void;
  restartGame: () => void;
  returnToStart: () => void;
}

const Pause = ({ continueGame, restartGame, returnToStart }: IPause) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(
    soundManager.isMusicPlaying,
  );
  const [areEffectsEnabled, setAreEffectsEnabled] = useState(
    soundManager.areEffectsEnabled,
  );

  return (
    <section className="game-over-overlay" aria-labelledby="game-pause-title">
      <div className="game-over-panel game-pause-panel">
        <div className="game-over-eyebrow">
          <span className="game-over-eyebrow__line" />
          <span>Jogo pausado</span>
          <span className="game-over-eyebrow__line" />
        </div>
        <div className="game-over-heading flex flex-col items-center">
          <span className="game-pause-icon" aria-hidden="true">
            <PauseIcon />
          </span>
          <h1 id="game-pause-title">Pausa na aventura</h1>
          <p>Escolha uma ação para continuar sua aventura.</p>
        </div>
        <div className="game-pause-actions" aria-label="Ações da pausa">
          <button
            type="button"
            className="game-pause-action game-pause-action--primary"
            aria-label="Continuar jogo"
            title="Continuar jogo"
            onClick={continueGame}
          >
            <PlayIcon aria-hidden="true" />
          </button>
          <button
            type="button"
            className="game-pause-action"
            aria-label="Reiniciar jogo"
            title="Reiniciar jogo"
            onClick={restartGame}
          >
            <ArrowPathIcon aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`game-pause-action${!isMusicPlaying ? " game-pause-action--muted" : ""}`}
            aria-label={isMusicPlaying ? "Parar música" : "Tocar música"}
            aria-pressed={isMusicPlaying}
            title={isMusicPlaying ? "Parar música" : "Tocar música"}
            onClick={() => setIsMusicPlaying(soundManager.toggleMusic())}
          >
            {isMusicPlaying ? (
              <SpeakerWaveIcon aria-hidden="true" />
            ) : (
              <SpeakerXMarkIcon aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className={`game-pause-action${!areEffectsEnabled ? " game-pause-action--muted" : ""}`}
            aria-label={
              areEffectsEnabled ? "Parar efeitos sonoros" : "Ativar efeitos sonoros"
            }
            aria-pressed={areEffectsEnabled}
            title={
              areEffectsEnabled ? "Parar efeitos sonoros" : "Ativar efeitos sonoros"
            }
            onClick={() =>
              setAreEffectsEnabled(soundManager.toggleEffects())
            }
          >
            {areEffectsEnabled ? (
              <SpeakerWaveIcon aria-hidden="true" />
            ) : (
              <SpeakerXMarkIcon aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="game-pause-action"
            aria-label="Voltar ao menu"
            title="Voltar ao menu"
            onClick={returnToStart}
          >
            <HomeIcon aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pause;
