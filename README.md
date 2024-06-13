# Feedback Management System

This project is a simple feedback management system built with React for the frontend and Node.js for the backend.

## Frontend

The frontend of the application is built with React. It includes a form for users to submit their feedback and a list to display all the feedbacks.

We use `axios` for making HTTP requests to the backend. The `useEffect` hook is used to fetch the feedbacks from the backend when the component mounts and whenever a new feedback is submitted.

The state of the application is managed using the `useState` hook. We have state variables for the feedback form inputs, the list of feedbacks, and a boolean to control whether the feedback form is shown or not.

## Backend

The backend of the application is a simple Node.js server. It exposes two endpoints:

- `GET /all`: This endpoint returns all the feedbacks.
- `POST /submit`: This endpoint accepts a feedback and adds it to the list of feedbacks.

The feedbacks are stored in memory for simplicity. This means that the feedbacks will be lost when the server is restarted.

## Running the Project

To run the project, you need to start both the frontend and the backend.

### Frontend

Navigate to the frontend directory and run:

```bash
npm install
npm start
```

### Backend

Navigate to the backend directory and run:

```bash
npm install 
npm start
```
