import { day2Input } from "./i-day-2";

function calculateWrapperSurface(l: number, w: number, h: number): number {
  let x = l * w;
  let y = w * h;
  let z = h * l;
  let minArea = Math.min(x, y, z);
  return 2 * x + 2 * y + 2 * z + minArea;
}

function cleanInput(input: string) {
  input = input.trim().replaceAll("\n", "x");
  let arr = input.split("x").map((value) => Number(value));

  let newArr: number[][] = [];
  let tempArr: number[] = [];
  let indexCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    tempArr[indexCounter] = arr[i];

    if (tempArr.length === 3) {
      newArr.push(tempArr);
      tempArr = [];
      indexCounter = 0;
    } else indexCounter++;
  }

  return newArr;
}

const data = cleanInput(day2Input);
let sum = 0;
for (let i = 0; i < data.length; i++) {
  let l = data[i][0];
  let w = data[i][1];
  let h = data[i][2];
  sum += calculateWrapperSurface(l, w, h);
}

console.log(sum);
