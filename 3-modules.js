//Modules- Encapsulated code (only share minimum)
//Node uses CommonJS under the hood, every file is module (by default)

const { john, peter } = require('./4-names')
// console.log(names);

const greetings = require('./5-utils')

// greetings('Christopher')
// greetings(john)
// greetings(peter)

const data = require('./6-alternative-flavor')
// console.log(data);
require('./7-mind-grenade')
