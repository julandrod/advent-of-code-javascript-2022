// Advent of Code - Day 2 - Part One

export function part1(input) {
  const gamesSplit = input.split(/\n/);
  let totalScore = 0;

  gamesSplit.forEach((game) => {
    switch (game) {
      // A Rock, X Rock = Tie (3) + Rock (1)
      case "A X":
        totalScore += 4;
        break;
        // A Rock, Y Paper = Win (6) + Paper (2)
      case "A Y":
        totalScore += 8;
        break;
      // A Rock, Z Scissors = Loss (0) + Scissors (3)
      case "A Z":
        totalScore += 3;
        break;
      // B Paper, X Rock = Loss (0) + Rock (1)
      case "B X":
        totalScore += 1;
        break;
      // B Paper, Y Paper = Tie (3) + Paper (2)
      case "B Y":
        totalScore += 5;
        break;
      // B Paper, Z Scissors = Win (6) + Scissors (3)
      case "B Z":
        totalScore += 9;
        break;
      // C Scissors, X Rock = Win (6) + Rock (1)
      case "C X":
        totalScore += 7;
        break;
      // C Scissors, Y Paper = Loss (0) + Paper (2)
      case "C Y":
        totalScore += 2;
        break;
      // C Scissors, Z Scissors = Tie (3) + Scissors (3)
      case "C Z":
        totalScore += 6;
        break;
      default:
        break;
    }
  });

  return totalScore;
}
