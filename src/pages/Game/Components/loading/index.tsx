import { useEffect, useState } from "react";
import Loaded from "./components/Loaded.tsx/loaded";
import Loading from "./components/Loading.tsx/loading";
import "./style.css";
import blueCloud from "@/assets/game/background/nuvemAzul.png";
import darkPurpleCloud from "@/assets/game/background/roxoEscuro.png";

const clouds = [
  { src: blueCloud, className: "cloud cloud-one" },
  { src: darkPurpleCloud, className: "cloud cloud-two" },
  { src: blueCloud, className: "cloud cloud-three" },
  { src: darkPurpleCloud, className: "cloud cloud-four" },
  { src: blueCloud, className: "cloud cloud-five" },
  { src: darkPurpleCloud, className: "cloud cloud-six" },
];

interface ILoadingGame {
  progress: number;
  assetsLoaded: boolean;
}
const LoadingGame = ({ progress, assetsLoaded }: ILoadingGame) => {
  const [transition, setTransition] = useState("fade-in");
  const [pageState, setPageState] = useState("loading");

  useEffect(() => {
    if (progress >= 60) {
      setTransition("fade-out");
      setTimeout(() => {
        setTransition("fade-in");
        setPageState("loaded");
      }, 1000);
    }
    if (assetsLoaded) {
      setTransition("fade-out");
    }
  }, [progress]);

  if (pageState === "loading") {
    return <Loading transition={transition} clouds={clouds} />;
  }

  if (pageState === "loaded") {
    return <Loaded transition={transition} />;
  }

  return null;
};

export default LoadingGame;
