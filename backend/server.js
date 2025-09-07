const express = require("express");
const cors = require("cors");
const path = require("path");
// Load environment variables
const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV === "production" ? "prod.env" : "dev.env";
dotenv.config({ path: path.resolve(__dirname, envFile) });
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");

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


// Error handling middleware
app.use(errorHandler);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
