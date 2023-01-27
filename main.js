const biggestStrictlyIncreasingSequence = require('./core');
const {selectCase, validateInputs} = require('./utils');
// function to handle inputs and call other functions
async function main() {
    try {
        // get inputs
        const {n, m, matrix} = selectCase(1);

        // validate inputs
        validateInputs(n, m, matrix);

        // call function to find the biggest strictly increasing sequence
        let result = biggestStrictlyIncreasingSequence(n, m, matrix);
        console.log(`====== Output: ${result} ======`)
    } catch (err) {
        console.error(err);
    }
}

// run the program
main();
