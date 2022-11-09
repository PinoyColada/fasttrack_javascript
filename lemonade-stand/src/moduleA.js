console.log("Running Module A");

require("./moduleB");

const moduleBImports = require("./moduleB");

moduleBImports.internalFunction();

const moduleBImportsAgain = require("./moduleB");

console.log(moduleBImportsAgain.internalVariable);

console.log("Finished Running Module A");
