// TODO: Write code to define and export the Employee class

// ID
// Name
// EMail

class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
}

module.exports = Employee;
