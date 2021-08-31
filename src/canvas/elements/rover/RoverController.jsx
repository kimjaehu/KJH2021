import { Rover } from "./Rover";

// make a note on this
import RoverImage from "../../assets/lunar_rover.png";

export class RoverController {
  constructor() {
    this.img = new Image();
    this.img.onload = () => {
      this.loaded();
    };

    this.img.src = RoverImage;
    this.items = [];

    this.cur = 0;
    this.isLoaded = false;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  loaded() {
    this.isLoaded = true;
    this.addRover();
  }

  addRover() {
    this.items.push(new Rover(this.img, this.stageWidth));
  }

  draw(ctx, t, dots) {
    if (this.isLoaded) {
      this.cur += 1;

      if (!this.items || this.items.length === 0) {
        this.cur = 0;
        this.addRover();
      }

      for (let i = this.items.length - 1; i >= 0; i--) {
        const item = this.items[i];
        if (item.x < -item.imgWidth) {
          this.items.splice(i, 1);
        } else {
          item.draw(ctx, t, dots);
        }
      }
    }
  }
}
