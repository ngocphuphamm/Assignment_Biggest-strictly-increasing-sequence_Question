const biggestStrictlyIncreasingSequence = require('./core');

// function to handle inputs and call other functions
async function main() {
    try {
        // get inputs
        const {n, m, matrix} = selectCase(2);

        // validate inputs
        validateInputs(n, m, matrix);

        // call function to find the biggest strictly increasing sequence
        let result = biggestStrictlyIncreasingSequence(n, m, matrix);
        console.log(`====== Output: ${result} ======`)
    } catch (err) {
        console.error(err);
    }
}

/**
 * 
 * @param {number} n row number 
 * @param {number} m columns number
 * @param {number} matrix 
 */
// function validate inputs
function validateInputs(n, m, matrix) {
    switch (true) {
        case n < 2 || n > 20:
            throw new Error("Invalid input: n must be between 2 and 20 (inclusive)");
        case m < 2 || m > 20:
            throw new Error("Invalid input: m must be between 2 and 20 (inclusive)");
        case !Array.isArray(matrix) || matrix.length !== n:
            throw new Error("Invalid input: matrix must be a 2D array with n rows");
        case matrix.some((row, i) => !Array.isArray(row) || row.length !== m):
            throw new Error("Invalid input: matrix must be a 2D array with m columns");
    }
}

/**
 * 
 * @param {number} numberCase select case for input data
 * @returns 
 */
function selectCase(numberCase = 1)
{
    switch (numberCase) {
        case 1:
            return {
                n : 3,
                m : 3,
                matrix : [[1, 2, 3], [2, 4, 1], [1, 5, 6]]
            }
        case 2:
            return {
                n : 2,
                m : 2,
                matrix : [[1, 0], [2, 1]]
            }
        default:
            throw new Error("Invalid number case: must be '1' or '2'");
    }
}

// run the program
main();
