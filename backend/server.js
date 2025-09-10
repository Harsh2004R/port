const express = require("express");
const cors = require("cors");
const path = require("path");
// Load environment variables
const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV === "production" ? "prod.env" : "dev.env";
dotenv.config({ path: path.resolve(__dirname, envFile) });
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler.js");

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
console.log(PORT, "port");
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
const projectRoutes = require("./routes/projects.js");
app.use("/api/v1/projects", projectRoutes);

// Experties routes
const expertiesRoutes = require("./routes/experties.js");
app.use("/api/v1/experties", expertiesRoutes);

// Experience routes
const experienceRoutes = require("./routes/experience.js");
app.use("/api/v1/experience", experienceRoutes);

// Education routes
const educationRoutes = require("./routes/education.js");
app.use("/api/v1/education", educationRoutes);

// Certifications routes
const certificationsRoutes = require("./routes/certifications.js");
app.use("/api/v1/certifications", certificationsRoutes);

// Contacts routes
const contactRoutes = require("./routes/contacts.js");
app.use("/api/v1/contacts", contactRoutes);

// Ping routes
const pingRoutes = require("./routes/warmer.js")
app.use("/api/v1",pingRoutes)
// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
