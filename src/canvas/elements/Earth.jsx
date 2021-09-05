import EarthImage from "../assets/earth.png";

export class Earth {
  constructor(radius) {
    this.radius = radius;
    this.minRadius = radius;

    this.img = new Image();

    this.img.onload = () => {
      this.isLoaded = true;
    };

    this.img.src = EarthImage;

    this.totalFrame = 16;
    this.curFrame = 15;

    this.imgWidth = 400;
    this.imgHeight = 400;
    this.earthWidth = 400;
    this.earthHeight = 400;

    this.fps = 32;
    this.fpsTime = 5000 / this.fps;

    this.cur = 0;
    this.isLoaded = false;
    this.isBehind = false;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.minRadius = Math.min(this.stageWidth * 0.4, this.radius);
  }

  draw(ctx, t) {
    if (!this.time) {
      this.time = t;
    }

    const now = t - this.time;

    if (now > this.fpsTime) {
      this.time = t;
      this.curFrame -= 1;
      // if (this.curFrame === this.totalFrame) {
      if (this.curFrame === 0) {
        this.curFrame = 15;
      }
    }
    this.animate(ctx);
  }

  animate(ctx) {
    ctx.drawImage(
      this.img,
      this.imgWidth * this.curFrame,
      0,
      this.imgWidth,
      this.imgHeight,
      this.stageWidth * 0.5 - this.minRadius / 2,
      this.stageHeight * 0.7 - this.minRadius / 2,
      this.minRadius,
      this.minRadius
    );
  }
}
