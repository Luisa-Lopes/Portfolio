import Matter from "matter-js";

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
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 20,
        overflow: "hidden",
        zIndex: 100,
      }}
    >
      {score}
    </div>
  );
};

export default ({ world, label, score, position, size }: CreateScoreProps) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { label, isStatic: true },
  );

  Matter.World.add(world, [body]);

  return {
    body,
    position,
    renderer: <Score score={score} />,
  };
};
