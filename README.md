
# Node.js E-Commerce REST API

This project is a comprehensive e-commerce REST API built using **Node.js** and **MongoDB**. It includes essential e-commerce functionalities like user authentication, product management, order handling, and payment integration with **Stripe**. This API also uses **JWT** (JSON Web Token) for secure user authentication and **Mongoose** for interacting with the MongoDB database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User authentication and authorization (JWT)
- Product management (CRUD)
- User roles (admin, customer)
- Secure payment processing with Stripe
- Order creation and management
- Cart system
- User profile management
- Token-based authentication
- MongoDB database integration

## Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **Stripe** - Payment gateway integration

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
   cd ecommerce-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the MongoDB database and configure the environment variables.

4. Start the development server:

   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Usage

After starting the server, you can use tools like **Postman** or **cURL** to test the API endpoints.

## API Endpoints

### Auth

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user

### Products

- **GET** `/api/products` - Get all products
- **POST** `/api/products` - Add new product (Admin only)
- **PUT** `/api/products/:id` - Update product (Admin only)
- **DELETE** `/api/products/:id` - Delete product (Admin only)

### Orders

- **GET** `/api/orders` - Get all orders (Admin only)
- **POST** `/api/orders` - Create a new order
- **GET** `/api/orders/:id` - Get order details

### Cart

- **POST** `/api/cart` - Add item to cart
- **GET** `/api/cart` - Get cart items
- **DELETE** `/api/cart/:id` - Remove item from cart


