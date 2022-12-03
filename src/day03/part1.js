// Advent of Code - Day 3 - Part One
 
const evaluatePacks = (pack1, pack2) => {
  for (let i = 0; i < pack1.length; i++) {
    for (let j = 0; j < pack2.length; j++) {
      if (pack1[i] === pack2[j]) return pack1[i];
    }
  }
  return;
};

export function part1(input) {
  const packSplit = input.split(/\n/);

  const pack1 = [];
  const pack2 = [];
  let repeatItems = [];

  packSplit.forEach((item) => {
    const half = Math.ceil(item.length / 2);
    repeatItems.push(evaluatePacks(item.slice(0, half), item.slice(half)));
    pack1.push(item.slice(0, half));
    pack2.push(item.slice(half));
  });

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
