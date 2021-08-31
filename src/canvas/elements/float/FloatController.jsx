import { Float } from "./Float";

// make a note on this
import UFOImage from "../../assets/ufo.png";
import StationImage from "../../assets/space_station.png";

export class FloatController {
  constructor() {
    this.imgSrc = [UFOImage, StationImage];
    this.imgs = [];
    this.imgCnt = 0;

    this.imgSrc.forEach((src) => {
      this.img = new Image();
      this.img.src = src;
      this.img.onload = () => {
        this.imgCnt += 1;
        if (this.imgCnt === this.imgSrc.length) {
          this.ufoLoaded = true;
          this.loaded();
        }
      };
      this.imgs.push(this.img);
    });

    this.isLoaded = false;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.addFloats();
  }

  loaded() {
    this.isLoaded = true;
    this.addFloats();
  }

  addFloats() {
    this.items = [];
    this.items.push(
      new Float(
        this.imgs[0],
        Math.min(this.stageWidth * 0.5),
        this.stageHeight * 0.3,
        this.stageWidth * 0.6,
        600
      ),
      new Float(
        this.imgs[1],
        Math.max(this.stageWidth * 0.65, 400),
        this.stageHeight * 0.7,
        this.stageWidth * 0.5,
        250
      )
    );
  }

  draw(ctx, t) {
    if (this.isLoaded) {
      for (let i = this.items.length - 1; i >= 0; i--) {
        const item = this.items[i];
        item.draw(ctx, t);
      }
    }
  }
}
