// Clean Code: Objects and Data Structures

// Use getters and setters
// Not good
function makeBankAccount() {
  // ...
  return {
    balance: 0,
    // ...
  }
}

const account = makeBankAccount()
account.balance = 100
console.log(account.balance)

// Good
function makeBankAccountGood() {
  let balance = 0

  function getBalance() {
    return balance
  }

  function setBalance(amount) {
    balance = amount
    return `Your balance now is ${balance}`
  }

  return {
    getBalance,
    setBalance
  }
}

const newAccount = makeBankAccountGood()
console.log(newAccount.getBalance())
console.log(newAccount.setBalance(100))
console.log(newAccount.getBalance())

// Make objects have private members
// Not good
const Employee = function(name) {
  this.name = name
}

Employee.prototype.getName = function getName() {
  return this.name
}

const employee = new Employee('John Doe')
console.log(employee)
console.log(employee.getName())
delete employee.name
console.log(employee.getName())

// Good
const EmployeeCorrectWay = function(name) {
  return {
    getName() {
      return name
    }
  }
}

const newEmployee = new EmployeeCorrectWay('John Doe')
console.log(newEmployee)
console.log(newEmployee.getName())
delete newEmployee.name
console.log(newEmployee.getName())
