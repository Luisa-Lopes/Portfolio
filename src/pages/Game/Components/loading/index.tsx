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
  assetsLoaded: boolean;
  onComplete: () => void;
}
const LoadingGame = ({ assetsLoaded, onComplete }: ILoadingGame) => {
  const [transition, setTransition] = useState("fade-in");
  const [pageState, setPageState] = useState("loading");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTransition("fade-in");
      setPageState("loaded");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pageState !== "loaded" || !assetsLoaded) return;

    const timer = window.setTimeout(onComplete, 5000);

    return () => window.clearTimeout(timer);
  }, [assetsLoaded, onComplete, pageState]);

  if (pageState === "loading") {
    return <Loading transition={transition} clouds={clouds} />;
  }

  if (pageState === "loaded") {
    return <Loaded transition={transition} />;
  }

  return null;
};

export default LoadingGame;
