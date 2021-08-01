const { program } = require('commander');
var AWS = require('aws-sdk');

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});

program
  .description('A CLI echo program')
  .argument('<input>')
  .option('-v, --verbose', 'Output extra information');

program.parse();

const options = program.opts();

if (options.verbose) {
  console.log("This is extra information");
}
console.log("You said: ", program.args);
console.log("Region: ", AWS.config.region);
