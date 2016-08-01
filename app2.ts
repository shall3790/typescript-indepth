/// <reference path="08-namespace.ts" />

import util = Utility.Fees;

let fee = util.CalculateLateFee(10);
console.log(`fee: ${fee}`);


// If we want to run this with node, we need to use --outFile option
// on the Typescript compiler