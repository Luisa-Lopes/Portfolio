import { useEffect, useMemo, useRef, useState } from "react";
import { PauseIcon } from "@heroicons/react/24/solid";
import { GameEngine } from "react-game-engine";
import { useNavigate } from "react-router-dom";
import { Physics } from "./Physics/main";
import Entities from "./entities";
import { createMovement } from "./Physics/Movement";
import { createGameRules } from "./Physics/gameRules";
import { useKeyboard } from "./hooks/useKeyboard";
import "./Game.css";
import MainStart from "./Components/Start";
import GameOver from "./Components/GameOver";
import Pause from "./Components/Pause";

const getViewport = () => ({
  width: Math.min(window.innerWidth, 800),
  height: window.visualViewport?.height ?? window.innerHeight,
});

interface GameControlsProps {
  setKey: (code: string, isPressed: boolean) => void;
  onPause: () => void;
}

const GameControls = ({ setKey, onPause }: GameControlsProps) => {
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
      <button
        className="game-pause-button"
        type="button"
        aria-label="Pausar jogo"
        title="Pausar jogo"
        onClick={onPause}
      >
        <PauseIcon aria-hidden="true" />
      </button>
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
        <h6>Pular</h6>
      </button>
    </div>
  );
};

const Game = () => {
  const { keys: keyboard, setKey } = useKeyboard();
  const [viewport, setViewport] = useState(getViewport);

  const [gameState, setGameState] = useState<
    "start" | "playing" | "pause" | "gameOver" | "transition"
  >("start");
  const [round, setRound] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setGameState((currentState) =>
          currentState === "playing" ? "pause" : currentState,
        );
        return;
      }

      setGameState((currentState) =>
        currentState === "pause" ? "playing" : currentState,
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const entities = useMemo(() => {
    void round;
    return Entities({ viewport });
  }, [round, viewport]);
  const movement = useMemo(() => createMovement(keyboard), [keyboard]);
  const gameRules = useMemo(() => {
    void round;
    return createGameRules({
      onGameOver: (score: number) => {
        setGameState("gameOver");
        setScore(score);
      },
      onDoorReached: () => setGameState("transition"),
    });
  }, [round]);

  useEffect(() => {
    if (gameState !== "transition") return;

    const timer = window.setTimeout(() => {
      navigate("/?entrada=porta");
    }, 550);

    return () => window.clearTimeout(timer);
  }, [gameState, navigate]);

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

  const pauseGame = () => {
    setGameState("pause");
  };

  if (gameState === "start")
    return <MainStart onClickStart={handleStartGame} />;

  return (
    <section
      className={`game-shell${gameState === "transition" ? " game-shell--leaving" : ""}`}
    >
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
        {gameState !== "transition" && (
          <GameControls setKey={setKey} onPause={pauseGame} />
        )}
      </div>

      {gameState === "gameOver" && (
        <GameOver
          restartGame={restartGame}
          score={score}
          returnToStart={returnToStart}
        />
      )}

      {gameState === "pause" && (
        <Pause
          continueGame={() => setGameState("playing")}
          restartGame={restartGame}
          returnToStart={returnToStart}
        />
      )}
    </section>
  );
};

export default Game;
