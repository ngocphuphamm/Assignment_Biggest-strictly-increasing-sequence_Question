
const {LEFT_DIRECTION, UP_DIRECTION} = require('./constant');

/**
 * 
 * @param {number} n row number
 * @param {number} m column number
 * @param {number [][]} matrix 2D array representing input matrix 
 * @returns {number}
 */
// function to find the biggest strictly increasing sequence
function biggestStrictlyIncreasingSequence(n, m, matrix) {
    let dp = initMatrix(n, m);
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            switch (true) {
                case i === 0 && j === 0:
                    dp[i][j] = 1;
                case i === 0:
                    dp[i][j] = compareAdjacentValue(matrix, dp, i, j, LEFT_DIRECTION);
                    break;
                case j === 0:
                    dp[i][j] = compareAdjacentValue(matrix, dp, i, j, UP_DIRECTION);
                    break;
                default:
                    dp[i][j] = Math.max(
                        compareAdjacentValue(matrix, dp, i, j, LEFT_DIRECTION),
                        compareAdjacentValue(matrix, dp, i, j, UP_DIRECTION)
                    );
            }
            maxLength = Math.max(maxLength, dp[i][j]);
        }
    }

    return maxLength;
}

/**
 * 
 * @param {number} n row number
 * @param {number} m column number
 * @returns {number [][]}
 */
// function init new matrix
function initMatrix(n, m)
{
    return new Array(n).fill(0).map(() => new Array(m).fill(0));
}


/**
 * 
 * @param {number [][]} matrix  2D array representing input matrix
 * @param {number [][]} dp  2D array representing dynamic programming array
 * @param {number} i row index
 * @param {number} j column index
 * @param {string} direction  a string indicating the direction to compare the current element in the matrix with, either "left" or "up".
 * @returns {number}
 */
// function compare adjacent value
function compareAdjacentValue(matrix, dp, i, j, direction) {
    switch (direction) {
        case LEFT_DIRECTION:
            return matrix[i][j] > matrix[i][j - 1] ? dp[i][j - 1] + 1 : 1;
        case UP_DIRECTION:
            return matrix[i][j] > matrix[i - 1][j] ? dp[i - 1][j] + 1 : 1;
        default:
            throw new Error(`Invalid direction: must be ${LEFT_DIRECTION} or ${UP_DIRECTION}`);
    }
}




module.exports = biggestStrictlyIncreasingSequence



