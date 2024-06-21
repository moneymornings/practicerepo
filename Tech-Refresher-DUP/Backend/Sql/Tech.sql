CREATE TABLE tech(
id SERIAL PRIMARY KEY,
question VARCHAR(500) NOT NULL,
answer VARCHAR(500) NOT NULL
);

CREATE TABLE login(
id SERIAL PRIMARY KEY,
email VARCHAR(100),
password VARCHAR(100)
);


INSERT INTO tech( question, answer)
VALUES 
    ('What does HTML stand for?','HyperText Markup Language'),
    ('Which tag is used to create a hyperlink?','<a>'),
    ('How do you create an object in JavaScript?','Using curly braces {} to enclose key-value pairs'),
    ('How do you create an unordered list?','Using the <ul> tag'),
    ('How do you install Express.js','npm i express'),
    ('How to start a server','npm start'),
    ('What attribute is used to specify the URL in an anchor tag?','href'),
    ('What does CSS stand for?','Cascading Style Sheets'),
    ('How do you apply a class to an HTML element?','Using the class attribute'),
    ('How do you create a flex container in CSS?','Using display: flex; on a parent element'),
    ('How can you make a background image cover the entire container?','By setting background-size: cover;'),
    ('What is React?','A JavaScript library for building user interfaces'),
    ('How do you pass data from a parent component to a child component in React?','Using props'),
    ('What command lists files in a directory on Unix-like systems?','LS'),
    ('What command is used to display the current directory?','PWD'),
    ('How can you copy files in the command line?','CP'),
    ('How do you move or rename a file in the command line?','MV'),
    ('What does SQL stand for?','Structured Query Language'),
    ('How do you select all columns from a table named users?','SELECT * FROM users;'),
    (' How can you update a record in a table?','UPDATE'),
    ('Which HTML element is used to define important text?',' <strong>'),
    ('How do you declare a JavaScript variable?','Using var, let, or const'),
    ('Which method is used to log a message to the console?','console.log()'),
    ('What does CD mean on Command line?','Change Directory');
    

