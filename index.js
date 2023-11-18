const inquirer = require("inquirer");
const { db } = require("./config/connections");
// const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee } = require("./functions");

// Returns a table from the db of all departments
function viewAllDepartments() {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err){
      console.log(err);
    }
    console.log( `
    
    
    `)
    console.table(results)
    start();
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
  // prompts user for information about the new role
  inquirer.prompt(
    [{
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
      choices: async function(){
        const result = await db.promise().query("SELECT name FROM departments")
        const data = result[0]
        return data.map( item => ({ name: item.name, value: item.id }))
      }
    }]
  ).then((responses) => {
    const { newRole, newSalary, deptOwned } = responses;
  //adds the new role to the database
  db.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [newRole, newSalary, deptOwned], (err, results) => {
    if (err){
      console.log(err);
    } else {
      console.log("Role successfully added!");
    }
  })
})
}

function addEmployee() {
  //stores all current roles in an array
  let currentRoles = [];
  db.query("SELECT title FROM roles", (err, result) => {
    result.forEach((role => {
      currentRoles.push(role.title);
    }))
  })
  // prompts user for information about the new employee
  inquirer.prompt(
    {
      type: "input",
      message: "Please enter employee first name",
      name:  "firstName"
    },
    {
      type: "imput",
      message: "Please enter employee last name",
      name: "lastName"
    },
    {
      type: "list",
      message: "Which role does this employee have?",
      name: "newRole",
      choices: currentRoles
    },
    {
      type: "input",
      message: "Please enter their manager ID (leave blank for NULL)",
      name: "managerID"
    }
  ).then((responses) => {
    const { firstName, lastName, newRole, managerID } = responses;
  //adds the new employee to the database
  db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, (currentRoles[newRole]+1), managerID], (err, results) => {
    if (err){
      console.log(err);
    } else {
      console.log("Employee successfully added!");
    }
  })
})
}

// starts the program
function start() {
  //asks what their initial choice is
  inquirer.prompt(
    {
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update Employee"]
    }
  ).then((responses) => {
    //pulls the choice from "action" out as variable
    const { action } = responses
    //runs the corresponding function depending on what the initial choice was
    if (action === "View All Departments"){
      viewAllDepartments();
      // start();
    } else if (action === "View All Roles"){
      viewAllRoles();
    } else if (action === "View All Employees"){
      viewAllEmployees();
    } else if (action === "Add A Department"){
      addDepartment();
    } else if (action === "Add A Role"){
      addRole();
    } else if (action === "Add An Employee"){
      addEmployee();
    } else if (action === "Update Employee"){

    }
  })


};
start();
// module.exports = {startApp: start}