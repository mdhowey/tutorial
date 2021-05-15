// CommonJS, every file is a module (default)
// Modules - Encapsulated Code (only share minimum)

// Import statements... kind of...
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// Code runs without being assigned to variable
// No variable was not invoked 
require('./7-mine-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)