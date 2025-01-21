import { day2Input } from "./i-day-2";

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

function removeMaxValue(arr: number[]): number[] {
  let sorted = arr.sort((a, b) => b - a);
  let mid = sorted[1];
  if (mid === Math.max(...arr)) return [mid, Math.min(...arr)];
  return arr.filter((item) => item < Math.max(...arr));
}

function calculateWrapper(arr: number[]): number {
  let l = arr[0];
  let w = arr[1];
  let h = arr[2];
  return l * w * h;
}

function calculateBow(arr: number[]): number {
  let sum = 0;
  if (arr.length === 1) sum = arr[0] * 4;
  else sum = arr[0] + arr[0] + arr[1] + arr[1];
  return sum;
}

const arr = cleanInput(day2Input);
let wrapperLength = 0;
let bowLength = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  bowLength = calculateBow(removeMaxValue(arr[i]));
  wrapperLength = calculateWrapper(arr[i]);
  sum += wrapperLength + bowLength;
}
console.log(sum);
