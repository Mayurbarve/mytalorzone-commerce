# MERN Stack eCommerce Website Project

Project Live Link: https://mytalorzone-frontend-lac.vercel.app/

![image](https://github.com/user-attachments/assets/6b6815a1-4b41-44a3-8242-b8f3fdc53ce8)


## Overview
In this project tutorial, you will learn to build and deploy a fully functional eCommerce website using the MERN stack:
- **Frontend**: React.js
- **Backend**: Node.js and Express.js
- **Database**: MongoDB
- **Deployment**: Vercel

This eCommerce website allows users to:
- Explore, filter, and sort products
- Select product variants (e.g., size) and add them to the cart
- Place orders by providing delivery details
- Pay using multiple payment methods, including:
  - Cash on Delivery
  - Online payment through **Stripe** and **Razorpay**

The project also includes an admin dashboard for:
- Uploading, deleting, and managing products
- Monitoring user orders

## Features
### User Features
- **Product Exploration**: Browse and search for products.
- **Filtering and Sorting**: Filter products based on criteria and sort them as needed.
- **Cart Management**: Add products to the cart with selected variants.
- **Order Placement**: Place orders by providing delivery details.
- **Multiple Payment Options**: Pay via Cash on Delivery or online payment gateways.

### Admin Features
- **Product Management**: Add, update, and delete products in the store.
- **Order Management**: View and manage customer orders.
- **Admin Authentication**: Secure access to the admin dashboard.

## Project Structure
### Backend
- Developed using **Node.js** and **Express.js**.
- Stores data for products, users, and orders in a **MongoDB** database.
- Implements authentication for users and admin using secure methods.

### Frontend
- Built with **React.js** for a modern and responsive user interface.
- Includes various pages such as Home, Product, Cart, Order, About, and Contact.

### Payment Integration
- Integrated **Stripe** and **Razorpay** for secure online payments.

### Deployment
- The project is deployed on **Vercel** for easy access and scalability.

## Vercel Configuration
Refer to the configuration details here: [Vercel JSON Config](https://github.com/GreatStackDev/note...)

## Prerequisites
- **Node.js** (version 14 or above)
- **MongoDB**
- **React.js**
- **Stripe** and **Razorpay** accounts for payment gateway integration
- **Vercel** account for deployment

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-mern-project
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```
4. Configure environment variables for MongoDB, Stripe, Razorpay, and Vercel.
5. Run the application:
   ```bash
   npm start
   ```
6. Access the website on `http://localhost:3000`.

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

## License
This project is licensed under the MIT License.

---
Happy Coding! 🎉
