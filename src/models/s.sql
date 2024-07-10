

 CREATE TABLE IF NOT EXISTS users(
        id SERIAL primary key,
        username VARCHAR(32),
        fullname VARCHAR(32),
        phone_number VARCHAR(32),
        chatId INT 
);



CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    product_id INT REFERENCES products(id),
    status VARCHAR(10) CHECK (status IN ('canceled', 'pending', 'delivered')),
    ordered_at TIMESTAMP, -- bu maydon foydalanuvchi tomonidan kiritiladi
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32),
    price FLOAT,
    category VARCHAR(32),
    image_url VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) 