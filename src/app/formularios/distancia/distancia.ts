export class Multiplicar {
  x1: number=0;
  y1: number=0;
  x2: number=0;
  y2: number=0;
  resultado: number = 0;

  calcularDistancia(): void {
    const dx = this.x2 - this.x1;
    const dy = this.y2 - this.y1;
    this.resultado = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}
