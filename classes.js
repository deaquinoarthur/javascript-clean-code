// Clean Code: Classes

// Prefer ES2015/ES6 classes over ES5 plain functions
const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error('Instantiate Animal with "new"')
  }

  this.age = age
}

Animal.prototype.move = function move() {}

const Mammal = function(age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error('Instantiate Mammal with "new"')
  }

  Animal.call(this, age)
  this.furColor = furColor
}

// Use method chaining

// Prefer compositions over inheritance
