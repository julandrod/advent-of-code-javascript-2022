// Advent of Code - Day 5 - Part One

export const separateCrates = (cratesText) => {
  const cratesInputs = cratesText.split(/\n/);
  let crates = [];
  let temp;
  let cratesArranged = [];

  // Extract only the elements from every column
  // [N] [S] [Z] [V] [M] [N] [Z] [F] [M] = NSZVMNZFM
  for (let i = 0; i < cratesInputs.length - 1; i++) {
    temp = "";
    for (let j = 1; j < cratesInputs[i].length; j += 4) {
      temp += cratesInputs[i][j];
    }
    crates.push(temp);
  }

  /**Rearranged every column into rows
                       
     
    
      [R] 
      [W] 
      [Z]  =>  [" ", " ", " ", R, W, Z, H, Q]
      [H] 
      [Q] 
   * */ 
  
  for (let i = 0; i < crates.length; i++) {
    for (let j = 0; j < crates[0].length; j++) {
      if (i === 0) cratesArranged[j] = [];
      // Add elements to the new array only if is not a blank space
      if (crates[i][j] !== " ") cratesArranged[j].push(crates[i][j]);
    }
  }

  return cratesArranged;
};

export function part1(input) {
  const cratesText = input.split(/\n\n/)[0];
  const movesText = input.split(/\n\n/)[1].split(/\n/);

  const crates = separateCrates(cratesText);
  const values = movesText.map((item) => item.split(" "));

  values.forEach((move) => {
    let tempCrate = crates[move[3] - 1].splice(0, move[1]);
    tempCrate.forEach((item) => {
      crates[move[5] - 1].splice(0, 0, item);
    });
  });

  let result = "";

  crates.forEach((item) => (result += item[0]));

  return result;
}
