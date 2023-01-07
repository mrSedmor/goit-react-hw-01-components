export function getRandomHexColor(lightnessTreshold = 200) {
  let r = Math.random() * 256;
  let g = Math.random() * 256;
  let b = Math.random() * 256;
  const lightness = convertRgbToGreyscale({ r, g, b });
  const normalizer =
    lightness > lightnessTreshold ? lightnessTreshold / lightness : 1;
  const normalizeAndFormat = value =>
    Math.trunc(value * normalizer)
      .toString(16)
      .padStart(2, 0);

  const color = `#${
    normalizeAndFormat(r) + normalizeAndFormat(g) + normalizeAndFormat(b)
  }`;
  return color;
}

function convertRgbToGreyscale({ r, g, b }) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}
