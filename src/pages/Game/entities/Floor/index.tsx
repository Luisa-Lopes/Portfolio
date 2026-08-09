/* eslint-disable react-refresh/only-export-components */

import Matter from "matter-js";
import floor from "../../../../assets/game/floor.png";

interface FloorProps {
  body: Matter.Body;
  color: string;
}

interface CreateFloorProps {
  world: Matter.World;
  color: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

const Floor = (props: FloorProps) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <div
      style={{
        position: "absolute",
        backgroundImage: `url(${floor})`,
        width: widthBody,
        height: heightBody,
        left: xBody,
        top: yBody,
        imageRendering: "pixelated",
        backgroundPosition: "center 54%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        overflow: "hidden",
      }}
    />
  );
};

export default ({ world, color, position, size }: CreateFloorProps) => {
  const initial = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: "Floor",
      isStatic: true,
    },
  );
  Matter.World.add(world, [initial]);

  return {
    body: initial,
    color,
    position,
    renderer: <Floor body={initial} color={color} />,
  };
};
