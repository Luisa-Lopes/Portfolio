import Matter from "matter-js";
import DoorImage from "@/assets/game/Door.png";
import "./style.css";

interface DoorProps {
  body: Matter.Body;
  zIndex: number;
}

interface CreateDoorProps {
  world: Matter.World;
  position: { x: number; y: number };
  size: { width: number; height: number };
  label: string;
  parallax: number;
  zIndex?: number;
}

const Door = ({ body, zIndex }: DoorProps) => {
  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;

  return (
    <section
      style={{
        position: "absolute",
        left: body.position.x - width / 2,
        top: body.position.y - height / 2,
        width,
        height,
        zIndex,
      }}
    >
      <div className="relative w-full h-full">
        <div
          style={{
            position: "absolute",
            display: "flex",
            backgroundImage: `url(${DoorImage})`,
            backgroundPosition: "center 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            imageRendering: "pixelated",
            overflow: "hidden",
            inset: 0,
            zIndex: 110,
          }}
        ></div>

        <div className="portal">
          <div className="portal-glow" />
          <div className="portal-ring" />
          <div className="portal-core" />
        </div>
      </div>
    </section>
  );
};

export default ({
  world,
  position,
  size,
  label,
  parallax,
  zIndex = 110,
}: CreateDoorProps) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { collisionFilter: { mask: 0 }, isSensor: true, isStatic: true, label },
  );
  Matter.World.add(world, [body]);

  return {
    body,
    parallax,
    renderer: <Door body={body} zIndex={zIndex} />,
  };
};
