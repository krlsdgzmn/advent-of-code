import { day1Input } from "./i-day-1";

function findSantaFloor(direction: string): number {
  let floor = 0;
  let directionLength = direction.length;

  for (let i = 0; i < directionLength; i++) {
    if (direction[i] === "(") floor++;
    else if (direction[i] === ")") floor--;
  }

  return floor;
}

console.log(findSantaFloor(day1Input));
