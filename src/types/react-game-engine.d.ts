declare module "react-game-engine" {
  import type { Component, CSSProperties, ReactNode } from "react";

  export interface GameEngineProps {
    className?: string;
    children?: ReactNode;
    entities?: unknown;
    onEvent?: (event: unknown) => void;
    renderer?: unknown;
    running?: boolean;
    style?: CSSProperties;
    systems?: unknown[];
    keyboard?: unknown;
  }

  export class GameEngine extends Component<GameEngineProps> {
    clear(): void;
    start(): void;
    stop(): void;
    swap(entities: unknown): void;
  }
}
