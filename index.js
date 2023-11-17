const inquirer = require("inquirer");
const mysql = require("mysql2");
const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require("./functions");


const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'MYSQLPassword',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// starts the program
function start() {
  //asks what their initial choice is
  inquirer.prompt(
    {
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: ["View Departments Database", "View Roles Database", "View Employees Database"]
    }
  ).then((responses) => {
    //pulls the choice from "action" out as variable
    const { action } = responses
    if (action === "View Departments Database"){
      viewAllDepartments();
      start();
    } else if (action === "View Roles Database"){
      viewAllRoles();
    } else if (action === "View Employees Database"){
      viewAllEmployees();
      
    }
    // start();
  })


};

start();