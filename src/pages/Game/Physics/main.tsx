import Matter from "matter-js";

interface PhysicsProps {
  engine: Matter.Engine;
  world: Matter.World;
}

interface Entities {
  physics: PhysicsProps;
}

interface TimeProps {
  delta: number;
}

interface InputProps {
  input: Array<{ name: string; payload: unknown }>;
  time: TimeProps;
  dispatch: (event: unknown) => void;
}

export const Physics = (
  entities: Entities,
  { time }: InputProps,
) => {
  // Mantém a simulação estável mesmo com atrasos de frame, mas sem deixar o
  // pulo tão lento em ambientes mais lentos como o deploy.
  const maxFrameDelta = 1000 / 60;
  const frameDelta = Math.min(time.delta, maxFrameDelta);

  Matter.Engine.update(entities.physics.engine, frameDelta);

  return entities;
};
