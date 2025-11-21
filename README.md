Google Calendar Clone
A full-stack web application that replicates Google Calendar's core functionality with a modern Angular frontend and Node.js/Express backend.

🚀 Features
Frontend (Angular)
Multiple Views: Month, Week, and Day calendar views

Event Management: Create, edit, and delete events with color coding

Task Management: All-day tasks with checkmark indicators

Calendar Filtering: Toggle between Events, Tasks, and Holidays

Responsive Design: Works on desktop and mobile devices

Google-like UI: Clean, modern interface similar to Google Calendar

Real-time Updates: Automatic refresh when events are modified

Backend (Node.js/Express)
RESTful API: Clean API endpoints for CRUD operations

MongoDB Integration: Persistent data storage with Mongoose ODM

CORS Enabled: Cross-origin resource sharing for frontend-backend communication

Error Handling: Comprehensive error handling and validation

Indian Holidays: Pre-configured Indian national holidays

🛠 Tech Stack
Frontend
Framework: Angular 19

Language: TypeScript

Styling: CSS3 with Google Calendar-inspired design

HTTP Client: Angular HttpClient for API communication

Backend
Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose

Additional: CORS, Body-parser, Dotenv

📁 Project Structure
text
google-calendar-clone/
├── frontend/                 # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── calendar/          # Main calendar component
│   │   │   ├── event-form/        # Event creation/editing form
│   │   │   ├── services/          # Calendar service for API calls
│   │   │   └── models/           # TypeScript interfaces
│   │   ├── assets/
│   │   └── styles.css           # Global styles
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── backend/                  # Node.js API
│   ├── models/
│   │   └── Event.js          # MongoDB event schema
│   ├── routes/
│   │   └── events.js         # Event API routes
│   ├── server.js             # Express server setup
│   ├── package.json
│   └── .env.example
├── README.md
└── .gitignore
🚀 Quick Start
Prerequisites
Node.js (v18 or higher)

MongoDB (local installation or MongoDB Atlas)

Angular CLI (v19)

Installation
Clone the repository

bash
git clone https://github.com/yourusername/google-calendar-clone.git
cd google-calendar-clone
Install dependencies for both frontend and backend

bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Backend Setup
Navigate to backend directory

bash
cd backend
Environment Configuration

Create a .env file in the backend directory

Copy the contents from .env.example and update with your values:

env
MONGODB_URI=mongodb://localhost:27017/calendar
PORT=5000
Start the backend server

bash
# Development mode with auto-restart
npm run dev

# Or production mode
npm start
The backend API will be available at http://localhost:5000

Frontend Setup
Navigate to frontend directory

bash
cd frontend
Start the Angular development server

bash
ng serve
The frontend application will be available at http://localhost:4200

Using Concurrently (Optional)
You can run both frontend and backend simultaneously:

Install concurrently in the root directory

bash
npm install -g concurrently
Run both services

bash
# From the project root
concurrently "cd backend && npm run dev" "cd frontend && ng serve"
📚 API Documentation
Event Endpoints
Method	Endpoint	Description
GET	/api/events	Get all events
GET	/api/events/range?start=DATE&end=DATE	Get events in date range
POST	/api/events	Create a new event
PUT	/api/events/:id	Update an event
DELETE	/api/events/:id	Delete an event
Event Object Structure
typescript
{
  _id?: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  allDay: boolean;
  color: string;
  location: string;
  type?: 'event' | 'task' | 'holiday';
  createdAt?: Date;
  updatedAt?: Date;
}
🎯 Usage Guide
Creating Events
Click on any time slot in Week or Day view

Or click "+ Event" button in the header

Fill in event details:

Title (required)

Start and end times

Location

Description

Color coding

Creating Tasks
Click "+ Task" button in the header

Tasks are all-day events with yellow color coding

Displayed with checkmark icons in the calendar

Calendar Views
Month View: Overview of the entire month with event previews

Week View: Detailed 24-hour schedule from 6 AM to 8 PM

Day View: Focused view of a single day's events

Filtering Calendars
Toggle "Events" checkbox to show/hide user events

Toggle "Tasks" checkbox to show/hide tasks

Toggle "Holidays in India" to show/hide Indian national holidays

🔧 Development
Frontend Development
bash
cd frontend
ng serve          # Development server
ng build          # Production build
ng test           # Run tests
ng generate component component-name  # Generate new component
Backend Development
bash
cd backend
npm run dev       # Development with nodemon
npm start         # Production start
npm test          # Run tests
🌐 Deployment
Frontend Deployment (Angular)
Build the application:

bash
cd frontend
ng build --configuration production
Deploy the dist/frontend folder to your web server (Netlify, Vercel, GitHub Pages, etc.)

Backend Deployment (Node.js)
Set environment variables in production

Deploy to platforms like:

Heroku

Railway

DigitalOcean

AWS EC2

Google Cloud Run

Environment Variables for Production
env
MONGODB_URI=your_production_mongodb_connection_string
PORT=your_preferred_port
NODE_ENV=production
🗃 Database Schema
Event Collection
javascript
{
  title: String (required),
  description: String,
  start: Date (required),
  end: Date (required),
  allDay: Boolean (default: false),
  color: String (default: '#1a73e8'),
  location: String,
  type: String (enum: ['event', 'task', 'holiday']),
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
🎨 Customization
Adding New Event Colors
Update the color array in frontend/src/app/event-form/event-form.component.ts:

typescript
colors = [
  { value: '#1a73e8', name: 'Blue' },
  { value: '#ea4335', name: 'Red' },
  // Add new colors here
];
Adding More Holidays
Update the indianHolidays array in frontend/src/app/calendar/calendar.component.ts:

typescript
{
  title: 'Your Holiday',
  description: 'Holiday description',
  start: new Date(year, month, day),
  end: new Date(year, month, day),
  allDay: true,
  color: '#34a853',
  location: 'India',
  type: 'holiday'
}
🤝 Contributing
Fork the repository

Create a feature branch: git checkout -b feature/amazing-feature

Commit your changes: git commit -m 'Add amazing feature'

Push to the branch: git push origin feature/amazing-feature

Open a pull request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🐛 Troubleshooting
Common Issues
CORS Errors

Ensure backend is running on port 5000

Check that CORS is properly configured in backend/server.js

MongoDB Connection Issues

Verify MongoDB is running locally or connection string is correct

Check .env file configuration

Frontend Build Errors

Clear Angular cache: ng cache clean

Reinstall dependencies: rm -rf node_modules && npm install

Port Already in Use

Change port in backend/.env or frontend/angular.json

📞 Support
If you encounter any issues or have questions:

Check the troubleshooting section above

Create an issue in the GitHub repository

Contact the development team

🙏 Acknowledgments
Google Calendar for UI/UX inspiration

Angular team for the excellent framework

MongoDB for the database solution

Express.js for the backend framework

Happy Coding! 🎉

