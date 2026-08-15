import Matter from "matter-js";

interface CreateCameraProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const createCamera = ({ position, size }: CreateCameraProps) => ({
  body: Matter.Bodies.rectangle(position.x, position.y, size.width, size.height, {
    collisionFilter: { mask: 0 },
    isStatic: true,
    label: "Camera",
  }),
});

export default createCamera;
