/// <reference path="08-namespace.ts" />
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("fee: " + fee);
// If we want to run this with node, we need to use --outFile option
// on the Typescript compiler 
//# sourceMappingURL=app2.js.map