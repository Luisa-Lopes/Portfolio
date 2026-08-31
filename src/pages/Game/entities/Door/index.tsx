import Matter from "matter-js";
import DoorImage from "@/assets/game/Door.png";
import "./style.css";

interface DoorProps {
  body: Matter.Body;
}

interface CreateDoorProps {
  world: Matter.World;
  position: { x: number; y: number };
  size: { width: number; height: number };
  label: string;
  parallax: number;
}

const Door = ({ body }: DoorProps) => {
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
      }}
    >
      <div className="relative w-full h-full">
        <div
          style={{
            position: "absolute",
            display: "flex",
            backgroundImage: `url(${DoorImage})`,
            backgroundPosition: "center 64%",
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
    renderer: <Door body={body} />,
  };
};
