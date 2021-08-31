export class Star {
  constructor(cx, cy, spikes, outerRadius, innerRadius) {
    this.cx = cx;
    this.cy = cy;
    this.x = cx;
    this.y = cy;
    this.spikes = spikes;
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.step = Math.PI / spikes;
    this.rot = (Math.PI / 2) * 3;
  }

  animate(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.cx, this.cy - this.outerRadius);
    for (let i = 0; i < this.spikes; i++) {
      this.x = this.cx + Math.cos(this.rot) * this.outerRadius;
      this.y = this.cy + Math.sin(this.rot) * this.outerRadius;
      ctx.lineTo(this.x, this.y);
      this.rot += this.step;

      this.x = this.cx + Math.cos(this.rot) * this.innerRadius;
      this.y = this.cy + Math.sin(this.rot) * this.innerRadius;
      ctx.lineTo(this.x, this.y);
      this.rot += this.step;
    }
    ctx.lineTo(this.cx, this.cy - this.outerRadius);
    ctx.closePath();
    ctx.fillStyle = "#f1faee";
    ctx.fill();
  }
}
