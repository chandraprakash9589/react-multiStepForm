# Multi-Step Form with React, Redux Toolkit, and React Router

This project implements a multi-step form with three steps using React primitives, Redux Toolkit for state management, and React Router for navigation.

## Project Structure

- **src/components/**: Contains individual step components.
- **src/redux/**: Contains Redux slice for managing form state.
- **src/App.js**: Defines routes and renders step components based on the current route.
- **src/index.js**: Entry point of the application.
- **src/redux/store.js**: Creates and configures the Redux store.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open the browser and navigate to `http://localhost:3000` to view the application.

## How to Use

1. Start the form by entering your name, surname, and date of birth.
2. Proceed to the next step to choose your favorite products from the available list.
3. In the final step, review your choices and submit the form.
4. Your choices will be logged in the console.

## Technologies Used

- React
- Redux Toolkit
- React Router

## Credits

- [DummyJSON](https://dummyjson.com/products) for providing the products JSON API.
