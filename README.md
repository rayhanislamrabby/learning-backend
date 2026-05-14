
<img width="1114" height="529" alt="Untitled" src="https://github.com/user-attachments/assets/661f71e0-fb14-49ee-ad8d-e81b87bd462f" />

Database Management System (DBMS) Interview Questions & Answers

This document serves as a technical reference for core Database Management System (DBMS) concepts commonly asked in interviews and used in backend development.

1. What is the difference between Primary Key and Foreign Key?
Answer:
Primary Key:

A Primary Key is a column (or set of columns) that uniquely identifies each row in a table.
It cannot contain NULL values and must always contain unique values.

Foreign Key:

A Foreign Key is a column that creates a relationship between two tables.
It references the Primary Key of another table to maintain referential integrity.

2. Why is normalization important?
Answer:

Normalization is important because it:

Reduces duplicate data
Improves data integrity
Prevents insertion, update, and deletion anomalies
Organizes database tables efficiently
3. What is a JOIN?
Answer:

A JOIN is used to combine rows from two or more tables based on a related column.

Types of JOIN:
INNER JOIN:

Returns only matching records from both tables.

LEFT JOIN:

Returns all records from the left table and matched records from the right table.

RIGHT JOIN:

Returns all records from the right table and matched records from the left table.

4. What is the difference between SQL and MongoDB?
Answer:
SQL (Relational Database):
Stores data in tables
Uses predefined schema
Supports complex joins
Follows ACID properties
MongoDB (NoSQL Database):
Stores data in JSON-like documents
Uses dynamic schema
Highly scalable
Best for unstructured data
5. What is a composite key?
Answer:

A composite key is a primary key made using two or more columns together to uniquely identify a row.

6. What is a weak entity?
Answer:

A weak entity is an entity that cannot be identified uniquely by its own attributes.
It depends on another strong entity through a foreign key.

7. Why do we use constraints?
Answer:

Constraints are rules applied to database columns to maintain data accuracy and integrity.

Common Constraints:
NOT NULL
UNIQUE
CHECK
DEFAULT
PRIMARY KEY
FOREIGN KEY
8. Explain many-to-many relationship.
Answer:

A many-to-many relationship occurs when multiple records in one table are associated with multiple records in another table.

This relationship is implemented using a Junction Table containing foreign keys from both tables.

9. What is the difference between Clustered and Non-Clustered Index?
Answer:
Clustered Index:
Stores data physically in sorted order
Only one clustered index allowed per table
Non-Clustered Index:
Stores index separately from actual data
Multiple non-clustered indexes can exist in a table
10. Explain Database Sharding and Partitioning.
Answer:
Partitioning:

Partitioning divides a large table into smaller parts inside a single database server.

Sharding:

Sharding distributes data across multiple database servers for horizontal scaling.

When to Use:
Use Partitioning for better performance within one server
Use Sharding when one server cannot handle large-scale data








# Database Concepts Reference Guide 📂

This document serves as a technical reference for core database management systems (DBMS) concepts.

---

### 1. What is the difference between Primary Key and Foreign Key?
**Answer:**
* **Primary Key:** A column (or set of columns) that uniquely identifies each row in a table. It must contain unique values and cannot contain NULLs. A table can have only one primary key.
* **Foreign Key:** A column that establishes a link between data in two tables. It refers to the Primary Key of another table, ensuring referential integrity.

### 2. Why is normalization important?
**Answer:**
* **Reduces Redundancy:** It eliminates unnecessary duplicate data across tables.
* **Improves Data Integrity:** It ensures that data dependencies make sense and that data is logically stored.
* **Prevents Anomalies:** It protects the database from issues during insertion, updating, and deletion of records.

### 3. What is a JOIN?
**Answer:**
* A JOIN is an SQL operation used to combine rows from two or more tables based on a related column between them.
* **Inner Join:** Returns records with matching values in both tables.
* **Left Join:** Returns all records from the left table and matched records from the right.
* **Right Join:** Returns all records from the right table and matched records from the left.

### 4. Difference between SQL and MongoDB?
**Answer:**
* **SQL (Relational):** Data is stored in tables with rows and columns. It uses a predefined schema and is optimized for complex join operations and ACID compliance.
* **MongoDB (NoSQL):** Data is stored in flexible, JSON-like documents. It uses a dynamic schema, making it highly scalable and ideal for unstructured data.

### 5. What is a composite key?
**Answer:**
* A composite key is a primary key that consists of two or more columns. It is used when a single column is not enough to uniquely identify a record.

### 6. What is a weak entity?
**Answer:**
* A weak entity is an entity that cannot be uniquely identified by its own attributes alone. It depends on a "strong" entity (owner entity) via a foreign key for its existence.

### 7. Why do we use constraints?
**Answer:**
* Constraints are rules enforced on data columns. They are used to maintain the accuracy, reliability, and integrity of the data by preventing invalid data from being entered.
* Examples include: `NOT NULL`, `UNIQUE`, `CHECK`, and `DEFAULT`.

### 8. Explain many-to-many relationship.
**Answer:**
* A many-to-many relationship occurs when multiple records in Table A are associated with multiple records in Table B.
* In database design, this is implemented using a **Junction Table** (or Associative Table) that contains foreign keys from both related tables.

### 9. What is the difference between Clustered and Non-Clustered Index?
**Answer:**
* **Clustered Index:** Defines the physical order in which data is stored in the table. There can be only one clustered index per table (usually the Primary Key).
* **Non-Clustered Index:** Creates a separate structure from the data rows, containing a pointer to the physical data. A table can have multiple non-clustered indexes.

### 10. Explain Database Sharding and Partitioning. When would you use each?
**Answer:**
* **Partitioning:** The process of dividing a large table into smaller, more manageable pieces within a single database server. Use this to improve query performance and maintenance on a single machine.
* **Sharding:** A horizontal scaling technique where data is distributed across multiple separate database servers. Use this when the dataset is too large to fit on or be processed by a single server.

---
*Reference for Interview Preparation and Backend Development*
