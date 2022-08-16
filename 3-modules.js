// CommonJS - every file is a module
// Modules - encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternatives')
require('./7-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

console.log(data)