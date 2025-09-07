# Portfolio Project

This project is structured with separate frontend and backend folders for better organization and scalability.

## Project Structure

```
port/
├── frontend/          # React/Vite frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/           # Node.js/Express backend API
│   ├── models/        # Database models
│   ├── views/         # EJS templates
│   ├── controllers/   # Route controllers
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   ├── config/        # Configuration files
│   ├── utils/         # Utility functions
│   ├── public/        # Static files
│   └── server.js      # Main server file
└── README.md
```

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   JWT_SECRET=your-jwt-secret-key
   JWT_EXPIRE=7d
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- JavaScript/JSX

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- EJS (Templating)
- Multer (File uploads)
- Cloudinary (Image storage)
- Nodemailer (Email service)
- CORS
- Dotenv

## API Endpoints

- `GET /` - Server status page
- `GET /api/users` - Get all users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Development

Both frontend and backend support hot reloading during development:
- Frontend: `npm run dev` (Vite dev server)
- Backend: `npm run dev` (Nodemon)

## Production

- Frontend: `npm run build` (creates dist folder)
- Backend: `npm start` (runs server.js)