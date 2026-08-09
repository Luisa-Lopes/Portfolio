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
  Matter.Engine.update(entities.physics.engine, time.delta);

  return entities;
};
