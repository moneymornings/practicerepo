DATABASES

Entering a postgres database 
type psql postgres 
postgres=# (will populate) - similar to API localhost:/3000
You are now Inside of the database 


Postgres SYNTAX
postgres=#

Use backlash instead of forward slash 
\dt 
Examples
postgres=# \dt - shows a list of all tables in database

To look inside of the tables 
Use SELECT_FROM + name of table  - gives you the info inside of the table 

Control D exits you out of the table 

Table also means relation

Schema - format/definition of the data 

Using GET ( how to read/receive things from a table)
this will give you the contents of the table 

To Read the table 

to return ALL columns from table 
SELECT * FROM + table name 


to return ONE row with with a specific id use SELECT * FROM + name of table + WHERE + id number 
Ex: SELECT * FROM  nba_players WHERE id = 7;

to read/return SPECIFIC columns with commas, then type column name after SELECT
Ex: SELECT first_name, last_name, FROM nba_players; 



USING POST (how to add things to a table )

To add something to a database
INSERT INTO  + name of table + list your columns in parentheses
VALUES ( whatever you type in first will begin the first column, etc…) 

use _ instead of spaces, use booleans for true or false  - all in parentheses 
Use single quotes for your strings, and Must end with semicolon


Ex: INSERT INTO cookies(id, flavor, gluten, calories, in_stock, createdAt, updatedAt) 
VALUES (1, “chocolate_chip”, true, 550, 500, ’2024 -04-08, 00:00:00’, ’00:00:00’);


When inserting time value  you must use the ’year month date and time 00:00:00’ format and timezone  in a string 
To specify capitalization you must add quotations around the word use “ “ double quotes




Database - holds multiple tables like a hard drive 

Table holds one type of data, 





Keyword for creating table 

CREATE TABLE


CREATE TABLE [IF NOT EXISTS] table_name (
   column1 datatype(length) column_constraint,
   column2 datatype(length) column_constraint,
   ...
   table_constraints


SERIAL - data type will automatically increase the value of the number ( increments by 1) 

Column Constraints = 

PRIMARY KEY - ALL COMUNS NEED TO BE UNIQUE - NO KEYS CAN BE REPLICATED

VARCHAR = variable character - to insert multiple characters(#) # is maximum number of characters  (character limit)

Text is  also a datatype 

Integer = number in postgres 


postgres=# CREATE TABLE pokemon(
postgres(# id SERIAL PRIMARY KEY,
postgres(# name varchar(50),
postgres(# hp integer,
postgres(# type varchar(25),
postgres(# region varchar(25));

No commas between for creating table



CREATING Multiple rows 

Insert each row, comma in between each 

INSERT INTO todo(todo, completed)
VALUES (‘call mechanic’ false), (‘call doctor’, ‘true’), (‘pickup dog food’, ‘false’);


To get rid of a table 

DROP TABLE + name of table 





Seeding data 



Seeding data 

Create table in javascript using same schema in sql 


Then 

Go to script  and update script to match your path to your file 

"scripts": 
    "start": "nodemon server.js",
    "seed": "psql -U postgres -d postgres -a -f /Users/corcoding/npm/todo.sql"

If need to provide a password - "scripts": 
    "start": "nodemon server.js",
    "seed": “PGPASSWORD=goodworks17 psql -U postgres -d postgres -a -f /Users/corcoding/npm/todo.sql"





Then 
Connect to database using one of the following tools

Pg promise (npm library)





























