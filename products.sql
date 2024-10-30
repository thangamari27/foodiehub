CREATE DATABASE foodiehub;

USE foodiehub;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    image_url VARCHAR(255)
);

-- Insert sample data
INSERT INTO products (name, description, price, image_url) VALUES 
('Artisanal Cheese', 'Creamy artisanal cheese perfect for pairing with wine.', 15.99, 'https://via.placeholder.com/100'),
('Truffle Oil', 'Rich and luxurious truffle oil.', 12.99, 'https://via.placeholder.com/100'),
('Organic Spices', 'A curated selection of organic spices.', 10.99, 'https://via.placeholder.com/100');
