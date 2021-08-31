export class Planet {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
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
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  animate(x, y) {}
}
