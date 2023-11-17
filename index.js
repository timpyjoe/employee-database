const inquirer = require("inquirer");
const mysql = require("mysql2");


const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'MYSQLPassword',
    database: 'employee_db'
  },
  console.log(`Connected to the classlist_db database.`)
);