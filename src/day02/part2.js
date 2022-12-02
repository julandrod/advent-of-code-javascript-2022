// Advent of Code - Day 2 - Part Two

import { part1 } from "./part1";

const evaluatePlay = (needToEnd, opponentPlay) => {
  let myPlay;
  if (needToEnd === "X") {
    switch (opponentPlay) {
      case "A":
        myPlay = "Z";
        break;
      case "B":
        myPlay = "X";
        break;
      case "C":
        myPlay = "Y";
        break;
      default:
        break;
    }
  } else if (needToEnd === "Y") {
    switch (opponentPlay) {
      case "A":
        myPlay = "X";
        break;
      case "B":
        myPlay = "Y";
        break;
      case "C":
        myPlay = "Z";
        break;
      default:
        break;
    }
  } else if (needToEnd === "Z") {
    switch (opponentPlay) {
      case "A":
        myPlay = "Y";
        break;
      case "B":
        myPlay = "Z";
        break;
      case "C":
        myPlay = "X";
        break;
      default:
        break;
    }
  }
  return [`${opponentPlay} ${myPlay}`];
};

export function part2(input) {
  const gamesSplit = input.split(/\n/);
  let newPlay;
  let gameWithStrategy = [];

  gamesSplit.forEach((game) => {
    newPlay = evaluatePlay(game[2], game[0]);
    gameWithStrategy += newPlay + "\n";
  });

  return part1(gameWithStrategy);
}
