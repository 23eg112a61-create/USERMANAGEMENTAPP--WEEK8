Configure Environment Variables

Create a .env file inside the backend folder and add the MongoDB connection URL and port number.

Example:

PORT=4000
DB_URL=your_mongodb_connection_string

Running the Application
Run Backend Server

Navigate to backend folder and run:

npm start

The backend server will run on:

http://localhost:4000

Run Frontend Application

Navigate to Frontend folder and run:

npm run dev

The frontend application will run on:

http://localhost:5173

API Endpoints

The application provides the following API endpoints:

GET /user-api/users
Fetch all users
POST /user-api/user
Add a new user
PUT /user-api/user/:id
Update user details
DELETE /user-api/user/:id
Delete a user
Advantages of the Project
Easy user management
Simple and responsive UI
Fast API communication
Scalable MERN stack architecture
Efficient database handling using MongoDB
Future Enhancements
User authentication and authorization
Search and filter functionality
Pagination
Profile image upload
Dark mode support
