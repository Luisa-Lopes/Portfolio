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
  // A montagem do cenário pode atrasar um frame. Sem este limite, Matter.js
  // tenta simular todo o intervalo atrasado de uma vez, fazendo o jogador
  // atravessar plataformas e alcançar o chão instantaneamente.
  // 30 FPS é uma taxa aceitável em dispositivos menos potentes; limitar a
  // 60 FPS faria a simulação rodar em câmera lenta nesses aparelhos.
  const maxFrameDelta = 1000 / 30;
  const frameDelta = Math.min(time.delta, maxFrameDelta);

  Matter.Engine.update(entities.physics.engine, frameDelta);

  return entities;
};
