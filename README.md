
# CRUD Scratch MongoDB

This project is a basic CRUD (Create, Read, Update, Delete) application built with Node.js and Express, using MongoDB as the database. It allows you to create, read, update, and delete user data.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/A-Tetarwal/Mil-Lo-Na.git
   ```

2. Navigate to the project directory:
   ```sh
   cd Mil-Lo-Na
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the MongoDB server:
   ```sh
   mongod
   ```

5. Run the application:
   ```sh
   node app.js
   ```

## API Endpoints

### Home

- **URL**: `/`
- **Method**: `GET`
- **Description**: Displays a button to create a user.

### Create User

- **URL**: `/create`
- **Method**: `GET`
- **Description**: Creates a user with hardcoded data and displays the created user details.

### Read All Users

- **URL**: `/read`
- **Method**: `GET`
- **Description**: Reads all users from the database and displays their names.

### Update User

- **URL**: `/update`
- **Method**: `GET`
- **Description**: Updates the user with a specific username and displays the updated user details.

### Delete User

- **URL**: `/delete`
- **Method**: `GET`
- **Description**: Deletes the user with a specific username and confirms the deletion.

## File Structure(Main)

```go
.
├── app.js
├── usermodel.js
├── package.json
└── README.md
```

- **app.js**: The main file that contains the Express server and route handlers.
- **usermodel.js**: The Mongoose model for the user schema.
- **package.json**: The project configuration file.
- **README.md**: The project documentation file.

## Usage

1. Start the server:
   ```sh
   node app.js
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Use the buttons on the web pages to create, read, update, and delete users.

## License

This project is licensed under the MIT License.
```

This README provides a comprehensive guide for setting up and using your CRUD application, including the necessary prerequisites, installation steps, and descriptions of the API endpoints.