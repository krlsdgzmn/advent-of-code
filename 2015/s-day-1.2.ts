import { day1Input } from "./i-day-1";

function findBasementPosition(direction: string): number {
  let floor = 0;
  let directionLength = direction.length;

  let i: number;
  for (i = 0; i < directionLength; i++) {
    if (direction[i] === "(") floor++;
    else if (direction[i] === ")") floor--;

    if (floor === -1) break;
  }

  return i + 1;
}

console.log(findBasementPosition(day1Input));
