CREATE TABLE testproducts(
   id  SERIAL PRIMARY KEY, 
   product_name VARCHAR(100) UNIQUE NOT NULL,
   category_id INT
);



CREATE TABLE categories(
  id  SERIAL PRIMARY KEY, 
  category_name VARCHAR(60),
  description VARCHAR(500)
);


INSERT INTO testproducts(product_name, category_id)
VALUES
      ('Johns Fruit Cake',3),
      ('Marys Healthy Mix', 9),
      ('Peters Scary Stuff', 10),
      ('Jims Secret Recipe',11),
      ('Elisabeths Best Apples', 12),
      ('Janes Favorite Cheese', 4),
      ('Billys Home Made Pizza', 13),
      ('Ellas Special Salmon', 8),
      ('Roberts Rich Spaghetti', 5),
      ('Mias Popular Ice', 14);


INSERT INTO categories(category_id, category_name, description)
VALUES
    ('Beverages', 'Soft drinks, Coffees, Tea, Beer, Ales'),
    ('Condiments', 'Sweet and Savory Sauce, Relishes, Spread, Seasonings'),
    ('Confections', 'Desserts, Candies, Sweet Breads'),
    ('Dairy Products', 'Cheeses'),
    ('Grains/Cereals', 'Breads, Crackers, Pasta, and Cereal'),
    ('Meat/Poultry', 'Prepared Meats'),
    ('Produce ', 'Dried fruit, Bean Curd'),
    ('Seafood ', 'Seaweed, Fish');


 
SELECT testproducts_id, product_name, category_name
FROM testproducts
INNER JOIN categories ON testproducts.category_id = categories.category_id;




