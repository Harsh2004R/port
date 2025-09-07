const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV === "production" ? "prod.env" : "dev.env";
dotenv.config({ path: path.resolve(__dirname, envFile) });
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Import routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

// Error handling middleware
// app.use(errorHandler);

// 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
