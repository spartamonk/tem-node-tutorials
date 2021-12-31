//npm - Node Package manager
//3 uses
//1. resuse our own code in other projects
//2. use code written by other developers in our projects
//3. share our solutions with other developers

//npm - global command, comes with node
//npm --version - this this you your npm version
//local dependency - useable in only the particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file that stores important information about the project/package
//to add the package.json manually- (Create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items =[1, [2,[3,[4], [23,343, 322]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);