// Clean Code: Variables

// USE MEANINGFUL AND PRONOUNCEABLE VARIABLE NAMES
var year = new Date().getFullYear()
var month = new Date().getMonth()
var day = new Date().getDate()
var yearMonthDay = `${year}/${month}/${day}`


// USE ES6 CONSTANTS WHEN VARIABLE VALUES DO NOT CHANGE
const FIRST_US_PRESIDENT = 'George Washington'


// USE THE SAME VOCABULARY FOR THE SAME TYPE OF VARIABLE
// Not too good
function getUserInfo() { console.log('get user info') }
function getClientData() { console.log('get client data') }
function getCustomerRecord() { console.log('get customer record') }

// Good
function getUser() { console.log('get user') }


// USE SEARCHABLE NAMES
function runAJob() { console.log('run a job') }

// Not too good 
for (var i = 0; i < 5; i++) {
  runAJob()
}

// Good
var MINUTES_TO_RUN = 5

for (var i = 0; i < MINUTES_TO_RUN; i++) {
  runAJob()
}


// USE EXPLANATORY VARIABLES
// Not too good ---
if ((new Date().getFullYear() - 1983)  > 18) {
  console.log('You can drive')
}

// Good ---
const isAnAdult = (new Date().getFullYear() - 1983)  > 18

if (isAnAdult) {
  console.log('You can drive')
}


// DON'T ADD UNIDEED CONTEXT
// Not too good
var car = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue'
}

function paintCar(car) {
  car.carColor = 'Red'
}

// Good
car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue',
}

function sayCarModel(car) {
  return car.model
}


// SHORT-CIRCUITING IS CLEANER THAN CONDITIONALS
function createMicrobrewery(name) {
  var breweryName;
  if (name) {
    breweryName = name;
  } else {
    breweryName = 'Hipster Brew Co.';
  }
}

function createMicrobreweryCleanWay(name) {
  var breweryName = name || 'Hipster Brew Co.'
}
