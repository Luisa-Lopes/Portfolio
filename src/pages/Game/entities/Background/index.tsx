/* eslint-disable react-refresh/only-export-components */

import Matter from "matter-js";
import BackgroundImage from "../../../../assets/game/background/background.png";

interface BackgroundProps {
  body: Matter.Body;
  zIndex: number;
}

interface CreateBackgroundProps {
  label: string;
  parallax: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

const Background = ({ body, zIndex }: BackgroundProps) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const positionY = body.position.y - height / 2;

  return (
    <div
      className="flex justify-center items-center"
      style={{
        position: "absolute",
        left: body.position.x - width / 2,
        top: positionY,
        width,
        height,
        overflow: "hidden",
        zIndex,
      }}
    >
      <img
        src={`${BackgroundImage}`}
        style={{
          objectFit: "fill",
        }}
      />
    </div>
  );
};

export default ({
  label,
  parallax,
  position,
  size,
  zIndex,
}: CreateBackgroundProps) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { collisionFilter: { mask: 0 }, isStatic: true, label },
  );

  return {
    body,
    parallax,
    isBackground: true,
    renderer: <Background body={body} zIndex={zIndex} />,
  };
};
