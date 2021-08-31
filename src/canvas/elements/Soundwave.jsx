export class Soundwave {
  constructor(radius, stageWidth, stageHeight, color) {
    this.radius = radius;
    this.speed = Math.random() * 10;
    this.acceleration = 0.05;
    this.accelerationSpeed = 0;
    this.opacity = 1;

    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.x = this.stageWidth * 0.5;
    this.y = this.stageHeight * 0.7;

    this.soundwaveWidth = 1;

    this.r = color.r;
    this.g = color.g;
    this.b = color.b;

    this.total = 20;
    this.gap = 1 / this.total;
    this.originPos = [];
    this.pos = [];

    this.fps = 30;
    this.fpsTime = 1000 / this.fps;
  }

  animate(ctx, t) {
    this.accelerationSpeed += this.acceleration;
    this.radius += this.speed + this.accelerationSpeed;

    this.opacity -= 0.005;

    if (this.opacity <= 0) {
      this.opacity = 0;
    }

    for (let i = 0; i < this.total; i++) {
      const pos = this.getCirclePoint(this.radius, this.gap * i);
      this.originPos[i] = pos;
      this.pos[i] = pos;
    }

    if (!this.time) {
      this.time = t;
    }
    const now = t - this.time;
    if (now > this.fpsTime) {
      this.time = t;
      this.updatePoints();
    }

    ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},${1})`;
    ctx.lineWidth = this.soundwaveWidth;
    ctx.beginPath();
    for (let i = 1; i < this.total; i++) {
      const pos = this.pos[i];
      ctx.lineTo(pos.x + this.x, pos.y + this.y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  updatePoints() {
    for (let i = 1; i < this.total; i++) {
      const pos = this.originPos[i];
      this.pos[i] = {
        x: pos.x + this.ranInt(20),
        y: pos.y + this.ranInt(20),
      };
    }
  }

  ranInt(max) {
    return Math.random() * max;
  }

  getCirclePoint(radius, t) {
    const theta = Math.PI * 2 * t;

    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
    };
  }
}
