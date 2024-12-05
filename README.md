E-commerce Web Application
Description:
This repository contains a small e-commerce web application built with Angular on the frontend and Node.js (with PostgreSQL by default) on the backend. The app includes Swagger API documentation for ease of use, and integrates with third-party APIs for payment saleProducts,
The flexible backend architecture supports easy switching between different database types (e.g., PostgreSQL, MySQL, MongoDB), making the project highly adaptable to different environments. The app simulates a real-world e-commerce platform where users can browse products, add items to their cart, and complete orders, with the option to test API endpoints directly through Swagger.

///////////////////////
Features
Frontend: Built with Angular, the frontend offers a dynamic shopping experience with custom components, routing, and responsive design.
Backend: The backend is built with Node.js and Express.js, offering a clean RESTful API for managing products, users, and orders.
Database: Integrated with PostgreSQL to store application data, with the ability to switch to other databases easily based on project needs.
Swagger Integration: The backend API is documented with Swagger, making it easy to understand and test the API endpoints.
Third-Party API Integration: The application integrates with a third-party API for payment processing and shipping, allowing the project to simulate real-world e-commerce workflows.
Customizable Database Structure: The backend architecture is flexible and can be easily adapted to work with different database types (PostgreSQL, MySQL, etc.).

///////////////////////

Installation:

# Prerequisites
Node.js and npm installed on your machine.
PostgreSQL installed and running (or any other supported database).

Steps:

Clone the repository: git clone git@github.com:SajaFaraj11/Revest.git
enter key : revest
bash
Copy code
git clone  
cd e-commerce-project
# Frontend Setup (Angular):

Navigate to the frontend directory and install dependencies:
bash
Copy code
cd frontend
npm install

To start the Angular development server:
bash
Copy code
ng serve
The frontend will be available at http://localhost:4200.


# Sales Products Microservice (Nest Js with PostgreSQL)
Navigate to the micro-service directory and install dependencies: 
bash
Copy code
cd micro-service
npm install
bash npm run build
npm run start

# Backend Setup (Node.js with PostgreSQL):

Navigate to the backend directory and install dependencies:
bash
Copy code
cd backend
npm install
bash
npm run build
npm run start

PostgreSQL Setup:
Make sure PostgreSQL is installed and running.
Update the config.js file with your PostgreSQL connection details (host, username, password, and database name).

To create the database, you can use a tool like pgAdmin or connect via the command line to create the required schema.
Run the migrations to set up the database schema:
bash
Copy code
npm run migrate
Start the Node.js server:

bash
Copy code
node server.js
The backend will be available at http://localhost: 3000.

# Swagger Documentation:
Backend  Swagger 
The API documentation is available at http://localhost: 3000/api-docs once the backend server is running. Swagger provides an interactive interface to test API endpoints.

Micro-service  Swagger 
The API documentation is available at http://localhost: 3001/api  once the Micro-service server is running. Swagger provides an interactive interface to test API endpoints.

The application should now be running with the frontend accessible at http://localhost:4200 and the backend at http://localhost: 3000.
