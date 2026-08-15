import { useEffect, useMemo, useRef, useState } from "react";
import { GameEngine } from "react-game-engine";
import { Physics } from "./Physics/main";
import Entities from "./entities";
import { useKeyboard } from "./hooks/useKeyboard";
import { createMovement } from "./Physics/Movement";
import { createGameRules } from "./Physics/gameRules";
import Start from "./Components/Start";

const Game = () => {
  const keyboard = useKeyboard();

  const [gameState, setGameState] = useState<"start" | "playing" | "gameOver">(
    "start",
  );

  const [round, setRound] = useState(0);
  const gameEngineRef = useRef<GameEngine | null>(null);

  useEffect(() => {
    const engine = gameEngineRef.current;

    return () => {
      engine?.stop();
    };
  }, []);

  const entities = useMemo(() => Entities(), [round]);
  const movement = useMemo(() => createMovement(keyboard), [keyboard]);
  const gameRules = useMemo(
    () => createGameRules(() => setGameState("gameOver")),
    [round],
  );

  const handleStartGame = () => {
    setGameState("playing");
  };

  const restartGame = () => {
    setGameState("playing");
    setRound((currentRound) => currentRound + 1);
  };

  return (
    <section className="flex justify-center items-center h-screen w-screen">
      <div
        className="flex justify-center items-center h-full"
        style={{
          width: 800,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <GameEngine
          key={round}
          ref={gameEngineRef}
          running={gameState === "playing"}
          entities={entities}
          style={{ width: "100%", minHeight: "100vh" }}
          systems={[movement, Physics, gameRules]}
        />

        {gameState === "start" && <Start onClickStart={handleStartGame} />}

        {gameState === "gameOver" && (
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.72)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              inset: 0,
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <h1 style={{ margin: 0 }}>Game over</h1>
            <button onClick={restartGame} type="button">
              Jogar novamente
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Game;
