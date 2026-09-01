import Matter from "matter-js";
import "./style.css";

interface IScore {
  score: number;
}

interface CreateScoreProps {
  world: Matter.World;
  label: string;
  score: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const Score = ({ score }: IScore) => {
  return (
    <div className="score">
      <span className="score-label">SCORE</span>

      <div className="score-value">
        <span className="score-coin">🪙</span>
        <span>{score.toString().padStart(4, "0")}</span>
      </div>
    </div>
  );
};

export default ({ world, label, score, position, size }: CreateScoreProps) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { label, isStatic: true, isSensor: true },
  );

  Matter.World.add(world, [body]);

  return {
    body,
    position,
    score,
    renderer: <Score score={score} />,
  };
};
