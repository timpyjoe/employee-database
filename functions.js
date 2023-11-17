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

function addRole() {
  //stores all current departments in an array
  let currentDepts = [];
  db.query("SELECT name FROM departments", (err, result) => {
    result.forEach((department => {
      currentDepts.push(department.title);
    }))
  })
  // prompts user for information about the new role
  inquirer.prompt(
    {
      type: "input",
      message: "Please enter a new role",
      name:  "newRole"
    },
    {
      type: "imput",
      message: "Please enter a salary for the role",
      name: "newSalary"
    },
    {
      type: "list",
      message: "Which department does the role belong to?",
      name: "deptOwned",
      choices: currentDepts
    }
  ).then((responses) => {
    const { newDept, newSalary, deptOwned } = responses;
  //adds the new role to the database
  db.query("INSERT INTO roles (title, salary, department_id) VALUES (?)", [newDept, newSalary, (currentDepts[deptOwned]+1)], (err, results) => {
    if (err){
      console.log(err);
    } else {
      console.log("Role successfully added!");
    }
  })
})
}
module.exports = {viewAllDepartments, 
                  viewAllRoles, 
                  viewAllEmployees, 
                  addDepartment,
                  addRole }