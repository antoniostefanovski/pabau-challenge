import { Direction } from "./direction";

const alphanumeric = new RegExp(/^[a-z0-9]+$/i);

export const solvePuzzle = (matrix: string[][]) => {
    let state = { direction: Direction.RIGHT, row: 0, column: 0, result: '' };

    while (state.row < matrix.length) {
        while (state.column < matrix[state.row].length) {
            let char = matrix[state.row][state.column];

            if (char == 's') {
                return state.result;
            }

            if(state.row == 0 && state.column == 0) {
                state.column += 1;
                continue;
            }
            
            if(!char.match(alphanumeric) && char != '+') {
                calculateCoordinates(state);
                continue;
            }

            let isAlphanumeric = false;

            if(char.match(alphanumeric)) {
                state.result += char;
                isAlphanumeric = true;
            }

            calculateDirection(matrix, state.row, state.column, state, isAlphanumeric);
            calculateCoordinates(state);
        }
    }
}

const calculateCoordinates = (state: any) => {
    switch (state.direction) {
        case Direction.RIGHT:
            state.column += 1;
            break;
        case Direction.LEFT:
            state.column -= 1;
            break;
        case Direction.UP:
            state.row -= 1;
            break;
        case Direction.DOWN:
            state.row += 1;
            break;
    }
}

const calculateDirection = (matrix: string[][], i: number, j: number, state: any, isAlphanumeric: boolean) => {
    switch(state.direction) {
        case Direction.RIGHT:
            if (isAlphanumeric && j + 1 < matrix[i].length && matrix[i][j+1] != ' ') {
                break;
            }

            if (i + 1 >= matrix.length) {
                state.direction = Direction.UP;
                break;
            }

            if (matrix[i+1][j] != ' ') {
                state.direction = Direction.DOWN;
                break;
            }

            if (matrix[i-1][j] != ' ') {
                state.direction = Direction.UP;
                break;
            }

            break;
        case Direction.LEFT:
            if (isAlphanumeric && j - 1 >= 0 && matrix[i][j-1] != ' ') {
                break;
            }

            if (i + 1 >= matrix.length) {
                state.direction = Direction.UP;
                break;
            }

            if (matrix[i+1][j] != ' ') {
                state.direction = Direction.DOWN;
                break;
            }

            if (matrix[i-1][j] != ' ') {
                state.direction = Direction.UP;
                break;
            }

            break;
        case Direction.UP:
        case Direction.DOWN:
            if (isAlphanumeric && i + 1 < matrix.length && matrix[i+1][j] != ' ') {
                break;
            }

            if (isAlphanumeric && i - 1 >= 0 && matrix[i-1][j] != ' ') {
                break;
            }

            if (j + 1 >= matrix[i].length) {
                state.direction = Direction.LEFT;
                break;
            }

            if (j - 1 < 0) {
                state.direction = Direction.RIGHT;
                break;
            }

            if (matrix[i][j+1] != ' ') {
                state.direction = Direction.RIGHT;
                break;
            }

            if (matrix[i][j-1] != ' ') {
                state.direction = Direction.LEFT;
                break;
            }

            break;
    }
}