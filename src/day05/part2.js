// Advent of Code - Day 5 - Part Two

import { separateCrates } from "./part1";

export function part2(input) {
  const cratesText = input.split(/\n\n/)[0];
  const movesText = input.split(/\n\n/)[1].split(/\n/);

  const crates = separateCrates(cratesText);
  const values = movesText.map((item) => item.split(" "));

  values.forEach((move) => {
    let tempCrate = crates[move[3] - 1].splice(0, move[1]);

    crates[move[5] - 1].splice(0, 0, ...tempCrate);
  });

  let result = "";

  crates.forEach((item) => (result += item[0]));

  return result;
}
