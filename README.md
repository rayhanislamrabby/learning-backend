










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
