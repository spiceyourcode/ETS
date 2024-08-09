# Expense Tracker Application

## Overview
The Expense Tracker Application is a web-based tool to manage personal expenses. It includes functionalities for user authentication, adding transactions, viewing expenses, and optionally editing or deleting expenses. The application uses Node.js, Express, and MySQL for the backend and HTML, CSS, and JavaScript for the frontend.

## Project Setup
1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure the MySQL database**:
    - Create a database named `expense_tracker`.
    - Use the following SQL script to create the necessary tables:
    ```sql
    CREATE TABLE Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE Expenses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        name VARCHAR(255),
        amount DECIMAL(10, 2),
        date DATE,
        category VARCHAR(255),
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );
    ```

4. **Create a `.env` file** in the root directory and add your database configuration:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=expense_tracker
    ```

## Dependencies
The project uses the following dependencies:
- `express`: Web framework for Node.js
- `mysql`: MySQL client for Node.js
- `body-parser`: Middleware to parse request bodies
- `bcryptjs`: Library for hashing passwords

Install these dependencies using:
```bash
npm install express mysql body-parser bcryptjs
