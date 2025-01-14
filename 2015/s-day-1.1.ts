import { day1Input } from "./i-day-1";

function findSantaFloor(direction: string): number {
  let floor = 0;
  let directionLength = direction.length;

  for (let i = 0; i < directionLength; i++) {
    if (direction[i] === "(") floor = floor + 1;
    else if (direction[i] === ")") floor = floor - 1;
  }

  return floor;
}

// Test
console.log(findSantaFloor("(())")); // 0
console.log(findSantaFloor("()()")); // 0
console.log(findSantaFloor("(((")); // 3
console.log(findSantaFloor("(()(()(")); // 3

// Input
console.log(findSantaFloor(day1Input));
