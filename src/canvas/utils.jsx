export function distance(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  return Math.sqrt(x * x + y * y);
}

export function movement(
  x,
  y,
  mouseX,
  mouseY,
  stageWidth,
  stageHeight,
  distance
) {
  const posX = x - (mouseX - stageWidth * 0.5) * distance;
  const posY = y - (mouseY - stageHeight * 0.5) * distance;
  return { posX, posY };
}
