# Notes App

A simple web application built using Node.js, Express, and MongoDB for creating, viewing, editing or updating and deleting notes. The app features a clean, user-friendly interface where users can manage their notes efficiently.

## Features

- View all notes in a list.
- Create new notes with a title and content.
- Edit existing notes.
- Delete notes.
- Error handling for common issues such as missing data or failed database operations.
- Utilizes `EJS` for templating and `method-override` for handling PUT and DELETE requests in forms.

## Installation

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Node.js (version 14.x or higher)
- MongoDB (Ensure MongoDB is installed and running locally or use a remote database)

### Clone the repository


- git clone https://github.com/binay-das/notes-app-nodejs.git
- cd notes-app

### Install dependencies
Run the following command to install all necessary packages:

- npm install

### Set up MongoDB

Ensure MongoDB is installed and running on your machine. You can change the database connection string in the index.js file if needed.

Alternatively, you can configure a remote MongoDB connection string if using MongoDB Atlas.

### Start the server

npm start


## Usage

- Home Page: Visit the home page by navigating to http://localhost:8080/.
- View All Notes: To view all existing notes, visit http://localhost:8080/notes/all-notes.
- Add a New Note: Click on "Add Note" and fill in the title and content or visit http://localhost:8080/notes/add.
- Edit a Note: From the list of notes, click on the edit button for any note to modify it.
- Delete a Note: Click the delete button next to a note to remove it from the database.


## Dependencies
- express: Web framework for Node.js.
- mongoose: MongoDB object modeling tool.
- ejs: Embedded JavaScript templates for rendering views.
- method-override: Allows form methods like PUT and DELETE in Express.
- path: Utility module for handling and transforming file paths.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have suggestions for improvements or find a bug.
