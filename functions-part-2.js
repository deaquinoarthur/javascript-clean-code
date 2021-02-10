// Clean Code: Functions (Part 2)

// AVOID SIDE EFFECTS
let name = 'Arthur D\'Aquino'

// Not too good
function splitIntoFirstAndLastName() {
  name = name.split(' ')
  return name
}

splitIntoFirstAndLastName()

name = 'Arthur D\'Aquino'

// Good
function splitIntoFirstAndLastNameCorrectly() {
  return name.split(' ')
}

const newName = splitIntoFirstAndLastNameCorrectly()


// DON'T WRITE TO GLOBAL FUNCTIONS
// Not too good
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray)
  return this.filter(elem => !hash.has(elem)) 
}

// Good
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray)
    return this.filter(elem => !hash.has(elem)) 
  }
}


// FAVOR FUNCTIONAL PROGRAMMING OVER IMPERATIVE PROGRAMMING
const programmerOutput = [ 
  { name: 'Uncle Bobby', linesOfCode: 500 },
  { name: 'Suzie Q', linesOfCode: 1500 },
  { name: 'Jimmy Gosling', linesOfCode: 150 },
  { name: 'Gracie Hopper', linesOfCode: 1000 }
]

// Not too good
let totalOutput = 0

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode
}

// Good
const INITIAL_VALUE = 0

const total = programmerOutput
  .map(programmer => programmer.linesOfCode)
  .reduce((accumulator, linesOfCode) => accumulator + linesOfCode, INITIAL_VALUE);


// ENCAPSULATE CONDITIONALS
// Not too good
if ((new Date().getFullYear() - 1983)  > 18) {
  // ...
}

// Good
function shouldDrive(currentYear, birthYear) {
  return (currentYear - birthYear)  > 18
}

const currentYear = new Date().getFullYear()
const birthYear = 1983

if (shouldDrive(currentYear, birthYear)) {
  // ...
}

// AVOID NEGATIVE CONDITIONALS
// Not good at all
function isHisNameNotArthur() {
  // ...
}

if (!isHisNameNotArthur) {
  // ...
}

// Good
function isHisNameArthur() {
  // ...
}

if (!isHisNameArthur) {
  // ...
}

// AVOID CONDITIONALS
// Not good
class Airplane {
  // ...
  getCruisingAltitude() {
    switch(this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount()
      case 'Air Force One':
        return this.getMaxAltitude()
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure()
    }
  }
}

// Good
class AirplaneMaster {

}

class Boeing777 extends Airplane {
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount()
  }
}

class AirForceOne extends Airplane {
  getCruisingAltitude() {
    return this.getMaxAltitude()
  }
}

class Cessna extends Airplane {
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure()
  }
}

// REMOVE DEAD CODE
// this function 'oldRequestModule' should be removed since
// it's not being used anymore
function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

const req = newRequestModule
inventoryTracker('apples', req, 'www.carnes.cc')
