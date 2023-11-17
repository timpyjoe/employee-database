const inquirer = require("inquirer");
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment } = require("./functions");


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
      start();
    } else if (action === "View All Roles"){
      viewAllRoles();
    } else if (action === "View All Employees"){
      viewAllEmployees();
    } else if (action === "Add A Department"){
      addDepartment();
    } else if (action === "Add A Role"){

    } else if (action === "Add An Employee"){

    } else if (action === "Update Employee"){

    }
  })


};

start();