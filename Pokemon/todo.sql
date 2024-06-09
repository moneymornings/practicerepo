CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    todo varchar(50),
    completed boolean);


INSERT INTO todo(todo,completed)
VALUES 
    ('call mechanic','false'),
    ('call doctor','true'),
    ('pick up dog food', 'false');



