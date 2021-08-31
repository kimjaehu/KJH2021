export class Float {
  constructor(img, x, y, maxSize, minSize) {
    this.img = img;

    this.x = x;
    this.y = y;

    this.ox = x;
    this.oy = y;

    this.vx = 0.03;
    this.vy = 0.02;

    this.totalFrame = 8;
    this.curFrame = 0;

    this.imgWidth = 400;
    this.imgHeight = 400;

    this.floatWidth = Math.min(maxSize, minSize);
    this.floatHeight = this.floatWidth;

    this.speed = Math.random() * 2 + 1;

    this.fps = 24;
    this.fpsTime = 3000 / this.fps;
  }

  draw(ctx, t) {
    if (!this.time) {
      this.time = t;
    }

    const now = t - this.time;

    if (now > this.fpsTime) {
      this.time = t;
      this.curFrame += 1;
      if (this.curFrame === this.totalFrame) {
        this.curFrame = 0;
      }
    }

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.drawImage(
      this.img,
      this.imgWidth * this.curFrame,
      0,
      this.imgWidth,
      this.imgHeight,
      -this.floatWidth * 0.5,
      -this.floatHeight * 0.5,
      this.floatWidth,
      this.floatHeight
    );

    ctx.restore();

    this.animate(ctx);
  }

  animate(ctx) {
    this.x += this.speed * this.vx;
    this.y += this.speed * this.vy;

    if (this.x <= this.ox - 10 || this.x >= this.ox + 10) {
      this.vx *= -1;
      this.x += this.speed * this.vx;
    } else if (this.y <= this.oy - 10 || this.y >= this.oy + 10) {
      this.vy *= -1;
      this.y += this.speed * this.vy;
    }
  }
}
