import { day2Input } from "./i-day-2";

function calculateWrapperSurface(l: number, w: number, h: number): number {
  let x = l * w;
  let y = w * h;
  let z = h * l;
  let minArea = Math.min(x, y, z);
  return 2 * x + 2 * y + 2 * z + minArea;
}

function cleanInput(input: string): number[][] {
  let arr = input.trim().split("\n");
  return arr.map((line) => line.split("x").map(Number));
}

const data = cleanInput(day2Input);
let sum = 0;
for (let i = 0; i < data.length; i++) {
  let [l, w, h] = data[i].values();
  sum += calculateWrapperSurface(l, w, h);
}

console.log(sum);
