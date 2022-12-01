// Advent of Code - Day 1 - Part One

export function part1(input) {
  const inputText = input.split(/\n\n/);

  const elfCalories = inputText.map((input) => {
    return input.split(/\n/).reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  });

  return Math.max(...elfCalories);
}
