// Advent of Code - Day 4 - Part One

export function part1(input) {
  const suppliesInput = input.split(/\n/);

  const pack1 = suppliesInput.map((item) => item.split(",")[0].split("-"));
  const pack2 = suppliesInput.map((item) => item.split(",")[1].split("-"));

  let result = 0;

  for (let i = 0; i < pack1.length; i++) {
    if (
      (pack1[i][0] <= pack2[i][0] && pack1[i][1] >= pack2[i][1]) ||
      (pack2[i][0] <= pack1[i][0] && pack2[i][1] >= pack1[i][1])
    ) {
      result += 1;
    }
  }

  return result;

  // const arrayInput = input.split("\n");
  // const fullyContains = arrayInput.reduce((cont, pair) => {
  //   const [firstRange, secondRange] = pair
  //     .split(",")
  //     .map((range) => range.split("-").map((strNum) => parseInt(strNum)));

  //   let isFullyContained =
  //     (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1]) ||
  //     (secondRange[0] <= firstRange[0] && secondRange[1] >= firstRange[1]);

  //   return cont + (isFullyContained ? 1 : 0);
  // }, 0);

  // return fullyContains;
}
