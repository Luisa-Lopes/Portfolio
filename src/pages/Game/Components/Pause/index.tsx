import {
  ArrowPathIcon,
  HomeIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import "../GameOver/style.css";
import "./style.css";

interface IPause {
  continueGame: () => void;
  restartGame: () => void;
  returnToStart: () => void;
}

const Pause = ({ continueGame, restartGame, returnToStart }: IPause) => {
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
