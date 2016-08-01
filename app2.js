/// <reference path="08-namespace.ts" />
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("fee: " + fee);
