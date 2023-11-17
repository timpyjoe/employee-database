const { db } = require("./config/connections");


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

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees }