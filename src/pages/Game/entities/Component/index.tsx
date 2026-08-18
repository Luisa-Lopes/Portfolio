import Matter from "matter-js";

interface ComponentProps {
  body: Matter.Body;
  zIndex: number;
  image: string;
}

interface CreateComponentProps {
  label: string;
  parallax: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  image: string;
}

const Component = ({ body, zIndex, image }: ComponentProps) => {
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
}: CreateComponentProps) => {
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
    image,
    zIndex,
    renderer: <Component body={body} zIndex={zIndex} image={image} />,
  };
};
