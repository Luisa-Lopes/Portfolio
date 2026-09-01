import cCoin from "@/assets/game/coins/cCoin.png";
import gitCoin from "@/assets/game/coins/gitCoin.png";
import postgresCoin from "@/assets/game/coins/postgresCoin.png";
import tsCoin from "@/assets/game/coins/tsCoin.png";

interface ILoaded {
  transition: string;
}

const coins = [
  { src: cCoin, className: "coin cCoin" },
  { src: gitCoin, className: "coin gitCoin" },
  { src: postgresCoin, className: "coin postgresCoin" },
  { src: tsCoin, className: "coin  tsCoin" },
];

const Loaded = ({ transition }: ILoaded) => {
  return (
    <section
      key="loaded"
      className={`game-start-shell game-start-transition game-loading w-full h-full flex items-center justify-center flex-col ${transition}`}
    >
      <div className="game-start-glow" />
      <section className="grid grid-cols-4 gap-4">
        {coins.map((coin, index) => (
          <div key={`${coin.className}-${index}`} className={coin.className}>
            <img src={coin.src} alt="moedas" />
          </div>
        ))}
      </section>
      <h1 className="font-honk bg-linear-to-r from-white to-purple-400 bg-clip-text text-2xl text-transparent ">
        Colete Skills Coins e evolua seu personagem!
      </h1>
    </section>
  );
};

export default Loaded;
