# Car-Dealer-App

## Description

This project is a Car-Dealer-App built with Next.js, Tailwind CSS, and
TypeScript. It uses the NHTSA API to fetch information about vehicle makes and
models. The project features a carousel of slides and styled components using
Tailwind CSS.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site
  generation.
- **React**: A library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Tailwind CSS**: A utility-first CSS framework.
- **@heroicons/react**: A set of icons for React.
- **@monaco-editor/react**: A React component for the Monaco editor.
- **framer-motion**: A library for animations in React.

## Installation

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   ```

bash Copy code git clone <REPOSITORY_URL> Navigate to the project directory:

bash Copy code cd landing-page Install the dependencies:

bash Copy code npm install Scripts dev: Starts the development server.

bash Copy code npm run dev build: Builds the application for production.

bash Copy code npm run build start: Starts the application in production mode.

bash Copy code npm run start lint: Runs the linter.

bash Copy code npm run lint

Requirements

1. Create a Next.js Application
2. Create a Filter Page Design the Filter Page:

The filter page should serve as the home page of the application. Use Tailwind
CSS for styling. Customize the design and styling of the components as needed.
Add Vehicle Type and Model Year Selectors:

Fetch vehicle types from the following endpoint:

plaintext Copy code
https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
Populate a dropdown selector with the fetched vehicle types.

Create another dropdown selector for model years ranging from 2015 to the
current year.

Enable the "Next" Button:

Add a "Next" navigation button that is initially disabled. Use the Link
component for navigation. Enable the button only when a vehicle type and model
year are selected. Navigate to the Result Page:

On clicking "Next", navigate to the route result/[makeId]/[year]. 3. Create the
Result Page Implement generateStaticParams:

Define the generateStaticParams function to generate static paths for the result
pages. Fetch the necessary data to determine the paths to be pre-rendered. Fetch
Vehicle Data:

On the result page, obtain the vehicle type and model year from the params.
