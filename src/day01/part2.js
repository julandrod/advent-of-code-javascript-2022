// Advent of Code - Day 1 - Part Two

export function part2(input) {
  const inputText = input.split(/\n\n/);

  const elfCalories = inputText.map((input) => {
    return input.split(/\n/).reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  });

  const caloriesSort = elfCalories
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((acc, cur) => cur + acc, 0);

  return caloriesSort;
}
