import { useEffect, useState } from "react";
import "./Start.css";
import "./loading.css";
import blueCloud from "../../../../assets/game/background/nuvemAzul.png";
import darkPurpleCloud from "../../../../assets/game/background/roxoEscuro.png";
import Loading from "./Component/loading";
import Loaded from "./Component/loaded";
import Start from "./Component/start";

interface IStart {
  onClickStart: () => void;
}

const clouds = [
  { src: blueCloud, className: "cloud cloud-one" },
  { src: darkPurpleCloud, className: "cloud cloud-two" },
  { src: blueCloud, className: "cloud cloud-three" },
  { src: darkPurpleCloud, className: "cloud cloud-four" },
  { src: blueCloud, className: "cloud cloud-five" },
  { src: darkPurpleCloud, className: "cloud cloud-six" },
];

const MainStart = ({ onClickStart }: IStart) => {
  const [pageState, setPageState] = useState("start");
  const [transition, setTransition] = useState("fade-in");

  useEffect(() => {
    document.body.classList.add("game-start-active");

    return () => document.body.classList.remove("game-start-active");
  }, []);

  const changePage = (nextPage: string) => {
    setTransition("fade-out");

    setTimeout(() => {
      setPageState(nextPage);
      setTransition("fade-in");
    }, 300);
  };

  const loadInformation = () => {
    changePage("loading");

    setTimeout(() => {
      changePage("loaded");

      setTimeout(() => {
        setTransition("fade-out");

        setTimeout(onClickStart, 500);
      }, 5000);
    }, 5000);
  };

  if (pageState === "start") {
    return (
      <Start
        clouds={clouds}
        transition={transition}
        loadInformation={loadInformation}
      />
    );
  }

  if (pageState === "loading")
    return <Loading transition={transition} clouds={clouds} />;

  if (pageState === "loaded") return <Loaded transition={transition} />;
};

export default MainStart;
