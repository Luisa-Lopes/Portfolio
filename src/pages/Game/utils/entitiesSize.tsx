interface IEntitiesSize {
  size: "small" | "medium" | "large";
  width: number;
  height: number;
  label: string;
}

export const EntitiesSize = ({
  windowWidth,
  windowHeight: windowHeight,
}: {
  windowWidth: number;
  windowHeight: number;
}): IEntitiesSize[] => [
  {
    size: "small",
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    label: "cloud",
  },
  {
    size: "medium",
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    label: "cloud",
  },
  {
    size: "large",
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    label: "cloud",
  },
  {
    size: "small",
    width: windowWidth * 0.2,
    height: windowWidth * 0.09,
    label: "cloudBlue",
  },
  {
    size: "small",
    width: windowWidth * 0.2,
    height: windowWidth * 0.11,
    label: "cloudPurpleBlue",
  },
  {
    size: "small",
    width: windowWidth * 0.2,
    height: windowWidth * 0.11,
    label: "cloudPurple",
  },
  {
    size: "small",
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    label: "monitor",
  },
  {
    size: "medium",
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    label: "monitor",
  },
  {
    size: "large",
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
    label: "monitor",
  },
  {
    size: "small",
    width: windowWidth * 0.1,
    height: windowWidth * 0.15,
    label: "html",
  },
  {
    size: "medium",
    width: windowWidth * 0.2,
    height: windowWidth * 0.25,
    label: "html",
  },
  {
    size: "large",
    width: windowWidth * 0.3,
    height: windowWidth * 0.35,
    label: "html",
  },

  {
    size: "small",
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    label: "mural",
  },
  {
    size: "medium",
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    label: "mural",
  },
  {
    size: "large",
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    label: "mural",
  },
  {
    size: "small",
    width: windowWidth * 0.14,
    height: windowWidth * 0.15,
    label: "server",
  },
  {
    size: "small",
    width: windowWidth * 0.22,
    height: windowWidth * 0.15,
    label: "muralWide",
  },
  {
    size: "small",
    width: windowWidth * 0.13,
    height: windowWidth * 0.17,
    label: "connection",
  },
  {
    size: "small",
    width: windowWidth * 0.24,
    height: windowWidth * 0.16,
    label: "gear",
  },
  {
    size: "small",
    width: windowWidth * 0.3,
    height: windowWidth * 0.14,
    label: "platBack1",
  },
  {
    size: "small",
    width: windowWidth * 0.3,
    height: windowWidth * 0.2,
    label: "platBack2",
  },

  {
    size: "small",
    width: windowWidth * 0.1,
    height: windowWidth * 0.15,
    label: "css",
  },
  {
    size: "medium",
    width: windowWidth * 0.2,
    height: windowWidth * 0.25,
    label: "css",
  },
  {
    size: "large",
    width: windowWidth * 0.3,
    height: windowWidth * 0.35,
    label: "css",
  },
  {
    size: "large",
    width: windowWidth * 0.3,
    height: windowWidth * 0.35,
    label: "css",
  },
  {
    size: "large",
    width: windowWidth * 0.3,
    height: windowWidth * 0.7,
    label: "door",
  },
  {
    size: "large",
    width: windowWidth,
    height: windowWidth * 0.3,
    label: "platformDoor",
  },
  {
    size: "large",
    width: windowWidth * 0.5,
    height: windowWidth * 0.3,
    label: "saudacao",
  },
  {
    size: "large",
    width: windowWidth * 0.95,
    height: windowHeight * 0.13,
    label: "platformEng",
  },
  {
    size: "small",
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    label: "jwt",
  },
  {
    size: "medium",
    width: windowWidth * 0.5,
    height: windowHeight * 0.3,
    label: "jwt",
  },
  {
    size: "large",
    width: windowWidth * 0.6,
    height: windowHeight * 0.4,
    label: "jwt",
  },
  {
    size: "small",
    width: windowWidth * 0.4,
    height: windowHeight * 0.3,
    label: "mvc",
  },
  {
    size: "medium",
    width: windowWidth * 0.5,
    height: windowHeight * 0.4,
    label: "mvc",
  },
  {
    size: "large",
    width: windowWidth * 0.6,
    height: windowHeight * 0.5,
    label: "mvc",
  },
  {
    size: "small",
    width: windowWidth * 0.3,
    height: windowHeight * 0.5,
    label: "placaBack",
  },
  {
    size: "medium",
    width: windowWidth * 0.35,
    height: windowHeight * 0.6,
    label: "placaBack",
  },
  {
    size: "large",
    width: windowWidth * 0.5,
    height: windowHeight * 0.65,
    label: "placaBack",
  },

  {
    size: "small",
    width: windowWidth * 0.3,
    height: windowHeight * 0.2,
    label: "api",
  },

  {
    size: "medium",
    width: windowWidth * 0.4,
    height: windowHeight * 0.3,
    label: "api",
  },
  {
    size: "large",
    width: windowWidth * 0.5,
    height: windowHeight * 0.4,
    label: "api",
  },
];
