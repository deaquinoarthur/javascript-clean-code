// Clean Code: Functions (Part 1)

// Functions arguments(2 or fewer ideally)
// Not too good
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
// Good
const menuConfig = {
  title: 'foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
}

function createNewMenu(menuConfig) {
  // ...
}

// Functions should do one thing
const clients = [
  { name: 'Arthur', isActive: true },
  { name: 'Help', isActive: false },
  { name: 'Stefany', isActive: false },
  { name: 'Vicente', isActive: true }
]

function email(client) {
  console.log(`Emailing the client: ${client.name}`)
}

// Not too good
function emailClients(clients) {
  clients.forEach(client => {
    if (client.isActive === true) {
      email(client)
    }
  })
}

// Good
function mailClients(clients) {
  clients
    .filter(isClientActive)
    .forEach(email)
}

function isClientActive(client) {
  return client.isActive === true
}

// Function names should say what they do
function addMonthToDate(month, date) {
  // ...
}

const date = new Date()
addMonthToDate(1, date)

// Functions should only be one level of abstraction
// Not too good
function parseBetterJSAlternative(code) {
  const REGEXES = [ /* ... */ ]
  const statements = code.split(' ')
  const tokens = []

  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      // ...
    })
  })

  const ast = []

  tokens.forEach(token => {
    // ...
  })

  ast.forEach(node => {
    // ...
  })
}

// Good
function tokenize(code) {
  const REGEXES = [
    // ...
  ]
  const statements = code.split(' ')
  const tokens = []
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push(/*...*/)
    })
  })
  return tokens
}

function lexer(tokens) {
  const ast = []
  tokens.forEach(token => {
    ast.push(/*...*/)
  })
  return ast
}

function parseBetterJsAlternativeCleaned(code) {
  const tokens = tokenize(code)
  const ast = lexer(tokens)
  ast.forEach(node => {
    // parse ...
  })
}

// Remove duplicate code
// Not too good
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary()
    const experience = developer.getExperience()
    const githubLink = developer.getGithubLink()

    const data = {
      expectedSalary,
      experience,
      githubLink
    }

    return data
  })
}

// Not too good
function showManagerList(managers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary()
    const experience = developer.getExperience()
    const portfolio = developer.getMBAProjects()
    const data = {
      expectedSalary,
      experience,
      portfolio
    }

    return data
  })
}

// Good
function showEmployeesList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary()
    const experience = employee.getExperience()

    let portfolio = employee.getGithubLink()

    if (employee.type === 'manager') {
      portfolio = employee.getMBAProjects()
    }
    const data = {
      expectedSalary,
      experience,
      portfolio
    }

    return data
  })
}

// Don't use flags as function parameters
// Not too good
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`)
  } else {
    fs.create(name)
  }
}

// Good
// It's better to call 2 different functions instead of
// having the same function depending on a flag to take
// an action
function createAFile(name) {
  fs.create(name)
}

function createTempFile(name) {
  fs.create(`./temp/${name}`)
}
