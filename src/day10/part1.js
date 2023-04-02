// Advent of Code - Day 10 - Part One

const handleSignals = (x, cycle) => {
  return [20, 60, 100, 140, 180, 220].includes(cycle) ? x * cycle : 0;
};

export function part1(input) {
  let operationsArray = input.split("\n");
  let cycle = 0;
  let x = 1;
  let signalStrength = 0;

  operationsArray.forEach((operation) => {
    if (operation.includes("noop")) {
      cycle++;
      signalStrength += handleSignals(x, cycle);
      } else if (operation.includes("addx")) {
      cycle++;
      signalStrength += handleSignals(x, cycle);
      cycle++;
      signalStrength += handleSignals(x, cycle);
      x += Number(operation.split(" ")[1]);
    }
  });

  return signalStrength;
}
