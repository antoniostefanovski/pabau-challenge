import { solvePuzzle } from "./script";

console.log('Hello world! asas')

// s C---+
let matrix = [['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
              [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
              ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
              ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
              ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+']];

const result = solvePuzzle(matrix);

console.log(result);