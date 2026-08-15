/* eslint-disable react-refresh/only-export-components */

import Matter from "matter-js";
import FrontEnd from "../../../../assets/game/background/FrontEnd.png";
import FrontBack from "../../../../assets/game/background/FrontBack.png";
import BackEnd from "../../../../assets/game/background/BackEnd.png";

type BackgroundImageKey = "FrontEnd" | "FrontBack" | "BackEnd";

interface BackgroundProps {
  body: Matter.Body;
  image: BackgroundImageKey;
  zIndex: number;
}

interface CreateBackgroundProps {
  image: BackgroundImageKey;
  label: string;
  parallax: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

const imagesMap: Record<BackgroundImageKey, string> = {
  FrontEnd,
  FrontBack,
  BackEnd,
};

const Background = ({ body, image, zIndex }: BackgroundProps) => {
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
        src={`${imagesMap[image]}`}
        style={{
          objectFit: "fill",
        }}
      />
    </div>
  );
};

export default ({
  image,
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
    image,
    parallax,
    renderer: <Background body={body} image={image} zIndex={zIndex} />,
  };
};
