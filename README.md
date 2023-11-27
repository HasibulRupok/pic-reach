# Pic-Reach

Pic-Reach is a MERN stack application designed to manage and store contact information, including names, addresses, phone numbers, and images of individuals. It provides functionalities to create, read, update, and delete (CRUD) contacts through specific API endpoints.

## Features

- **View Contacts:** Retrieve all contacts or specific contact details.
- **Add Contact:** Create new contact information with names, addresses, phone numbers, and images.
- **Update Contact:** Modify existing contact details.
- **Delete Contact:** Remove contacts and associated images from the database and server.

## Technologies Used

- **MongoDB:** Database for storing contact information.
- **Express.js:** Backend framework for API handling.
- **React.js:** Frontend library for the user interface.
- **Node.js:** Runtime environment for the backend.

## Backend Setup

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `npm install`
3. Set up environment variables (if needed).
4. Run the backend server: `npm start`

## API Routes

### Users Routes

- **GET /users:** Retrieve all contacts.
- **GET /users/:id:** Get details of a specific contact.
- **POST /users:** Add a new contact.
- **PUT /users/:id:** Update details of a contact.
- **DELETE /users/:id:** Delete a contact and associated image.

## Frontend (Not Provided)

The repository does not include the frontend implementation. You will need to integrate this backend with a frontend application for a complete user experience.

## Folder Structure

