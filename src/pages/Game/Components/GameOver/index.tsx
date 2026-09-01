import "./style.css";

interface IGameOver {
  restartGame: () => void;
  score: number;
  returnToStart: () => void;
}

const GameOver = ({ restartGame, score, returnToStart }: IGameOver) => {
  return (
    <section className="game-over-overlay" aria-labelledby="game-over-title">
      <div className="game-over-panel">
        <div className="game-over-eyebrow">
          <span className="game-over-eyebrow__line" />
          <span>Run encerrada</span>
          <span className="game-over-eyebrow__line" />
        </div>
        <div className="game-over-heading flex flex-col items-center">
          <h1 id="game-over-title">Fim da aventura</h1>
          <p className="">
            Você chegou longe. Que tal tentar superar sua marca?
          </p>
        </div>
        <div
          className="game-over-score"
          aria-label={`Pontuação final: ${score}`}
        >
          <span>Pontuação final</span>
          <strong>{score.toLocaleString("pt-BR")}</strong>
          <small>pontos conquistados</small>
        </div>
        <div className="game-over-actions">
          <button
            onClick={restartGame}
            type="button"
            className="game-over-button"
          >
            <span aria-hidden="true">↻</span>
            Tentar novamente
          </button>
          <button
            onClick={returnToStart}
            type="button"
            className="game-over-menu-button"
          >
            <span aria-hidden="true">⌂</span>
            Voltar ao menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameOver;
