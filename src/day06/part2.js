// Advent of Code - Day 6 - Part Two

export function part2(input) {
  const dataStream = Array.from(input)
  let testBuffer = [];
  for (let i = 0; i < dataStream.length - 14; i++) {
    testBuffer = new Set(dataStream.slice(i, i+14));
    if(testBuffer.size === 14){
      return i+14
    }
  }

  return;
}
