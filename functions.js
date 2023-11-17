const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'MYSQLPassword',
    database: 'employee_db'
  }
);




function viewAllDepartments() {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err){
      console.log(err);
    }
    console.table(results)
  });
}

function viewAllRoles() {
  db.query('SELECT * FROM roles', (err, results) => {
    if (err){
      console.log(err);
    }
    console.table(results)
  });
}

function viewAllEmployees() {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err){
      console.log(err);
    }
    console.table(results)
  });
}

module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees }