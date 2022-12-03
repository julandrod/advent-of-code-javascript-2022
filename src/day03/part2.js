// Advent of Code - Day 3 - Part Two

const evaluatePacks = (pack1, pack2, pack3) => {
  console.log(pack1.length);
  for (let i = 0; i < pack1.length; i++) {
    for (let j = 0; j < pack2.length; j++) {
      if (pack1[i] === pack2[j]) {
        for (let k = 0; k < pack3.length; k++) {
          if (pack1[i] === pack3[k]) return pack1[i];
        }
      }
    }
  }
  return;
};

export function part2(input) {
  const packSplit = input.split(/\n/);
  let repeatItems = [];

  for (let i = 0; i < packSplit.length; i += 3) {
    repeatItems.push(
      evaluatePacks(packSplit[i], packSplit[i + 1], packSplit[i + 2])
    );
  }

  repeatItems = repeatItems.map((item) => {
    if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
      return item.charCodeAt(0) - 96;
    } else if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
      return item.charCodeAt(0) - 38;
    }
  });

  const sumOfPriorities = repeatItems.reduce((acc, cur) => acc + cur, 0);

  return sumOfPriorities;
}
