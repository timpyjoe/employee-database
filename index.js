const inquirer = require("inquirer");
const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require("./functions");


// starts the program
function start() {
  //asks what their initial choice is
  inquirer.prompt(
    {
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: ["View All Departments", "View All Roles", "View All Employees"]
    }
  ).then((responses) => {
    //pulls the choice from "action" out as variable
    const { action } = responses
    if (action === "View All Departments"){
      viewAllDepartments();
      start();
    } else if (action === "View All Roles"){
      viewAllRoles();
    } else if (action === "View All Employees"){
      viewAllEmployees();

    }
    // start();
  })


};

start();