# Pic-Reach

Pic-Reach is a MERN (MongoDB, Express.js, React.js, Node.js) application designed to manage and store contact information of individuals, allowing users to perform CRUD (Create, Read, Update, Delete) operations.

## Features

- **User Management**: Create, Read, Update, and Delete contact information including name, address, phone number, and image.
- **Image Upload**: Allows users to upload images along with contact information.
- **React Frontend**: Utilizes React for a dynamic and interactive user interface.
- **Express Backend**: Handles data routing and interacts with MongoDB via Mongoose.

## Installation

1. Clone this repository.
2. Install dependencies for both the backend and frontend:
    ```bash
    # Navigate to the backend directory
    cd backend
    npm install
    
    # Navigate to the frontend directory
    cd ../frontend
    npm install
    ```
3. Set up MongoDB: Ensure MongoDB is installed and running locally or provide a MongoDB Atlas URI in the backend `.env` file.

## Usage

1. Run the backend server:
    ```bash
    # Inside the backend directory
    npm start
    ```
   The server should start at `http://localhost:5555`.

2. Start the frontend application:
    ```bash
    # Inside the frontend directory
    npm start
    ```
   The React app should start at `http://localhost:3000`.

3. Access the application by navigating to `http://localhost:3000` in your browser.

## Backend Routes

The backend API routes for interacting with user data are as follows:

- `GET /users`: Retrieves all users' data.
- `GET /users/:id`: Fetches a single user's data by ID.
- `PUT /users/:id`: Updates an existing user's information.
- `DELETE /users/:id`: Deletes a user and their associated image.

## Frontend Routes

The React frontend routes are:

- `/`: Home page displaying the list of users.
- `/users/edit/:id`: Page to edit a specific user's information.
- `/users/create`: Page to add a new user.
- `/users/delete/:id`: Page to delete a specific user.

## Technologies Used

- **Frontend**: React, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

