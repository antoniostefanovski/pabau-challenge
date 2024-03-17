"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solvePuzzle = void 0;
var direction_1 = require("./direction");
var alphanumeric = new RegExp(/^[a-z0-9]+$/i);
var solvePuzzle = function (matrix) {
    var state = { direction: direction_1.Direction.RIGHT, row: 0, column: 0, result: '' };
    while (state.row < matrix.length) {
        while (state.column < matrix[state.row].length) {
            var char = matrix[state.row][state.column];
            if (char == 's') {
                return state.result;
            }
            if (state.row == 0 && state.column == 0) {
                state.column += 1;
                continue;
            }
            if (!char.match(alphanumeric) && char != '+') {
                calculateCoordinates(state);
                continue;
            }
            var isAlphanumeric = false;
            if (char.match(alphanumeric)) {
                state.result += char;
                isAlphanumeric = true;
            }
            calculateDirection(matrix, state.row, state.column, state, isAlphanumeric);
            calculateCoordinates(state);
        }
    }
};
exports.solvePuzzle = solvePuzzle;
var calculateCoordinates = function (state) {
    switch (state.direction) {
        case direction_1.Direction.RIGHT:
            state.column += 1;
            break;
        case direction_1.Direction.LEFT:
            state.column -= 1;
            break;
        case direction_1.Direction.UP:
            state.row -= 1;
            break;
        case direction_1.Direction.DOWN:
            state.row += 1;
            break;
    }
};
var calculateDirection = function (matrix, i, j, state, isAlphanumeric) {
    switch (state.direction) {
        case direction_1.Direction.RIGHT:
            if (isAlphanumeric && j + 1 < matrix[i].length && matrix[i][j + 1] != ' ') {
                break;
            }
            if (i + 1 >= matrix.length) {
                state.direction = direction_1.Direction.UP;
                break;
            }
            if (matrix[i + 1][j] != ' ') {
                state.direction = direction_1.Direction.DOWN;
                break;
            }
            if (matrix[i - 1][j] != ' ') {
                state.direction = direction_1.Direction.UP;
                break;
            }
            break;
        case direction_1.Direction.LEFT:
            if (isAlphanumeric && j - 1 >= 0 && matrix[i][j - 1] != ' ') {
                break;
            }
            if (i + 1 >= matrix.length) {
                state.direction = direction_1.Direction.UP;
                break;
            }
            if (matrix[i + 1][j] != ' ') {
                state.direction = direction_1.Direction.DOWN;
                break;
            }
            if (matrix[i - 1][j] != ' ') {
                state.direction = direction_1.Direction.UP;
                break;
            }
            break;
        case direction_1.Direction.UP:
        case direction_1.Direction.DOWN:
            if (isAlphanumeric && i + 1 < matrix.length && matrix[i + 1][j] != ' ') {
                break;
            }
            if (isAlphanumeric && i - 1 >= 0 && matrix[i - 1][j] != ' ') {
                break;
            }
            if (j + 1 >= matrix[i].length) {
                state.direction = direction_1.Direction.LEFT;
                break;
            }
            if (j - 1 < 0) {
                state.direction = direction_1.Direction.RIGHT;
                break;
            }
            if (matrix[i][j + 1] != ' ') {
                state.direction = direction_1.Direction.RIGHT;
                break;
            }
            if (matrix[i][j - 1] != ' ') {
                state.direction = direction_1.Direction.LEFT;
                break;
            }
            break;
    }
};
//# sourceMappingURL=script.js.map