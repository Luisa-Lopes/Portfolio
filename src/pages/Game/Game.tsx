import { useEffect, useMemo, useRef, useState } from "react";
import { GameEngine } from "react-game-engine";
import { Physics } from "./Physics/main";
import Entities from "./entities";
import { useKeyboard } from "./hooks/useKeyboard";
import { createMovement } from "./Physics/Movement";
import { createGameRules } from "./Physics/gameRules";
import backGround from "../../assets/game/background.png";

const Game = () => {
  const keyboard = useKeyboard();
  const [gameOver, setGameOver] = useState(false);
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
    () => createGameRules(() => setGameOver(true)),
    [round],
  );

  const restartGame = () => {
    setGameOver(false);
    setRound((currentRound) => currentRound + 1);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <GameEngine
        key={round}
        ref={gameEngineRef}
        running={!gameOver}
        entities={entities}
        style={{ width: "100%", minHeight: "100vh" }}
        systems={[movement, Physics, gameRules]}
      />

      {gameOver && (
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
  );
};

export default Game;
