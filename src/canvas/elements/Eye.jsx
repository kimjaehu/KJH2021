export class Eye {
  constructor() {
    this.radius = 100;
    this.speed = 0.1;
    this.spikes = 50;
    this.step = Math.PI / this.spikes;
    this.rot = (Math.PI / 2) * 3;
    this.vx = 1;
    this.vy = 1;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.x = this.stageWidth * 0.15;
    this.y = this.stageHeight * 0.15;
  }

  draw(ctx) {
    this.outerPupil = this.stageHeight * 0.0009 * this.radius;

    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";

    ctx.beginPath();

    const outerGradient = ctx.createRadialGradient(
      0,
      0,
      this.outerPupil * 0.8,
      0,
      0,
      this.outerPupil
    );
    outerGradient.addColorStop(0, "rgba(153, 153, 153, 1)");
    outerGradient.addColorStop(1, "rgba(17, 17, 17, 1)");

    ctx.arc(0, 0, this.outerPupil, 0, Math.PI * 2, true);
    ctx.fillStyle = outerGradient;

    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, this.outerPupil * 0.8, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(175, 175, 175, 1)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, this.outerPupil * 0.3, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(34, 34, 34, 1)";
    ctx.fill();
    ctx.stroke();

    // around center

    const innerRadius = this.outerPupil * 0.3;
    const outerRadius = innerRadius * 2.5;

    let spikeX = this.x;
    let spikeY = this.y;

    ctx.beginPath();
    ctx.moveTo(0, -outerRadius);
    for (let i = 0; i < this.spikes; i++) {
      spikeX = Math.cos(this.rot) * outerRadius;
      spikeY = Math.sin(this.rot) * outerRadius;
      ctx.lineTo(spikeX, spikeY);
      this.rot += this.step;

      spikeX = Math.cos(this.rot) * innerRadius;
      spikeY = Math.sin(this.rot) * innerRadius;
      ctx.lineTo(spikeX, spikeY);
      this.rot += this.step;
    }
    ctx.lineTo(0, -outerRadius);
    ctx.closePath();

    const innerGradient = ctx.createRadialGradient(
      0,
      0,
      this.outerPupil * 0.6,
      0,
      0,
      this.outerPupil * 0.1
    );
    innerGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    innerGradient.addColorStop(1, "rgba(17, 17, 17, 1)");

    ctx.fillStyle = innerGradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, this.outerPupil * 0.2, 0, Math.PI * 2, true);

    ctx.fillStyle = "rgba(14, 14, 14, 1)";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(-20, -20, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(225, 225, 225, 1)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(40, 20, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(225, 225, 225, 1)";
    ctx.fill();
    ctx.restore();
    this.animate();
  }

  animate() {
    this.x += this.speed * this.vx;
    this.y += this.speed * this.vy;

    if (this.x <= this.stageWidth * 0.1 || this.x >= this.stageWidth * 0.2) {
      this.vx *= -1;
      this.x += this.speed * this.vx;
    } else if (
      this.y <= this.stageHeight * 0.1 ||
      this.y >= this.stageHeight * 0.2
    ) {
      this.vy *= -1;
      this.y += this.speed * this.vy;
    }
  }
}
