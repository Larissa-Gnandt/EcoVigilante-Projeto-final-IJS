const User = require("./user");
const Complaint = require("./complaint");

class Database {
  #users;
  #complaints;

  constructor() {
    this.#users = [];
    this.#complaints = [];
  }

  get users() {
    return this.#users;
  }

  get complaints() {
    return this.#complaints;
  }

  createUser(name, email, document, phone) {
    const user = new User(name, email, document, phone);
    this.#users.push(user);
    return user;
  }

  createComplaint(title, description, location) {
    const complaint = new Complaint(title, description, location);
    this.#complaints.push(complaint);
    return complaint;
  }
}

module.exports = Database;
