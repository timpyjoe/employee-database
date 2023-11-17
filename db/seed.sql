USE employee_db;

INSERT INTO departments (name)
VALUES  ("Sales"),
		    ("Recieving"),
        ("Marketing"),
        ("Legal");


INSERT INTO roles(title, salary, department_id)
VALUES  ("Sales Lead", 80000, 1),
        ("Marketing Lead", 76000, 3),
        ("Merchandiser", 47000, 2),
        ("Human Resources", 68000, 4),
        ("Public Relations", 68000, 4),
        ("Ad Designer", 55000, 3);
        
        
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES  ("Shane", "Simmons", 1, NULL),
		    ("Tyler", "Robbins", 2, NULL),
        ("Kris", "Anderson", 5, NULL),
        ("Mary", "Birch", 6, 2),
        ("Jackson", "Woodrow", 4, NULL),
        ("Charlie", "Hanson", 3, 1),
        ("Elizabeth", "Champman", 3, 1);