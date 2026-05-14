-- Create Table

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    mobile VARCHAR(11),
    age INT
);

-- Insert Data

INSERT INTO customers (name, mobile, age)
VALUES (' Rabby', '01315110644', 25);

INSERT INTO customers (name, mobile, age)
VALUES ('Nibir ', '01315110644', 25);

-- Show All Data

SELECT * FROM customers;

-- Show Specific Columns

SELECT name, age FROM customers;

-- Update Data

UPDATE customers
SET age = 35
WHERE id = 2;

-- Delete Data

DELETE FROM customers
WHERE id = 1;

-- Add New Column

ALTER TABLE customers
ADD COLUMN email VARCHAR(50);

-- Filter Logic

SELECT * FROM customers
WHERE age > 25;

-- Order By

SELECT * FROM customers
ORDER BY age DESC;

-- Limit

SELECT * FROM customers
LIMIT 2;

-- Between

SELECT * FROM customers
WHERE age BETWEEN 20 AND 40;

-- IN Operator

SELECT * FROM customers
WHERE age IN (24, 35);

-- Count

SELECT COUNT(*) FROM customers;

-- Average

SELECT AVG(age) FROM customers;