/* eslint-disable react-refresh/only-export-components */

import Matter from "matter-js";
import walkRight from "../../../../assets/game/WalkRight.png";
import jumpRight from "../../../../assets/game/jumpRight.png";
import jumpLeft from "../../../../assets/game/jumpLeft.png";
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

const DISPLAY_WIDTH = 60;
const DISPLAY_HEIGHT = 82;

const Player = ({ body, state, direction, frame }: PlayerProps) => {
  const heightBody = body.bounds.max.y - body.bounds.min.y;

  const spriteData = useMemo(() => {
    if (state === "idle") {
      return {
        src: walkRight,
        columns: 4,
        rows: 2,
        frames: 1,
        scale: 1,
      } as const;
    } else if (state === "walking") {
      return {
        src: walkRight,
        columns: 4,
        rows: 2,
        frames: 8,
        scale: 1,
      } as const;
    } else {
      return {
        src: direction === "left" ? jumpLeft : jumpRight,
        columns: 4,
        rows: 1,
        frames: 4,
        scale: 1.2,
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
          state !== "jumping" && direction === "left"
            ? "rotateY(180deg)"
            : "none",
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
