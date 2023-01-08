export function getRandomHslColor() {
  const h = Math.trunc(Math.random() * 360);
  const s = Math.trunc(Math.random() * 70 + 30);
  const l = Math.trunc(Math.random() * 50 + 20);
  const color = `hsl(${h}, ${s}%, ${l}%)`;
  return color;
}
