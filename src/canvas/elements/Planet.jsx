import { movement } from "../utils";

export class Planet {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  draw(ctx) {
    const { r, g, b } = this.color;
    ctx.beginPath();
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  animate(mouseX, mouseY, distance) {
    const position = movement(
      this.x,
      this.y,
      mouseX,
      mouseY,
      this.stageWidth,
      this.stageHeight,
      distance
    );
    this.posX = position.posX;
    this.posY = position.posY;
  }
}
