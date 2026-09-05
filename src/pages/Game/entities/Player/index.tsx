/* eslint-disable react-refresh/only-export-components */

import Matter from "matter-js";
import walking from "../../../../assets/game/player/WalkRight.png";
import jumping from "../../../../assets/game/player/jump.png";
import { useMemo } from "react";

export interface PlayerProps {
  body: Matter.Body;
  state: "idle" | "walking" | "jumping";
  direction?: "left" | "right";
  frame: number;
}

interface CreatePlayerProps {
  world: Matter.World;
  color: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  state: "idle" | "walking" | "jumping";
  direction?: "left" | "right";
  frame: number;
}

const DISPLAY_WIDTH = 59;
const DISPLAY_HEIGHT = 82;

const Player = ({ body, state, direction, frame }: PlayerProps) => {
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const spriteData = useMemo(() => {
    if (state === "idle") {
      return {
        src: walking,
        columns: 4,
        rows: 2,
        frames: 1,
        scale: 1,
      } as const;
    } else if (state === "walking") {
      return {
        src: walking,
        columns: 4,
        rows: 2,
        frames: 8,
        scale: 1,
      } as const;
    } else {
      return {
        src: jumping,
        columns: 4,
        rows: 2,
        frames: 8,
        scale: 1,
      } as const;
    }
  }, [direction, state]);

  const xBody = body.position.x - DISPLAY_WIDTH / 2;
  const yBody = body.position.y + heightBody / 2 - DISPLAY_HEIGHT;

  const currentFrame = frame % spriteData.frames;
  const column = currentFrame % spriteData.columns;
  const row = Math.floor(currentFrame / spriteData.columns);
  const frameWidth = DISPLAY_WIDTH * spriteData.scale;
  const frameHeight = DISPLAY_HEIGHT * spriteData.scale;
  const offsetX = (DISPLAY_WIDTH - frameWidth) / 2;
  const offsetY = (DISPLAY_HEIGHT - frameHeight) / 2;
  const backgroundPosition = `${offsetX - column * frameWidth}px ${offsetY - row * frameHeight}px`;

  return (
    <div
      style={{
        position: "absolute",
        left: xBody,
        top: yBody,
        width: DISPLAY_WIDTH,
        height: DISPLAY_HEIGHT,
        transform:
          state !== "idle" && direction === "left" ? "rotateY(180deg)" : "none",
        backgroundImage: `url(${spriteData.src})`,
        backgroundSize: `${spriteData.columns * frameWidth}px ${spriteData.rows * frameHeight}px`,
        backgroundRepeat: "no-repeat",
        backgroundPosition,
        imageRendering: "pixelated",
        pointerEvents: "none",
        zIndex: 120,
      }}
    />
  );
};

export default ({
  world,
  position,
  size,
  state,
  direction,
  frame,
}: CreatePlayerProps) => {
  const initial = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: "Player",
    },
  );
  Matter.World.add(world, [initial]);

  return {
    body: initial,
    position,
    state,
    frame,
    direction,
    size,
    renderer: (
      <Player
        body={initial}
        state={state}
        direction={direction}
        frame={frame}
      />
    ),
  };
};
