import Matter from "matter-js";
import "./style.css";
import { EntitiesSize } from "../entitiesSize";

interface ComponentProps {
  body: Matter.Body;
  zIndex: number;
  image: string;
  label: string;
}

interface CreateComponentProps {
  label: string;
  parallax: number;
  position: { x: number; y: number };
  size: "small" | "medium" | "large";
  windowWidth: number;
  windowHeight: number;
  zIndex: number;
  image: string;
}

const Component = ({ body, zIndex, image, label }: ComponentProps) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const positionY = body.position.y - height / 2;

  return (
    <div
      className={`flex justify-center items-center ${label}`}
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
        src={`${image}`}
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
  image,
  windowWidth,
  windowHeight,
}: CreateComponentProps) => {
  const bodySize = EntitiesSize({ windowWidth, windowHeight })?.find(
    (f) => f.label == label && f.size == size,
  ) ?? {
    size: "small",
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    label: "cloud",
  };

  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    bodySize?.width,
    bodySize?.height,
    { collisionFilter: { mask: 0 }, isStatic: true, label },
  );

  return {
    body,
    parallax,
    isBackground: true,
    image,
    zIndex,
    label,
    renderer: (
      <Component body={body} zIndex={zIndex} image={image} label={label} />
    ),
  };
};
