import { useEffect, useMemo, useRef, useState } from "react";
import { GameEngine } from "react-game-engine";
import { Physics } from "./Physics/main";
import Entities from "./entities";
import { createMovement } from "./Physics/Movement";
import { createGameRules } from "./Physics/gameRules";
import { useKeyboard } from "./hooks/useKeyboard";
import "./Game.css";
import MainStart from "./Components/Start";
import GameOver from "./Components/GameOver";

const getViewport = () => ({
  width: Math.min(window.innerWidth, 800),
  height: window.visualViewport?.height ?? window.innerHeight,
});

interface GameControlsProps {
  setKey: (code: string, isPressed: boolean) => void;
}

const GameControls = ({ setKey }: GameControlsProps) => {
  const controlProps = (code: string) => ({
    onPointerDown: (event: React.PointerEvent<HTMLButtonElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      setKey(code, true);
    },
    onPointerUp: () => setKey(code, false),
    onPointerCancel: () => setKey(code, false),
    onPointerLeave: () => setKey(code, false),
  });

  return (
    <div className="game-controls" aria-label="Controles do jogo">
      <div className="game-control-group">
        <button
          type="button"
          aria-label="Mover para a esquerda"
          {...controlProps("KeyA")}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Mover para a direita"
          {...controlProps("KeyD")}
        >
          →
        </button>
      </div>
      <button
        className="game-jump"
        type="button"
        aria-label="Pular"
        {...controlProps("KeyW")}
      >
        Pular
      </button>
    </div>
  );
};

const Game = () => {
  const { keys: keyboard, setKey } = useKeyboard();
  const [viewport, setViewport] = useState(getViewport);

  const [gameState, setGameState] = useState<"start" | "playing" | "gameOver">(
    "gameOver",
  );
  const [round, setRound] = useState<number>(0);
  const [score] = useState<number>(0);

  const gameEngineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    const updateViewport = () => setViewport(getViewport());
    const visualViewport = window.visualViewport;

    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);
    visualViewport?.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
      visualViewport?.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    const engine = gameEngineRef.current;

    return () => {
      engine?.stop();
    };
  }, [round, viewport]);

  const entities = useMemo(() => {
    void round;
    return Entities({ viewport });
  }, [round, viewport]);
  const movement = useMemo(() => createMovement(keyboard), [keyboard]);
  const gameRules = useMemo(() => {
    void round;
    return createGameRules(() => setGameState("gameOver"));
  }, [round]);

  const handleStartGame = () => {
    setGameState("playing");
  };

  const restartGame = () => {
    setGameState("playing");
    setRound((currentRound) => currentRound + 1);
  };

  const returnToStart = () => {
    setGameState("start");
  };

  if (gameState === "start")
    return <MainStart onClickStart={handleStartGame} />;

  return (
    <section className="game-shell">
      <div className="game-viewport">
        <GameEngine
          key={`${round}-${viewport.width}-${viewport.height}`}
          ref={gameEngineRef}
          running={gameState === "playing"}
          entities={entities}
          style={{ width: "100%", height: "100%" }}
          className="game-engine"
          systems={[movement, Physics, gameRules]}
        />
        <GameControls setKey={setKey} />
      </div>

      {gameState === "gameOver" && (
        <GameOver
          restartGame={restartGame}
          score={score}
          returnToStart={returnToStart}
        />
      )}
    </section>
  );
};

export default Game;
