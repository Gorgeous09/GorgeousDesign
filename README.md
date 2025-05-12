# Gorgeous Design Backend

This is the backend prototype for the Gordeous Design project, built with Node.js and Express.

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── middleware/     # Custom middleware
└── server.js       # Main application file
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/gordeousdesign
   NODE_ENV=development
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot-reload
- `npm test`: Run tests

## API Endpoints

- `GET /`: Welcome message
- More endpoints will be added as development progresses

## Dependencies

- Express.js: Web framework
- Mongoose: MongoDB ODM
- CORS: Cross-origin resource sharing
- Helmet: Security headers
- Morgan: HTTP request logger
- Dotenv: Environment variables 