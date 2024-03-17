"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var script_1 = require("./script");
console.log('Hello world! asas');
// s C---+
var matrix = [['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
    ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+']];
var result = (0, script_1.solvePuzzle)(matrix);
console.log(result);
//# sourceMappingURL=main.js.map