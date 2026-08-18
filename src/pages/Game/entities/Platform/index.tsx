/* eslint-disable react-refresh/only-export-components */

import Matter from "matter-js";
import platform from "../../../../assets/game/floor.png";

interface PlatformProps {
  body: Matter.Body;
}

interface CreatePlatformProps {
  world: Matter.World;
  color: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  label: string;
}

const Platform = ({ body }: PlatformProps) => {
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
        backgroundImage: `url(${platform})`,
        backgroundPosition: "center 64%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        imageRendering: "pixelated",
        overflow: "hidden",
        zIndex: 100,
      }}
    />
  );
};

export default ({
  world,
  color,
  position,
  size,
  label,
}: CreatePlatformProps) => {
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
    color,
    position,
    renderer: <Platform body={body} />,
  };
};
