const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'jdbc:mysql://localhost:3306',
    user: 'root',
    password: 'rps@123',
    database: 'loandb'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }

    // Insert data into the 'employee' table
    insertEmployeeData();

    // Insert data into the 'item' table
    insertItemData();

    // Insert data into the 'employee_issue_details' table
    insertEmployeeIssueDetailsData();

    // Insert data into the 'employee_card_details' table
    insertEmployeeCardDetailsData();

    // Insert data into the 'loan' table
    insertLoanData();

    // Close the database connection
    connection.end();
});

// Function to generate a random date in the format 'YYYY-MM-DD'
function randomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();
    const randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime).toISOString().slice(0, 10);
}

// Function to insert dummy data into the 'employee' table
function insertEmployeeData() {
    for (let i = 1; i <= 10; i++) {  // Insert 10 employees as an example
        const employee = {
            dateofbirth: randomDate(new Date('1960-01-01'), new Date('2000-12-31')),
            dateofjoining: randomDate(new Date('2000-01-01'), new Date('2023-09-01')),
            department: ['HR', 'IT', 'Finance', 'Sales'][Math.floor(Math.random() * 4)],
            designation: ['Manager', 'Engineer', 'Analyst'][Math.floor(Math.random() * 3)],
            employeename: `Employee ${i}`,
            gender: ['M', 'F'][Math.floor(Math.random() * 2)],
            password: 'password'  // You can generate random passwords if needed
        };

        connection.query('INSERT INTO employee SET ?', employee, (err, results) => {
            if (err) throw err;
            console.log(`Inserted employee with ID ${results.insertId}`);
        });
    }
}

// Define functions to insert data into the 'item', 'employee_issue_details', 'employee_card_details', and 'loan' tables in a similar manner.
// Define functions to insert data into the 'item' table
function insertItemData() {
    for (let i = 1; i <= 10; i++) {  // Insert 10 items as an example
        const item = {
            item_category: ['Electronics', 'Clothing', 'Furniture'][Math.floor(Math.random() * 3)],
            item_description: `Item ${i} Description`,
            item_make: `Item ${i} Make`,
            item_status: ['A', 'I'][Math.floor(Math.random() * 2)],
            item_valuation: Math.floor(Math.random() * 901) + 100  // Random valuation between 100 and 1000
        };

        connection.query('INSERT INTO item SET ?', item, (err, results) => {
            if (err) throw err;
            console.log(`Inserted item with ID ${results.insertId}`);
        });
    }
}

// Function to insert dummy data into the 'employee_issue_details' table
function insertEmployeeIssueDetailsData() {
    for (let i = 1; i <= 10; i++) {  // Insert 10 issue details as an example
        const issue = {
            issue_date: randomDate(new Date('2020-01-01'), new Date('2023-09-01')),
            employee_id: Math.floor(Math.random() * 10) + 1,  // Assuming 10 employees in the 'employee' table
            item_id: Math.floor(Math.random() * 10) + 1  // Assuming 10 items in the 'item' table
        };

        connection.query('INSERT INTO employee_issue_details SET ?', issue, (err, results) => {
            if (err) throw err;
            console.log(`Inserted issue with ID ${results.insertId}`);
        });
    }
}

// Function to insert dummy data into the 'employee_card_details' table
function insertEmployeeCardDetailsData() {
    for (let i = 1; i <= 10; i++) {  // Insert 10 card details as an example
        const card = {
            card_issue_date: randomDate(new Date('2020-01-01'), new Date('2023-09-01')),
            employee_id: Math.floor(Math.random() * 10) + 1,  // Assuming 10 employees in the 'employee' table
            loan_id: Math.floor(Math.random() * 10) + 1  // Assuming 10 loans in the 'loan' table
        };

        connection.query('INSERT INTO employee_card_details SET ?', card, (err, results) => {
            if (err) throw err;
            console.log(`Inserted card details with ID ${results.insertId}`);
        });
    }
}

// Function to insert dummy data into the 'loan' table
function insertLoanData() {
    for (let i = 1; i <= 10; i++) {  // Insert 10 loans as an example
        const loan = {
            duration: Math.floor(Math.random() * 49) + 12,  // Loan duration in months between 12 and 60
            card_issue_date: randomDate(new Date('2020-01-01'), new Date('2023-09-01')),
            loan_type: ['Personal Loan', 'Home Loan', 'Car Loan'][Math.floor(Math.random() * 3)]
        };

        connection.query('INSERT INTO loan SET ?', loan, (err, results) => {
            if (err) throw err;
            console.log(`Inserted loan with ID ${results.insertId}`);
        });
    }
}
