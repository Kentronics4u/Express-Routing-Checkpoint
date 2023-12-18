const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Custom middleware to verify the time of the request
const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const hours = now.getHours();

  const isWorkingHours =
    dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 17;

  if (!isWorkingHours) {
    return res.send(
      "<h1>Sorry, we are currently closed. Please visit us during working hours.</h1>"
    );
  }

  next();
};
const viewsDir = path.join(__dirname, "./views");
// Set up EJS as the view engine
app.set("views", viewsDir);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./public"))); // Serve static files from the 'public' directory

// Use the custom middleware for all routes
app.use(checkWorkingHours);

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
