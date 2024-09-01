# Notes App

A simple notes-taking application built with Node.js, Express, and MongoDB. This app allows users to create, read, update, and delete notes.

## Features

- Create a new note
- View all notes
- View a single note by ID
- Update a note by ID
- Delete a note by ID

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/get-npm) (v6.x or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (installed and running locally)

## Setup

Follow these steps to set up and run the project locally:

### 1.  Install dependencies

npm install

### 2.  Set up environment variables

Create a .env file in the root directory of the project and add your MongoDB connection string:
MONGO_URI=mongodb://localhost:27017/admin

### 3. Start the MongoDB server
Ensure your MongoDB server is running. You can start it with:
mongod

### 4. Start the application
npm start

The server should now be running on http://localhost:3000.

## API Endpoints
The following API endpoints are available:

GET /notes: Retrieve all notes
GET /notes/:id: Retrieve a single note by ID
POST /notes: Create a new note
PUT /notes/:id: Update a note by ID
DELETE /notes/:id: Delete a note by ID

## Testing the API

You can test the API using tools like Postman.

## Project Structure
├── config/
│   └── db.js            # MongoDB connection setup
├── models/
│   └── Notes.js         # Mongoose model for notes
├── public/
│   ├── index.html       # Frontend HTML (if applicable)
│   ├── main.js          # Frontend JavaScript (if applicable)
│   └── styles.css       # Frontend CSS (if applicable)
├── routes/
│   └── notes.js         # Routes for notes API
├── .env                 # Environment variables
├── index.js             # Entry point of the application
├── package.json         # Project metadata and npm scripts
└── README.md            # Project documentation


## Acknowledgements
Express.js
Mongoose
MongoDB

### Instructions:

This `README.md` provides clear guidance for setting up and running your notes app locally, including prerequisites, setup steps, API documentation, and project structure.

  
