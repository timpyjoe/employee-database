const { db } = require("./config/connections");
const inquirer = require("inquirer");


// Returns a table from the db of all departments
function viewAllDepartments() {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err){
      console.log(err);
    }
    console.table(results)
  });
}

// Returns a table from the db of all roles
function viewAllRoles() {
  db.query('SELECT * FROM roles', (err, results) => {
    if (err){
      console.log(err);
    }
    console.table(results)
  });
}

// Returns a table from the db of all employees
function viewAllEmployees() {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err){
      console.log(err);
    }
    console.table(results)
  });
}

function addDepartment() {
  inquirer.prompt(
    {
      type: "input",
      message: "Please enter a new department",
      name:  "newDept"
    }
  ).then((responses) => {
    const { newDept } = responses;
  db.query("INSERT INTO departments (name) VALUES (?)", newDept, (err, results) => {
    if (err){
      console.log(err);
    } else {
      console.log("Department successfully added!");
    }
  })
})
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment }