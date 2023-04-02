// Advent of Code - Day 10 - Part Two

let crt = Array(6)
  .fill()
  .map(() => Array(40).fill("#"));

const handleSignals = (x, cycle) => {
  let t = cycle - 1;
  crt[Math.floor(t / 40)][t % 40] = Math.abs(x - (t % 40)) <= 1 ? "#" : " ";
};

export function part2(input) {
  let operationsArray = input.split("\n");
  let cycle = 0;
  let x = 1;

  operationsArray.forEach((operation) => {
    if (operation.includes("noop")) {
      cycle++;
      handleSignals(x, cycle);
    } else if (operation.includes("addx")) {
      cycle++;
      handleSignals(x, cycle);
      cycle++;
      handleSignals(x, cycle);
      x += Number(operation.split(" ")[1]);
    }
  });

  for (let i = 0; i < 6; i++) {
    console.log(crt[i].join(""));
  }
  
  return;
}
