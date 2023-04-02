// Advent of Code - Day 7 - Part One

let directory = new Map();
let inputData;
let allFiles = [];

const parseRawCommands = (input) => {
  let folders = ["."];
  directory.set(".", { parent: null, size: 0, depth: 0 });
  inputData = input.split("\n");

  while (inputData.length) {
    let [arg1, arg2, arg3] = inputData.shift().split(" ");

    if (arg1 === "$" && arg2 === "cd") {
      switch (arg3) {
        case "/":
          folders.splice(1);
          break;
        case "..":
          folders.pop();
          break;
        default:
          folders.push(arg3);
          break;
      }
    } else if (arg1 !== "$") {
      let fullPath = folders.join("/");
      // let parentPath = folders.slice(0, -1).join("/") || null;
      let depth = folders.length;

      if (arg1 === "dir")
        directory.set(`${fullPath}/${arg2}`, {
          parent: fullPath,
          size: 0,
          depth,
        });
      else allFiles.push({ fullPath, filename: arg2, size: +arg1 });
    }
  }
};

const evaluateFoldersSize = () => {
  Array.from(
    allFiles.reduce((folders, file) => {
      folders.set(file.fullPath, file.size + (folders.get(file.fullPath) ?? 0));
      return folders;
    }, new Map())
  ).forEach(([folder, size]) => {
    directory.get(folder).size += size;
  });

  Array.from(directory.values())
    .sort((a, b) => b.depth - a.depth)
    .forEach((folder) => {
      if (folder.parent) directory.get(folder.parent).size += folder.size;
    });
};

export function part1(input) {
  parseRawCommands(input);
  evaluateFoldersSize();

  return Array.from(directory.values())
    .filter((folder) => folder.size <= 100000)
    .reduce((totalSize, folder) => totalSize + folder.size, 0);
}
