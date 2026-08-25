import Matter from "matter-js";

interface TextProps {
  body: Matter.Body;
}

interface CreateTextProps {
  world: Matter.World;
  parallax: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  label: string;
}

const Text = ({ body }: TextProps) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;

  return (
    <div
      style={{
        position: "absolute",
        left: body.position.x - width / 2,
        top: body.position.y - height / 2,
        width,
        height,
        overflow: "hidden",
        zIndex: 100,
      }}
    >
      <h1>JORNADA CONCLUÍDA!</h1>
      <h2> Obrigada por jogar.</h2>
    </div>
  );
};

export default ({
  world,
  position,
  size,
  label,
  parallax,
}: CreateTextProps) => {
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
    parallax,
    position,
    renderer: <Text body={body} />,
  };
};
