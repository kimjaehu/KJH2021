import { useRef, useEffect } from "react";
import { Star } from "./elements/Star";
import { Surface } from "./elements/Surface";
import { RoverController } from "./elements/rover/RoverController";
import { Eye } from "./elements/Eye";
import { Planet } from "./elements/Planet";
import { Earth } from "./elements/Earth";
import { Soundwave } from "./elements/Soundwave";
import { FloatController } from "./elements/float/FloatController";
import { Rocket } from "./elements/Rocket";
// todo
// planet

const useCanvas = () => {
  const COLORS = [
    { r: 255, g: 89, b: 94 }, // red 0
    { r: 255, g: 202, b: 58 }, // yellow 1
    { r: 138, g: 201, b: 38 }, // green 2
    { r: 25, g: 130, b: 196 }, // blue 3
    { r: 106, g: 76, b: 147 }, // purple 4
    { r: 38, g: 70, b: 83 }, // dark blue/grey 5
    { r: 42, g: 157, b: 143 }, // green 6
    { r: 233, g: 196, b: 106 }, // yellow 7
    { r: 244, g: 162, b: 97 }, // orange 8
    { r: 231, g: 111, b: 81 }, // red 9
  ];
  const canvasRef = useRef(null);

  class CanvasApp {
    constructor() {
      this.canvas = canvasRef.current;
      this.ctx = this.canvas.getContext("2d");
      this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      this.planetsProp = { maxPlanets: 4 };
      this.planets = [];

      this.soundwavesProp = { maxSoundwaves: 5 };
      this.soundwaves = [];

      this.soundwavesOnScroll = [];

      this.rocket = new Rocket();

      this.floats = [];

      this.earthProp = {
        radius: 300,
      };
      this.earth = new Earth(this.earthProp.radius);
      this.eye = new Eye();

      this.roverController = new RoverController();

      this.eyeProp = {
        maxNumEyes: 20,
        minRadius: 50,
        increments: 20,
      };

      this.floatController = new FloatController();

      this.surfaces = [new Surface("#727272", 1, 12)];

      this.stars = [];

      this.starProp = {
        maxNumStars: 5,
        minOuterRadius: 5,
        maxOuterRadius: 15,
      };

      window.addEventListener("resize", this.resize.bind(this), false);
      this.resize();
      this.animate();
    }

    resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;

      this.ctx.scale(this.pixelRatio, this.pixelRatio);

      this.planets = [];
      this.soundwaves = [];

      for (let i = 0; i < this.surfaces.length; i++) {
        this.surfaces[i].resize(this.stageWidth, this.stageHeight);
      }

      this.rocket.resize(this.stageWidth, this.stageHeight);

      this.floatController.resize(this.stageWidth, this.stageHeight);
      this.roverController.resize(this.stageWidth, this.stageHeight);
      this.eye.resize(this.stageWidth, this.stageHeight);
      this.earth.resize(this.stageWidth, this.stageHeight);

      if (!this.planets || this.planets.length < this.planetsProp.maxPlanets) {
        this.planets.push(
          new Planet(
            this.stageWidth * 0.25,
            this.stageHeight * 0.55,
            Math.max(this.stageWidth * 0.04, 40),
            COLORS[Math.floor(Math.random() * COLORS.length)]
          ),
          new Planet(
            this.stageWidth * 0.15,
            this.stageHeight * 0.45,
            Math.max(this.stageWidth * 0.025, 20),
            COLORS[Math.floor(Math.random() * COLORS.length)]
          ),
          new Planet(
            this.stageWidth * 0.35,
            this.stageHeight * 0.25,
            Math.max(this.stageWidth * 0.01, 10),
            COLORS[Math.floor(Math.random() * COLORS.length)]
          ),
          new Planet(
            this.stageWidth * 0.9,
            this.stageHeight * 0.35,
            Math.max(this.stageWidth * 0.01, 40),
            COLORS[Math.floor(Math.random() * COLORS.length)]
          )
        );
      }

      for (let i = 0; i < this.planets.length; i++) {
        this.planets[i].resize(this.stageWidth, this.stageHeight);
      }

      // window.requestAnimationFrame(this.animate.bind(this));
      window.addEventListener("click", this.onTouch.bind(this), false);
      window.addEventListener("touchstart", this.onTouch.bind(this), false);

      window.addEventListener("mousemove", this.onMove.bind(this), false);
      window.addEventListener("touchmove", this.onMove.bind(this), false);
    }

    animate(t) {
      this.reqId = window.requestAnimationFrame(this.animate.bind(this));

      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      let dots;

      for (let i = 0; i < this.stars.length; i++) {
        const star = this.stars[i];
        star.animate(this.ctx);
      }

      for (let i = 0; i < this.planets.length; i++) {
        const planet = this.planets[i];
        planet.draw(this.ctx);
      }

      this.earth.draw(this.ctx, t);

      if (
        !this.soundwaves ||
        this.soundwaves.length < this.soundwavesProp.maxSoundwaves
      ) {
        this.soundwaves.push(
          new Soundwave(
            this.earthProp.radius,
            this.stageWidth,
            this.stageHeight,
            COLORS[Math.floor(Math.random() * COLORS.length)]
          )
        );
      }

      for (let i = this.soundwaves.length - 1; i >= 0; i--) {
        const soundwave = this.soundwaves[i];
        if (
          soundwave.radius > this.stageWidth &&
          soundwave.radius > this.stageHeight
        ) {
          this.soundwaves.splice(i, 1);
        } else {
          soundwave.animate(this.ctx, t);
        }
      }

      this.floatController.draw(this.ctx, t);

      this.rocket.draw(this.ctx, t);

      for (let i = 0; i < this.surfaces.length; i++) {
        dots = this.surfaces[i].draw(this.ctx);
        this.roverController.draw(this.ctx, t, dots);
      }

      this.eye.draw(this.ctx);
    }

    onMove(e) {
      let x = Math.floor(Math.random() * this.stageWidth);
      let y = Math.floor(Math.random() * this.stageHeight);

      let starOuterRadius = Math.floor(
        Math.floor(
          Math.random() * this.starProp.maxOuterRadius +
            this.starProp.minOuterRadius
        )
      );
      let starInnerRadius = starOuterRadius * 0.33;

      if (this.stars.length >= this.starProp.maxNumStars) {
        this.stars.splice(0, 1);
      } else {
        this.stars.push(new Star(x, y, 8, starOuterRadius, starInnerRadius));
      }
    }

    onTouch(e) {
      if (this.soundwaves && this.soundwaves.length > 0) {
        for (let i = 0; i < this.soundwaves.length; i++) {
          const soundwave = this.soundwaves[i];
          soundwave.soundwaveWidth = 300;
        }
      }
    }
  }

  useEffect(() => {
    const newCanvas = () => {
      new CanvasApp();
    };
    newCanvas();

    return () => {
      newCanvas();
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
