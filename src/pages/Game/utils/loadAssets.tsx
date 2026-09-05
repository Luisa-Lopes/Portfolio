export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);

    image.onerror = () => {
      reject(new Error(`Erro ao carregar asset: ${src}`));
    };

    image.src = src;
  });
};

export const loadAssets = async (
  assets: string[],
  onProgress?: (progress: number) => void,
  onFinish?: () => void,
) => {
  let loaded = 0;

  await Promise.all(
    assets.map(async (src) => {
      await loadImage(src);

      loaded++;

      const progress = Math.round((loaded / assets.length) * 100);

      onProgress?.(progress);
    }),
  );

  onFinish?.();
};
