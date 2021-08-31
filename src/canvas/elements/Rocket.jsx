import RocketImage from "../assets/rocket.png";

export class Rocket {
  constructor() {
    this.img = new Image();
    this.img.onload = () => {
      this.isLoaded = true;
    };

    this.img.src = RocketImage;

    this.totalFrame = 8;
    this.curFrame = 0;

    this.imgWidth = 400;
    this.imgHeight = 400;
    this.rocketWidth = 400;
    this.rocketHeight = 400;
    this.x = 0;

    this.speed = Math.random() * 2 + 10;

    this.fps = 24;
    this.fpsTime = 2000 / this.fps;

    this.speedX = Math.random() + 5;
    this.speedY = Math.random();
    this.angleX = Math.random() + 2;
    this.angleY = Math.random() + 6;

    this.cur = 0;
    this.isLoaded = false;
    this.isBehind = false;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.y = stageHeight * 0.75;
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
    this.animate(ctx);
  }

  animate(ctx) {
    this.x += this.speedX + Math.sin(this.angleX);
    this.y += this.speedY + Math.sin(this.angleY);
    if (this.cur === 100) {
      this.angleX = Math.random() * 2;
      this.angleY = Math.random() * 6;

      this.cur = 0;
    }
    this.cur++;

    if (
      this.x > this.stageWidth + this.imgWidth * 2 ||
      this.y > this.stageHeight + this.imgHeight
    ) {
      if (!this.isBehind) {
        this.speedX = Math.random();
        this.speedY = Math.random() + 0.001;
        this.rocketWidth = 100;
        this.rocketHeight = 100;
        this.isBehind = true;
      } else {
        this.speedX = Math.random() + 5;
        this.speedY = Math.random();
        this.rocketWidth = 400;
        this.rocketHeight = 400;

        this.isBehind = false;
      }

      this.x = 0;
      this.y = this.stageHeight * 0.75;
    }

    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.drawImage(
      this.img,
      this.imgWidth * this.curFrame,
      0,
      this.imgWidth,
      this.imgHeight,
      -this.rocketWidth,
      -this.rocketHeight,
      this.rocketWidth,
      this.rocketHeight
    );

    ctx.restore();
  }
}
