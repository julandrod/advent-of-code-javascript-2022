// Advent of Code - Day 6 - Part One

export function part1(input) {
  const dataStream = Array.from(input)
  let testBuffer = [];
  for (let i = 0; i < dataStream.length - 4; i++) {
    testBuffer = new Set(dataStream.slice(i, i+4));
    if(testBuffer.size === 4){
      return i+4
    }
  }

  return;
}
