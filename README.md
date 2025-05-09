Event Management System - Team Contribution 

Team Members
1. Nabou Diouf (Backend Developer)
2. Bebba Elma (Frontend Developer & Tester)

Project Summary
This full stack web application allows users to browse, register for, create, and manage events. It supports two roles: Attendee and Organizer. The platform includes authentication, CRUD operations, favoriting, sharing, and responsive frontend views for both user types.

Contribution Breakdown

Nabou 
- Implemented the server side component using NodeJS and Express.
- Set up and connected the application to MongoDB Atla.
- Designed and implemented RESTful API endpoints for:
  - Events
  - User authentication (sign-up, login, protected routes)
- Created JWT based authentication and middleware to secure private routes.
- Developed CRUD operations for event data and ensured all data persisted in the database.

Bebba Elma
- Redesigned and implemented the frontend UI using HTML, Bootstrap, and JavaScript.
- Integrated dark/light mode toggle and responsive design features.
- Created separate dashboards for Organizers and Attendees, including:
  - View, register, favorite, and share events
  - Event creation/editing interface for organizers
- Conducted end-to-end testing of the app by interacting with the backend through the live UI.


How to Run
1. Clone the repository.
2. Set up your env file with:

   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret

3. Run npm install and npm run dev to start the backend server.
4. Open the frontend index.html in a browser.

