import keyA from "@/assets/game/keyboard/a.png";
import keyW from "@/assets/game/keyboard/w.png";
import keyD from "@/assets/game/keyboard/D.png";
import keyS from "@/assets/game/keyboard/s.png";

interface ILoading {
  transition: string;
  clouds: { src: string; className: string }[];
}

const Loading = ({ transition, clouds }: ILoading) => {
  return (
    <section
      key="loading"
      className={`game-start-shell game-start-transition game-loading flex flex-col justify-center items-center w-full h-full ${transition}`}
    >
      <div className="game-start-glow" />
      {clouds.map((cloud, index) => (
        <div key={`${cloud.className}-${index}`} className={cloud.className}>
          <img src={cloud.src} alt="Nuvem" />
        </div>
      ))}

      <h1 className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent  ">
        Prepare-se
      </h1>

      <section className="flex flex-col items-center">
        <div key={`key key-w`} className={"key key-w"}>
          <img src={keyW} alt="key" />
        </div>
        <section className="flex">
          <div key={`key key-a`} className={"key key-a"}>
            <img src={keyA} alt="key" />
          </div>
          <div key={`key key-s`} className={"key key-s"}>
            <img src={keyS} alt="key" />
          </div>
          <div key={`key key-d`} className={"key key-d"}>
            <img src={keyD} alt="key" />
          </div>
        </section>
      </section>

      <h1 className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-2xl text-transparent  ">
        Use
        <span className="font-bold"> WASD </span>
        para controlar o personagem
      </h1>
    </section>
  );
};

export default Loading;
