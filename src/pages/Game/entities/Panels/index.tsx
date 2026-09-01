import Matter from "matter-js";
import "./style.css";

interface PanelsProps {
  body: Matter.Body;
  image: string;
  text: string;
}

interface CreatePanelsProps {
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  parallax: number;
  label: string;
  image: string;
  text: string;
}

const Panels = (props: PanelsProps) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <div
      style={{
        position: "absolute",
        width: widthBody,
        height: heightBody,
        left: xBody,
        top: yBody,
        zIndex: 10,
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        boxSizing: "border-box",
      }}
    >
      {/* Moldura */}
      <div
        style={{
          position: "relative",
          width: "100%",
          flex: 1,
          minHeight: 0,
          padding: 5,
          background: "#5a321c",
          border: "3px solid #2d180e",
          borderRadius: 6,
          boxShadow: `
        inset 0 0 0 2px #9a5a2e,
        4px 4px 0 #24130b
      `,
          overflow: "hidden",
        }}
      >
        <img
          src={props.image}
          alt="Protótipo Autoescola"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            objectPosition: "center",
            imageRendering: "pixelated",
          }}
        />

        {/* brilho da moldura */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
      </div>

      {/* Título */}
      <div
        style={{
          alignSelf: "center",
          padding: "3px 10px",
          background: "#f5c451",
          border: "2px solid #3a200f",
          borderRadius: 4,
          boxShadow: "2px 2px 0 #24130b",
          whiteSpace: "nowrap",
        }}
      >
        <h6
          className="font-honk"
          style={{
            margin: 0,
            fontSize: 11,
            lineHeight: 1,
            color: "#3a200f",
            textShadow: "1px 1px 0 rgba(255,255,255,0.25)",
          }}
        >
          {props.text}
        </h6>
      </div>
    </div>
  );
};

export default ({
  position,
  size,
  parallax,
  label,
  image,
  text,
}: CreatePanelsProps) => {
  const body = Matter.Bodies.rectangle(
    position.x,
    position.y,
    size.width,
    size.height,
    { collisionFilter: { mask: 0 }, isStatic: true, label },
  );

  return {
    body: body,
    position,
    parallax,
    isBackground: true,
    text,
    image,
    renderer: <Panels body={body} image={image} text={text} />,
  };
};
