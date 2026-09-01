import Matter from "matter-js";
import cCoin from "@/assets/game/coins/cCoin.png";
import cssCoin from "@/assets/game/coins/cssCoin.png";
import gitCoin from "@/assets/game/coins/gitCoin.png";
import htmlCoin from "@/assets/game/coins/htmlCoin.png";
import jsCoin from "@/assets/game/coins/jsCoin.png";
import netCoin from "@/assets/game/coins/netCoin.png";
import nextCoin from "@/assets/game/coins/nextCoin.png";
import nodeCoin from "@/assets/game/coins/nodeCoin.png";
import postCoin from "@/assets/game/coins/postgresCoin.png";
import reactCoin from "@/assets/game/coins/reactCoin.png";
import tailCoin from "@/assets/game/coins/taillwindCoin.png";
import tsCoin from "@/assets/game/coins/tsCoin.png";
import "./style.css";

export const coins = [
  {
    key: "cCoin",
    src: cCoin,
  },
  {
    key: "cssCoin",
    src: cssCoin,
  },
  {
    key: "gitCoin",
    src: gitCoin,
  },
  {
    key: "htmlCoin",
    src: htmlCoin,
  },
  {
    key: "jsCoin",
    src: jsCoin,
  },
  {
    key: "netCoin",
    src: netCoin,
  },
  {
    key: "nextCoin",
    src: nextCoin,
  },
  {
    key: "nodeCoin",
    src: nodeCoin,
  },
  {
    key: "postCoin",
    src: postCoin,
  },
  {
    key: "reactCoin",
    src: reactCoin,
  },
  {
    key: "tailCoin",
    src: tailCoin,
  },
  {
    key: "tsCoin",
    src: tsCoin,
  },
];

interface CoinProps {
  body: Matter.Body;
  color: string;
  coinType: number;
}

interface CreateCoinProps {
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
  coinType: number;
  parallax: number;
}

const Coin = (props: CoinProps) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <div
      className="coin"
      style={{
        position: "absolute",
        backgroundImage: `url(${coins[props.coinType]?.src})`,
        width: widthBody,
        height: heightBody,
        left: xBody,
        top: yBody,
        imageRendering: "pixelated",
        backgroundPosition: "center 54%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        overflow: "hidden",
        zIndex: 20,
      }}
    />
  );
};

export default ({
  world,
  color,
  position,
  size,
  coinType,
  parallax,
}: CreateCoinProps) => {
  const initial = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    {
      label: "Coin",
      isStatic: true,
      isSensor: true,
    },
  );
  Matter.World.add(world, [initial]);

  return {
    body: initial,
    color,
    position,
    coinType,
    parallax,
    isBackground: false,
    renderer: <Coin body={initial} color={color} coinType={coinType} />,
  };
};
